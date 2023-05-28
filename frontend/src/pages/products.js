import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';

import Navbar from '../components/navbar';
import ProductsGrid from '../components/productsGrid';
import ResultsInfo from "../components/resultsInfo";
import handleSessionAuth from "../api/auth";

function Products({category}) {
    const navigate = useNavigate();
    useEffect(() => {
        handleSessionAuth(navigate);
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <ResultsInfo category={category}/>
            <ProductsGrid productsCategory={category.toLowerCase()}/>
        </React.Fragment>
    )
}

export default Products