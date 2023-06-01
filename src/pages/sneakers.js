import Navbar from "../components/navbar";
import ProductList from "../components/productList";
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase_setup/firebase"
import { useEffect, useState } from "react";

export default function Sneakers(){

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
    <div>
        <div className="bg-white">
        <Navbar/>
        <div className="pt-6">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-4">
                <ProductList products={products}/>
            </div>
            </div>
        </div>
    </div>
    )
}