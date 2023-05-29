import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/home";
import Login from './pages/login';
import SignUp from './pages/signUp';
import Sell from './pages/sell';
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/products/all" element={<Products category={'All'} />}></Route>
                <Route path="/products/mens" element={<Products category={'Men'} />}></Route>
                <Route path="/products/women" element={<Products category={'Women'} />}></Route>
                <Route path="/products/kids" element={<Products category={'Kids'} />}></Route>
                <Route path="/products/:id" element={<ProductDetails />}></Route>
                <Route path="/sell" element={<Sell />}></Route>
                {/*<Route path="/test" element={<ProductDetails />}></Route>*/}
            </Routes>
        </React.Fragment>
    )
}

export default App