import React from 'react';

import Navbar from '../components/navbar';
import ProductsGrid from '../components/productsGrid';
import ResultsInfo from "../components/resultsInfo";

function Mens() {
    return (
        <React.Fragment>
            <Navbar />
            <ResultsInfo />
            <ProductsGrid />
        </React.Fragment>
    )
}

export default Mens