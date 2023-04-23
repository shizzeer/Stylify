import React from 'react';
import Navbar from "../components/navbar";
import '../styles/sell.css';

import ProductFeatureInput from "../components/productFeatureInput";
import ProductFeatureDescription from "../components/productFeatureDescription";
import ProductFeatureSelect from "../components/productFeatureSelect";
function Sell() {
    const categoryOptions = [{value: "Women"}, {value: "Men"}, {value: "Kids"}];
    const conditionOptions = [{value: "New"}, {value: "Used"}];
    return(
        <React.Fragment>
            <Navbar />
            <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
                <div className="pad align-content-center container">
                    <h1>Sell clothes</h1>
                    <div className="customCard pad row justify-content-center">
                        <div className="mx-auto addPhotoArea">
                            <button type="button" className="btn btn-outline-success btn-lg">
                                <i className="bi bi-plus-lg"></i> Add photo
                            </button>
                        </div>
                    </div>
                    <div className="verticalSpacer"></div>
                    <ProductFeatureInput featureName={"Title"} placeholderValue={"e.g. White sweater"}/>
                    <ProductFeatureDescription featureName={"Description"}/>
                    <ProductFeatureSelect featureName={"Category"} optionValues={categoryOptions}/>
                    <ProductFeatureSelect featureName={"Condition"} optionValues={conditionOptions}/>
                    <ProductFeatureInput featureName={"Price"} placeholderValue={"0,00 $"}/>
                    <div className="verticalSpacer"></div>
                    <div className="end"><button type="button" className="sellBtn verticalSpacer spacer btn btn-success">Add</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sell