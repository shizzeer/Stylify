import '../styles/product.css';
import '../styles/index.css';

function Product() {
    return (
        <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="productHeader">
                <span className="info">Username</span>
            </div>
            <div className="productImg">
                <img className="img-fluid" src="./img/sweater.png"></img>
            </div>
            <div className="productInfo">
                <h4>35,00$</h4>
                <span className="info">M</span><br/>
                <span className="info">Company</span>
            </div>
        </div>
    )
}

export default Product;