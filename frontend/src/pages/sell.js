import React, {useEffect, useState} from 'react';
import Navbar from "../components/navbar";
import '../styles/sell.css';

import ProductFeatureInput from "../components/productFeatureInput";
import ProductFeatureDescription from "../components/productFeatureDescription";
import ProductFeatureSelect from "../components/productFeatureSelect";
import api from '../api/api';
import {useNavigate} from "react-router-dom";
import handleSessionAuth from "../api/auth";

export default function Sell() {
    const navigate = useNavigate();
    useEffect(() => {
        handleSessionAuth(navigate);
    }, []);

    const categoryOptions = [{value: "Women"}, {value: "Men"}, {value: "Kids"}];
    const conditionOptions = [{value: "New"}, {value: "Used"}];
    const allowedSizes = ['XS', 'S', 'M', 'L', 'XXL'];

    // Component state
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productBase64Image, setProductBase64Image] = useState('');
    const [productCategory, setProductCategory] = useState('Women'); // default category
    const [productCondition, setProductCondition] = useState('New'); // default condition
    const [productPrice, setProductPrice] = useState(0);
    // Error handling
    const [errors, setErrors] = useState({});

    // Additional state for displaying image preview
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImg, setPreviewImg] = useState(false);

    const handleNameChange = (event) => {
        const name = event.target.value
        if (!name) {
            setErrors((prevErrors) => ({...prevErrors, name: 'Name of a product is required'}));
        } else {
            setProductName(name);
            setErrors((prevErrors) => ({...prevErrors, name: ''}));
        }
    }

    const handleDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    }

    const handleSizeChange = (event) => {
        const size = event.target.value;
        const numericalSize = parseInt(size);
        if (allowedSizes.includes(size) || (!isNaN(numericalSize) && (numericalSize >= 28 && numericalSize <= 50))) {
            setErrors((prevErrors) => ({...prevErrors, size: ''}));
            if (!isNaN(numericalSize)) {
                setProductSize(numericalSize.toString());
            } else {
                setProductSize(size);
            }
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                size: 'Allowed sizes: XS, S, M, L, XXL and (28-50).'
            }));
        }
    }

    const handleCategoryChange = (event) => {
        setProductCategory(event.target.value);
    }

    const handleConditionChange = (event) => {
        setProductCondition(event.target.value);
    }

    const handlePriceChange = (event) => {
        const price = parseFloat(event.target.value);
        if (isNaN(price) || price <= 0) {
            setErrors((prevErrors) => ({...prevErrors, price: 'Price has to be positive number'}));
        } else {
            setErrors((prevErrors) => ({...prevErrors, price: ''}));
            setProductPrice(price);
        }
    }


    const handleImagePreview  = (event) => {
        const imageFile = event.target.files[0];
        const reader = new FileReader();

        // Setting URL to image inside selectedImage to preview it
        reader.onload = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(imageFile);
    };

    const handleImageDisplay = (event) => {
        // After setting previewImg an image should be displayed
        // This method is invoked after clicking Add photo button
        setPreviewImg(true);
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        const reader = new FileReader();

        // Converting image to base64 and sending it to the server
        reader.onloadend = () => {
            const base64Image = btoa(
                new Uint8Array(reader.result).reduce(
                    (previousData, currentByte) => previousData + String.fromCharCode(currentByte),
                    ''
                )
            );
            setProductBase64Image(base64Image);
        };
        reader.readAsArrayBuffer(imageFile);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const noErrors = Object.values(errors).every(error => error === '');

        if (noErrors) {
            api.post('/products/sell', {
                name: productName,
                description: productDescription,
                size: productSize,
                image: productBase64Image,
                category: productCategory,
                condition: productCondition,
                price: productPrice
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


    return(
        <React.Fragment>
            <Navbar />
            <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
                <div className="pad align-content-center container">
                    <h1>Sell clothes</h1>
                    <div className="customCard pad row justify-content-center">
                        {previewImg && <img src={selectedImage} alt="Photo"/>}
                        {
                            !previewImg &&
                            <div className="mx-auto addPhotoArea">
                                <input type="file" name="image" accept="image/png, image/jpeg"
                                       onChange={(event) => {
                                           handleImageChange(event);
                                           handleImagePreview(event);
                                       }}/>
                                <button type="button" className="btn btn-outline-success btn-lg" onClick={handleImageDisplay}>
                                    <i className="bi bi-plus-lg"></i> Add photo
                                </button>
                            </div>
                        }

                    </div>
                    <div className="verticalSpacer"></div>
                    <ProductFeatureInput featureName={"Name"} type={"text"} placeholderValue={"e.g. White sweater"}
                                         handler={handleNameChange} errors={errors}/>
                    <ProductFeatureDescription featureName={"Description"} handler={handleDescriptionChange}/>
                    <ProductFeatureInput featureName={"Size"} type={"text"} placeholderValue={"Size"}
                                         handler={handleSizeChange} errors={errors}/>
                    <ProductFeatureSelect featureName={"Category"} optionValues={categoryOptions} handler={handleCategoryChange}/>
                    <ProductFeatureSelect featureName={"Condition"} optionValues={conditionOptions} handler={handleConditionChange}/>
                    <ProductFeatureInput featureName={"Price"} type={"number"} placeholderValue={"0,00 $"}
                                         handler={handlePriceChange} errors={errors}/>
                    <div className="verticalSpacer"></div>
                    <div className="end"><button type="button" className="sellBtn verticalSpacer spacer btn btn-success"
                    onClick={handleSubmit}>Add</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}
