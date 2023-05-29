import React, {useEffect, useState} from 'react';
import Product from "./product";
import api from '../api/api';
import getBase64ImageFormat from "../api/images";

function ProductsGrid({productsCategory}) {
    const [products, setProducts] = useState([]);
    let base64Image = '';
    let base64ImageFormat = '';

    useEffect(() => {
        fetchProducts();
    }, [productsCategory]);

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
                        return <Product product={product} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsGrid;