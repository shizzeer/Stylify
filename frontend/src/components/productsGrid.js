import React from 'react';
import Product from "./product";

function ProductsGrid() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Product seller={"user001"} productImg={"./img/sweater.png"} price={"35,00"} size={"M"} company={"Company"}/>
                    <Product seller={"user002"} productImg={"./img/trousers.png"} price={"20,00"} size={"M"} company={"Company"}/>
                    <Product seller={"user003"} productImg={"./img/shoes.png"} price={"45,00"} size={"42"} company={"Company"}/>
                    <Product seller={"user004"} productImg={"./img/t-shirt.png"} price={"10,00"} size={"M"} company={"Company"}/>
                    <Product seller={"user005"} productImg={"./img/sweater.png"} price={"35,00"} size={"M"} company={"Company"}/>
                    <Product seller={"user006"} productImg={"./img/shoes.png"} price={"45,00"} size={"42"} company={"Company"}/>
                    <Product seller={"user007"} productImg={"./img/t-shirt.png"} price={"10,00"} size={"M"} company={"Company"}/>
                    <Product seller={"user008"} productImg={"./img/trousers.png"} price={"20,00"} size={"M"} company={"Company"}/>
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