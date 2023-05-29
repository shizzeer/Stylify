import React, {useEffect, useState} from 'react';
import Navbar from "../components/navbar";
import {useParams} from "react-router";
import '../styles/productDetails.css';
import api from '../api/api';

function ProductDetailsPage() {
    const { id } = useParams(); // pobranie id z adresu URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        api.get('/products/' + id)
            .then((response) => {
                setProduct(response.data.product); // ta metoda dziala asynchronicznie
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please, log in again");
                        window.location.href = "/login";
                    }
                    if (error.response.status === 204) {
                        alert(error.response.data.error);
                        window.location.href = "/all";
                    }
                } else {
                    console.log(error.message);
                }
            });
    }, []);

    return (
        <React.Fragment>
            <Navbar/>
            <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
                <div className="pad align-content-center container">
                    <div className="customCard pad row justify-content-center">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-4 productImg">
                                <img src="../img/sweater.png" style={{height: '100%', width: '100%'}}/>
                            </div>
                            <div className="col-sm-12 col-md-6 productInfo">
                                <h1><b>product.name</b></h1>
                                <div className="verticalSpacer"></div>
                                <span className="info"><b>Category:</b> product.category</span><br />
                                <span className="info"><b>Condition:</b> product.condition</span><br/>
                                <span className="info"><b>Size:</b> product.size</span><br/>
                                <span className="info"><b>Seller:</b> product.sellerUsername</span><br/><br />
                                <h2><b>Price: product.price</b></h2>
                                <div className="verticalSpacer"></div>
                                <div className="row justify-content-evenly">
                                    <button type="button" className="productInfoBtn btn btn-success">Add to cart</button>
                                    <button type="button" className="productInfoBtn btn btn-success">Buy now!</button>
                                </div>
                            </div>
                        </div>
                        <div className="desc col-md-10">
                            <h2>Description</h2>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce bibendum eleifend finibus. Curabitur vestibulum risus
                                id cursus laoreet. Phasellus bibendum luctus sodales. Morbi eu
                                dui nec arcu venenatis cursus. Quisque lacinia commodo pulvinar.
                                Nunc euismod in risus vel auctor. Vestibulum lacinia purus vel
                                efficitur congue. Nam vitae hendrerit metus. Aenean sollicitudin
                                ultrices ex venenatis bibendum.

                                Nunc fermentum lacinia magna, id ultricies mauris sagittis eu.
                                Integer aliquet dapibus sapien, non volutpat leo facilisis sed.
                                Vestibulum imperdiet eleifend interdum. Cras iaculis, urna ut
                                sodales cursus, arcu magna accumsan ante, eu dapibus orci ligula
                                eget nibh. Nullam maximus purus vel purus sodales, vitae luctus
                                diam fringilla. Aenean dictum tincidunt urna nec euismod. Aenean
                                scelerisque interdum mattis. Duis semper magna non turpis dapibus
                                dapibus. Proin nec diam non sapien sagittis aliquam eget id lorem.
                                Pellentesque non dolor dictum, euismod ipsum in, fermentum ex.
                                Morbi id condimentum lectus. Maecenas et imperdiet purus, sit amet
                                feugiat mauris. Curabitur pharetra nulla augue, in sodales felis
                                sodales in. Praesent sodales orci a ante interdum vehicula.
                                Vestibulum a aliquam nisi, id dictum felis.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce bibendum eleifend finibus. Curabitur vestibulum risus id
                                cursus laoreet. Phasellus bibendum luctus sodales. Morbi eu dui
                                nec arcu venenatis cursus. Quisque lacinia commodo pulvinar.
                                Nunc euismod in risus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetailsPage;