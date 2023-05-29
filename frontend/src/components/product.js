import '../styles/product.css';
import '../styles/index.css';
import {useState} from "react";
import ProductDetails from "../pages/productDetails";

function Product( {product} ) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (product) => {
        console.log(product.price);
        setSelectedProduct(product);
    }

    return (
        <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="productHeader">
                <span className="info">{product.sellerUsername}</span>
            </div>
            <div className="productImg">
                <img onClick={() => handleClick(product)}
                     className="img-fluid"
                     src={product.image}
                     style={{height: 450, width: 455}}></img>
            </div>
            <div className="productInfo">
                <h4>{product.price}$</h4>
                <span className="info">{product.size}</span><br/>
                <span className="info">{product.condition}</span>
            </div>
        </div>
    )
}

export default Product;