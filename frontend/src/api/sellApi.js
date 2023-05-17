import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import api from './api';

const RedirectComponent = () => {
    const navigate = useNavigate();
    navigate('/login');
    console.log("dupa");

    return null;
};

class SellApi {
    constructor(jwtToken) {
        this.token = jwtToken;
        this.productName = null;
        this.productDescription = null;
        this.productCategory = "Women"; // default category
        this.productCondition = "New"; // default condition
        this.productPrice = null;
    }

    handleTitleChange = (event) => {
        this.productName = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.productDescription = event.target.value;
    }

    handleCategoryChange = (event) => {
        this.productCategory = event.target.value;
    }

    handleConditionChange = (event) => {
        this.productCondition = event.target.value;
    }

    handlePriceChange = (event) => {
        this.productPrice = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        api.post('/product/sell', {
            name: this.productName,
            description: this.productDescription,
            category: this.productCategory,
            condition: this.productCondition,
            price: this.productPrice
        })
            .then((response) => {
                alert(response.data.message);
                window.location.reload();
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please, log in again");
                        window.location.href = "/login";
                    }
                    if (error.response.status === 400) {
                        alert(error.response.data.error);
                        window.location.reload();
                    }
                } else {
                    console.log(error.message);
                }
            });
        /*fetch('/api/product/sell', {
            method: 'POST',
            body: JSON.stringify({
                name: this.productName,
                description: this.productDescription,
                category: this.productCategory,
                condition: this.productCondition,
                price: this.productPrice
            }),
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === '') {
                    alert(data.error);
                } else {
                    alert(data.message);
                }
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });*/


    }
}

export default SellApi;