import Navbar from '../components/navbar'
import {useNavigate} from 'react-router-dom'
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase_setup/firebase"
import { useEffect, useState } from "react";
import ProductList from '../components/productList';
import ContactUs from '../components/contactus';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';

export default function Home() {
  const navigate = useNavigate()
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
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <ProductList products={products}/>
        <ContactUs/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  )
}
