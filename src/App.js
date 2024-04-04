import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Account/Login';
import Reigister from './pages/Account/Reigister';
import ForgotPassword from './pages/Account/ForgotPassword';
import ResetPassword from './pages/Account/ResetPassword';
import Profile from './pages/Account/Profile';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import RefundPolicy from './pages/Policy/RefundPolicy';
import ShippingPolicy from './pages/Policy/ShippingPolicy';
import WarrantyPolicy from './pages/Policy/WarrantyPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import { PrivateRoutes } from './routing/privateRoutes';
import { OpenRoutes } from './routing/openRoutes';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />  

            {/* blog */}
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            {/* info */}
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />

            {/* product */}
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout />} />
            {/* any function */}
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="my-order" element={<Order />} />
            {/* account */}
            <Route path="login" element={<Login />} />
            <Route path="reigister" element={<Reigister />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="my-profile" element={<Profile />} />
            {/* policy */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="warranty-policy" element={<WarrantyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
