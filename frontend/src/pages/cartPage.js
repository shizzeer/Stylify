import React, {useEffect} from 'react';
import Navbar from "../components/navbar";
import ProductsGrid from "../components/productsGrid";
import ResultsInfo from "../components/resultsInfo";
import {useNavigate} from "react-router-dom";
import handleSessionAuth from "../api/auth";

function CartPage() {
    const navigate = useNavigate();
    useEffect(() => {
        handleSessionAuth(navigate);
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <ResultsInfo category={'Cart'} />
            <ProductsGrid fromCart={true} />
        </React.Fragment>
    )
}

export default CartPage;