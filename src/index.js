import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Product from './pages/product';

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
    path: '/product/basic-tee-tay-son', element: <Product id="1"/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
