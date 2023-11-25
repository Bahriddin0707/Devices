import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider} from "react-use-cart";
import Navbar from "./component/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./component/Footer/Footer";

function App() {


  return (
     <BrowserRouter>
       <Navbar/>
       <CartProvider>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="cart" element={<Cart />} />
         </Routes>
       </CartProvider>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;
