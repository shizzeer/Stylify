import React from "react";

function ProductFeatureDescription( {featureName} ) {
   return (
       <React.Fragment>
           <div className="customCard pad row justify-content-center">
               <div className="mx-auto productFeaturesCard">
                   <div className="start"><span className="featureName">{featureName}</span></div>
                   <div className="end"><textarea className="textAreaInput featureInput" id="description" placeholder="e.g. Worn only a few times" name="description"></textarea></div>
               </div>
           </div>
           <div className="dividerLine"></div>
       </React.Fragment>
   )
}

export default ProductFeatureDescription;