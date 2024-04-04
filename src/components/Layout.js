//rafce
import React from 'react'
import { Outlet } from 'react-router-dom' //lồng components con vào cha
import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </>
  )
}

export default Layout