import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FinalLogin from "./Pages/FinalLogin";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import ErrorPage from "./Pages/ErrorPage";
import Checkout from "./Pages/Checkout";
import SingleProductPage from "./Pages/SingleProductPage";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import PrivateRoute from "./Pages/PrivateRoute";
import AuthWrapper from "./Pages/AuthWrapper";

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="checkout" element={<Checkout />} />

          {/* <PrivateRoute path="checkout" element={<Checkout />} /> */}

          {/* <PrivateRoute exact path="/checkout">
          <Checkout/>
        </PrivateRoute> */}
          <Route path="login" element={<FinalLogin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default App;
