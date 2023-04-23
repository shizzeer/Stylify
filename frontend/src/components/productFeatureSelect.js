import React from 'react';
import '../styles/productFeatureSelect.css';
import '../styles/sell.css';

function ProductFeatureSelect( {featureName, optionValues} ) {
    return (
        <React.Fragment>
            <div className="customCard pad row justify-content-center">
                <div className="mx-auto productFeaturesCard">
                    <div className="start"><span className="featureName">{featureName}</span></div>
                    <div className="end">
                        <select className="productFeatureSelect featureValue" aria-label="Default select example">
                            {optionValues?.map((option) => (
                                <option value={option.value}>{option.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="dividerLine"></div>
        </React.Fragment>
    )
}

export default ProductFeatureSelect