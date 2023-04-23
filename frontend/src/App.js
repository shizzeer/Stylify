import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/home";
import Login from './pages/login';
import SignUp from './pages/signUp';
import Mens from './pages/mens';
import Sell from './pages/sell';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/mens" element={<Mens />}></Route>
                <Route path="/sell" element={<Sell />}></Route>
                {/*<Route path="/women" element={<Women />}></Route>*/}
                {/*<Route path="/kids" element={<Kids />}></Route>*/}
            </Routes>
        </React.Fragment>
    )
}

export default App