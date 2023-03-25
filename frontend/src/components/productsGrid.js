import React from 'react';
import '../productsGrid.css';
import Product from "./product";

function ProductsGrid() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </React.Fragment>
        // <div className="container-fluid">
        //     <div className="row justify-content-center">
        //         <div className="col-sm-3 col-md-6 col-lg-2" style={{color:"white", backgroundColor:"orange"}}>
        //             This is div1.
        //         </div>
        //         <div className="col-sm-9 col-md-6 col-lg-2" style={{color:"white", backgroundColor:"blue"}}>
        //             This is div2.
        //         </div>
        //         <div className="col-sm-3 col-md-6 col-lg-2" style={{color:"white", backgroundColor:"green"}}>
        //             This is div3.
        //         </div>
        //         <div className="col-sm-9 col-md-6 col-lg-2" style={{color:"white", backgroundColor:"gray"}}>
        //             This is div4.
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductsGrid;