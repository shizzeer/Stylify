import '../styles/product.css';
import '../styles/index.css';

function Product( {seller, productImg, price, size, company} ) {
    return (
        <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="productHeader">
                <span className="info">{seller}</span>
            </div>
            <div className="productImg">
                <img className="img-fluid" src={productImg}></img>
            </div>
            <div className="productInfo">
                <h4>{price}$</h4>
                <span className="info">{size}</span><br/>
                <span className="info">{company}</span>
            </div>
        </div>
    )
}

export default Product;