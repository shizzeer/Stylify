import {useState} from "react";

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

        fetch('/api/product/sell', {
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
            });
    }
}

export default SellApi;