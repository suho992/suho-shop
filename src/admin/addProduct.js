import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { db, getDownloadURL, ref, storage, uploadBytes } from '../firebase_setup/firebase'
import { addDoc, collection } from "firebase/firestore"
import Sidebar from './sidebar'
import Notification from '../components/notification'
import { useDispatch } from 'react-redux'
import { openNotification } from '../redux/slice'


export default function AddProduct() {
    const dispatch = useDispatch()
    const [variant, setVariant] = useState([{variant:'', price:0}])
    const [form, setForm] = useState({category:'sneakers', brand:'Off-White', name:'', description:''})
    const [images, setImages] = useState([])
    const addVarian = e => {
      const xVariant = variant.slice()
      xVariant.push({variant:'', price:0})
      setVariant(xVariant)
    }
    const onChange = e => {
      if(e.target.name === 'name'){
        let r = (Math.random() + 1).toString(36).substring(7);
        const slug = e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'-'+r
        setForm({...form, ...{[e.target.name] : e.target.value, slug}})
      }else{
        setForm({...form, ...{[e.target.name] : e.target.value}})
      }
    }
    const onVariantChange = e => {
      const indx = e.target.name.split('-')[1]
      const name = e.target.name.split('-')[0]
      const xVariant = variant.slice()
      if(name !== 'variant'){
        xVariant[parseInt(indx)][name] = parseInt(e.target.value)
      }else{
        xVariant[parseInt(indx)][name] = e.target.value
      }
      setVariant(xVariant)
      
    }
    const onInputImage = e => {
      setImages({...images, ...{[e.target.name] : e.target.files[e.target.files.length-1]}})
    }
    const upload = () => {
      if(form.name === ''){
        dispatch(openNotification({title:'Oops...', msg:'It looks like you forgot to enter the product name'}))
        return 
      }
      if(form.description === ''){
        dispatch(openNotification({title:'Oops...', msg:'It looks like you forgot to enter the Description'}))
        return 
      }
      if(images.length < 4){
        dispatch(openNotification({title:'Oops...', msg:'It looks like you forgot to enter the Images'}))
        return 
      }
      const img1 = ref(storage, `/images/${form.slug+"-image-1"}`)
      uploadBytes(img1, images["image-1"]).then((snapshot) => {
        getDownloadURL(img1).then(url_1 => {

          const img2 = ref(storage, `/images/${form.slug+"-image-2"}`)
          uploadBytes(img2, images["image-2"]).then((snapshot) => {
            getDownloadURL(img2).then(url_2 => {

              const img3 = ref(storage, `/images/${form.slug+"-image-3"}`)
              uploadBytes(img3, images["image-3"]).then((snapshot) => {
                getDownloadURL(img3).then(url_3 => {

                  const img4 = ref(storage, `/images/${form.slug+"-image-4"}`)
                  uploadBytes(img4, images["image-4"]).then((snapshot) => {
                    getDownloadURL(img4).then(url_4 => {
                      let data = {...form,...{variant}}
                      let img = []
                      img[0] = url_1
                      img[1] = url_2
                      img[2] = url_3
                      img[3] = url_4
                      data.img = img
                      try{
                        addDoc(collection(db, "products"), data).then(()=>{
                          dispatch(openNotification({title:'Upload success', msg:'jlaksdjflaksjdf'}))
                          window.location.reload(); 
                        })
                      }catch (e){
                        console.error("Error adding document: ", e)
                      }
                    })
                  })
                })
              })
            })
          })
        })
      })
    }


  return (
    <div className="bg-white">
      <Sidebar/>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 md:ml-64 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Name
                      </label>
                      <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                              required
                              onChange={onChange}
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="..."
                          />
                          </div>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                          Description
                      </label>
                        <div className="mt-2">
                            <textarea
                            required
                            onChange={onChange}
                            id="description"
                            name="description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                          Brand
                      </label>
                      <div className="mt-2">
                          <select
                          id="brand"
                          name="brand"
                          onChange={onChange}
                          autoComplete="brand"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option value="Off-White">Off-White</option>
                          <option value="Nike">Nike</option>
                          <option value="Addidas">Addidas</option>
                          </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                          Category
                      </label>
                      <div className="mt-2">
                          <select
                          id="category"
                          name="category"
                          onChange={onChange}
                          autoComplete="category"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option value="sneakers">Sneakers</option>
                          <option value="apparel">Apparel</option>
                          <option value="electronic">Electronic</option>
                          </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Images
                    </label>
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label htmlFor="image-1" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
                                 <span>Upload a file</span>
                                 <input id="image-1" onChange={onInputImage} name="image-1" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                htmlFor="image-2"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                <span>Upload a file</span>
                                <input id="image-2" onChange={onInputImage} name="image-2" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                htmlFor="image-3"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                <span>Upload a file</span>
                                <input id="image-3" onChange={onInputImage} name="image-3" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                htmlFor="image-4"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                <span>Upload a file</span>
                                <input id="image-4" onChange={onInputImage} name="image-4" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-6 py-4">Variant</th>
                            <th scope="col" className="px-6 py-4">Stock</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4">Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                variant.map((a, i) => (
                                    <tr key={i} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 w-1/4 lg:w-1/2">
                                            <input required onChange={onVariantChange} type="text" name={"variant-"+i} placeholder='variant' className="w-full border-0"></input>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <input required onChange={onVariantChange} type="number" name={"stock-"+i} placeholder='0' className="w-full border-0"></input>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <input required onChange={onVariantChange} type="number" name={"price-"+i} placeholder='0' className="w-full border-0"></input>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <input onChange={onVariantChange} type="number" name={"disc-"+i} placeholder='0' className="w-full border-0"></input>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                        <button onClick={addVarian} className="flex w-full justify-center rounded-md bg-transparent px-3 py-1.5 my-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"> Add variant</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
            onClick={upload}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Save
            </button>
        </div>
        <Notification/>
    </div>
    </div>
  )
}
