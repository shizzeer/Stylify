import React, {useState} from 'react';
import Navbar from "../components/navbar";
import '../styles/sell.css';

import ProductFeatureInput from "../components/productFeatureInput";
import ProductFeatureDescription from "../components/productFeatureDescription";
import ProductFeatureSelect from "../components/productFeatureSelect";
import SellApi from '../api/sellApi';

function Sell() {
    const categoryOptions = [{value: "Women"}, {value: "Men"}, {value: "Kids"}];
    const conditionOptions = [{value: "New"}, {value: "Used"}];
    const token = localStorage.getItem('jwtToken');
    const sellApi = new SellApi(token);


    return(
        <React.Fragment>
            <Navbar />
            <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
                <div className="pad align-content-center container">
                    <h1>Sell clothes</h1>
                    <div className="customCard pad row justify-content-center">
                        <div className="mx-auto addPhotoArea">
                            <input type="file" name="image" accept="image/png, image/jpeg"/>
                            <button type="button" className="btn btn-outline-success btn-lg">
                                <i className="bi bi-plus-lg"></i> Add photo
                            </button>
                        </div>
                    </div>
                    <div className="verticalSpacer"></div>
                    <ProductFeatureInput featureName={"Title"} type={"text"} placeholderValue={"e.g. White sweater"} handler={sellApi.handleTitleChange}/>
                    <ProductFeatureDescription featureName={"Description"} handler={sellApi.handleDescriptionChange}/>
                    <ProductFeatureSelect featureName={"Category"} optionValues={categoryOptions} handler={sellApi.handleCategoryChange}/>
                    <ProductFeatureSelect featureName={"Condition"} optionValues={conditionOptions} handler={sellApi.handleConditionChange}/>
                    <ProductFeatureInput featureName={"Price"} type={"number"} placeholderValue={"0,00 $"} handler={sellApi.handlePriceChange}/>
                    <div className="verticalSpacer"></div>
                    <div className="end"><button type="button" className="sellBtn verticalSpacer spacer btn btn-success"
                    onClick={sellApi.handleSubmit}>Add</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sell