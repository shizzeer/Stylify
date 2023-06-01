import api from './api';
import {type} from "@testing-library/user-event/dist/type";

class SellApi {
    constructor() {
        this.productName = null;
        this.productDescription = null;
        this.productImage = null;
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

    handleImageChange = (event) => {
        this.productImage = event.target.files[0];
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.productImage);

        api.post('/product/sell', {
            name: this.productName,
            description: this.productDescription,
            image: this.productImage,
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
    }
}

export default SellApi;