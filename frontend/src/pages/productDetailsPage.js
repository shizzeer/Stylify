import React, {useEffect, useState} from 'react';
import Navbar from "../components/navbar";
import {useParams} from "react-router";
import '../styles/productDetails.css';
import api from '../api/api';
import productsGrid from "../components/productsGrid";
import ProductDetails from "../components/productDetails";
import getBase64ImageFormat from "../api/images";
import {useNavigate} from "react-router-dom";
import handleSessionAuth from "../api/auth";

function ProductDetailsPage() {
    const navigate = useNavigate();
    useEffect(() => {
        handleSessionAuth(navigate);
    }, []);

    const { id } = useParams(); // pobranie id z adresu URL
    const [product, setProduct] = useState(null);
    let base64ImageFormat = '';
    let base64Image = '';


    useEffect(() => {
        api.get('/products/details/' + id)
            .then((response) => {
                setProduct(response.data.product); // ta metoda dziala asynchronicznie
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please, log in again");
                        window.location.href = "/login";
                    }
                    if (error.response.status === 204) {
                        alert(error.response.data.error);
                        window.location.href = "/all";
                    }
                } else {
                    console.log(error.message);
                }
            });
    }, [id]);

    if (product) {
        base64ImageFormat = getBase64ImageFormat(product.image);
        base64Image = 'data:image/' + base64ImageFormat + ';base64,' + product.image;
        product.image = base64Image;
        return (
            <React.Fragment>
                <Navbar />
                <ProductDetails product={product}/>
            </React.Fragment>
        );
    } else {
        return <div>asdf</div>
    }
}

export default ProductDetailsPage;