import React from 'react';

function ProductFeatureInput( {featureName, placeholderValue} ) {
    return (
        <React.Fragment>
            <div className="customCard pad row justify-content-center">
                <div className="mx-auto productFeaturesCard">
                    <div className="start"><span className="featureName">{featureName}</span></div>
                    <div className="end"><input className="featureInput" type="text" id="title" placeholder={placeholderValue} name="title"></input></div>
                </div>
            </div>
            <div className="dividerLine"></div>
        </React.Fragment>
    )
}

export default ProductFeatureInput