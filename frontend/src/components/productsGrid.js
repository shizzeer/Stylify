import React, {useEffect, useState} from 'react';
import Product from "./product";
import api from '../api/api';
import getBase64ImageFormat from "../api/images";
import {Navigate} from "react-router-dom";

function ProductsGrid({productsCategory, fromCart=false}) {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    let base64Image = '';
    let base64ImageFormat = '';

    useEffect(() => {
        if (!fromCart) {
            fetchProducts();
        }
    }, [productsCategory]);

    useEffect(() => {
        if (fromCart) {
            fetchProductsFromCart();
        }
    }, [])

    const fetchProducts = () => {
        api.get('/products/' + productsCategory)
            .then((response) => {
                setProducts(response.data); // ta metoda dziala asynchronicznie
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
    };

    const fetchProductsFromCart = () => {
        api.get('/cart/get')
            .then((response) => {
                setProducts(response.data.products); // ta metoda dziala asynchronicznie
                setTotal(response.data.total);
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

    const handleOrderClick = () => {
        console.log('asdf');
        window.location.href = '/order';
    }

    if (products) {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {products.map((product) => {
                            base64ImageFormat = getBase64ImageFormat(product.image);
                            if (product.image.substring(0, 4) !== 'data') {
                                base64Image = 'data:image/' + base64ImageFormat + ';base64,' + product.image;
                                product.image = base64Image;
                            }
                            return <Product product={product} />;
                        })}
                    </div>
                    {total > 0 && <div><h2 style={{color: "#096A2E"}}>Total: {total}$</h2><br /></div>}
                    {total > 0 && <button type="button"
                            onClick={handleOrderClick}
                            className="productInfoBtn btn btn-success">Order now</button>}
                </div>
            </React.Fragment>);
    } else {
        return <div>Fetching products...</div>;
    }
}

export default ProductsGrid;