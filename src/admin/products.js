import Sidebar from "./sidebar";
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase_setup/firebase"
import { useEffect, useState } from "react";

export default function Products(){
    const [products, setProducts] = useState([])
    const fetchProduct = async () => {
        await getDocs(collection(db, "products"))
        .then(querySnapshot => {
            const newData = querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id}))
            setProducts(newData)
        })
    }

    useEffect(()=>{
        fetchProduct()
    }, [])

  return(
    <div className="bg-white">
        <Sidebar/>
        <div className="flex-1 w-full ml-64 bg-white p-8">
        <table class="border-collapse border-slate-200 border-2">
          <thead>
            <tr>
              <th class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">Product Name</th>
              <th class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">Brand</th>
              <th class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">Category</th>
            </tr>
          </thead>
          <tbody>
              {
                  products.map(e => (
                    <tr>
                        <td class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">{e.name}</td>
                        <td class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">{e.brand}</td>
                        <td class="border-2 px-4 py-2 border-slate-100 border-x-2 border-y-0">{e.category}</td>
                    </tr>
                  ))
              }
          </tbody>
        </table>
        </div>
    </div>
  )
}