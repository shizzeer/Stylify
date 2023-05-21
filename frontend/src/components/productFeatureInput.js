import React from 'react';

function ProductFeatureInput( {featureName, type, placeholderValue, handler, errors} ) {
    return (
        <React.Fragment>
            <div className="customCard pad row justify-content-center">
                <div className="mx-auto productFeaturesCard">
                    <div className="start"><span className="featureName">{featureName}</span></div>
                    <div className="end">
                        <input className="featureInput"
                               type={type}
                               id="title"
                               placeholder={placeholderValue}
                               name="title"
                               onChange={handler}></input>
                        <br /><br />
                        {errors && <div className="error">{errors[featureName.toLowerCase()]}</div>}
                    </div>
                </div>
            </div>
            <div className="dividerLine"></div>
        </React.Fragment>
    )
}

export default ProductFeatureInput