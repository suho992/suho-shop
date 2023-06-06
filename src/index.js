import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from './redux/slice'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Product from './pages/product';
import Sneakers from './pages/sneakers';
import AddProduct from './admin/addProduct';
import Dashboard from './admin/dashboard';
import Products from './admin/products';
const store = configureStore({
  reducer: {
    isOpen: notificationSlice
  },
})


const router = createBrowserRouter([
  {
    path: '/', element: <Home/>
  },
  {
    path: '/login', element: <Login/>
  },
  {
    path: '/signup', element: <Signup/>
  },
  {
    path: '/sneakers', element: <Sneakers/>
  },
  {
    path: '/sneakers/:slug', element: <Product/>
  },
  {
    path: '/admin/dashboard', element: <Dashboard/>
  },
  {
    path: '/admin/products', element: <Products/>
  },
  {
    path: '/admin/products/add-product', element: <AddProduct/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
