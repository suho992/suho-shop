import { useEffect, useState, Fragment } from 'react'
import Navbar from '../components/navbar'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase_setup/firebase'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Product() {
  const {slug} = useParams()
  const [product, setProduct] = useState({img:[], variant:[{variant:'Select variant',price:0}]})
  const [selected, setSelected] = useState({variant:"Size"})
  const getProduct = async () => {
    const q = query(collection(db, "products"), where("slug", '==', slug))
    const qSnap = await getDocs(q)
    let productData = []
    qSnap.forEach((doc) => {
      console.log(doc.data())
      productData.push(doc.data())
    });
    setProduct(productData[0])
  }

  useEffect(()=>{
    getProduct()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="bg-white">
    <Navbar/>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid gap-x-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
              {product.img.map((p, i) => (
                <div key={i} className="group relative">
                  <div className="aspect-w-5 aspect-h-6 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    <img
                      src={p}
                      alt={product.slug}
                      className="h-full w-full object-cover object-bottom lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className='py-4 lg:col-span-1'>
              <div className='my-4 mb-8'>
                <h1 className='text-sm font-semibold text-gray-400'>{product.brand}</h1>
                <h1 className="text-xl font-medium">{product.name}</h1>
              </div>
              <div className='my-2'>
                <h1 className="text-xl">${product.variant[0].price}</h1>
              </div>
              <div className='my-2 mt-20'>
                <p className="text-sm underline float-right my-2">Size guide</p>
              </div>
              <div className="w-full">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-4 pl-3 pr-10 text-left border focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
                      <span className="block truncate">{selected.variant}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {product.variant.map((variant, i) => (
                          <Listbox.Option
                            key={i}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                              }`
                            }
                            value={variant}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {variant.variant}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className='my-2'>
                <button type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Buy now</button>
              </div>
              <div className='my-4'>
                <div className='p-4 bg-gray-100'>
                  <h1 className='font-semibold mb-2'>Description:</h1>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
