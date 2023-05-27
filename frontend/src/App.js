import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/home";
import Login from './pages/login';
import SignUp from './pages/signUp';
import Sell from './pages/sell';
import Products from "./pages/products";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/all" element={<Products category={'All'} />}></Route>
                <Route path="/mens" element={<Products category={'Men'} />}></Route>
                <Route path="/women" element={<Products category={'Women'} />}></Route>
                <Route path="/kids" element={<Products category={'Kids'} />}></Route>
                <Route path="/sell" element={<Sell />}></Route>
            </Routes>
        </React.Fragment>
    )
}

export default App