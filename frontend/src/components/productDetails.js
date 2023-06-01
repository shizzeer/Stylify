import React from "react";
import api from "../api/api";
import {Navigate} from "react-router-dom";

function ProductDetails({product}) {

    const addToCart = () => {
        const headerStart = product.image.indexOf(',');
        const base64Image = product.image.substring(headerStart + 1);
        api.post('/cart/add', {
            name: product.name,
            description: product.description,
            size: product.size,
            image: base64Image,
            category: product.category,
            condition: product.condition,
            price: product.price,
            sellerUsername: product.sellerUsername,
            productId: product.productId
        })
            .then((response) => {
                alert(response.data.message);
                return <Navigate to="/all" />;
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please, log in again");
                        window.location.href = "/login";
                    }
                    if (error.response.status === 400) {
                        alert(error.response.data.error);
                    }
                } else {
                    console.log(error.message);
                }
            });
    }

    return (
        <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
            <div className="pad align-content-center container">
                <div className="customCard pad row justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-4 productImg">
                            <img src={product.image} style={{height: '100%', width: '100%'}}/>
                        </div>
                        <div className="col-sm-12 col-md-6 productInfo">
                            <h1><b>{product.name}</b></h1>
                            <div className="verticalSpacer"></div>
                            <span className="info"><b>Category:</b> {product.category}</span><br />
                            <span className="info"><b>Condition:</b> {product.condition}</span><br/>
                            <span className="info"><b>Size:</b> {product.size}</span><br/>
                            <span className="info"><b>Seller:</b> {product.sellerUsername}</span><br/><br />
                            <h2><b>Price: {product.price}$</b></h2>
                            <div className="verticalSpacer"></div>
                            <div className="row">
                                <button type="button"
                                        onClick={addToCart}
                                        className="productInfoBtn btn btn-success">Add to cart</button>
                                {/*<button type="button" className="productInfoBtn btn btn-success">Buy now!</button>*/}
                            </div>
                        </div>
                    </div>
                    <div className="desc col-md-10">
                        <h2>Description</h2>
                        <p className="text-justify">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;