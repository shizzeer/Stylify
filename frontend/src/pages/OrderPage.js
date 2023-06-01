import ProductFeatureInput from "../components/productFeatureInput";
import ProductFeatureDescription from "../components/productFeatureDescription";
import ProductFeatureSelect from "../components/productFeatureSelect";
import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import ResultsInfo from "../components/resultsInfo";
import api from "../api/api";
import {useNavigate} from "react-router-dom";
import handleSessionAuth from "../api/auth";

function OrderPage() {
    const navigate = useNavigate();
    useEffect(() => {
        handleSessionAuth(navigate);
    }, []);

    const [customerFirstName, setFirstName] = useState('');
    const [customerLastName, setLastName] = useState('');
    const [customerStreet, setStreet] = useState('');
    const [customerZipCode, setZipCode] = useState('');
    const [customerCity, setCity] = useState('');
    const [customerPhoneNumber, setPhoneNumber] = useState('');
    const [customerCountry, setCountry] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        api.post('/order/place', {
            customer: {
                firstName: customerFirstName,
                lastName: customerLastName,
                country: customerCountry,
                city: customerCity,
                zipCode: customerZipCode,
                phoneNumber: customerPhoneNumber,
                street: customerStreet
            }
        })
            .then((response) => {
                alert(response.data.message);
                window.location.href = '/products/all';
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please, log in again");
                        window.location.href = "/login";
                    }
                    if (error.response.status === 400) {
                        alert(error.response.data.error);
                        window.location.reload();
                    }
                } else {
                    console.log(error.message);
                }
            });
    }

    return (
        <React.Fragment>
            <Navbar />
            <ResultsInfo category={'Order'}/>
            <div className="mainSectionContainer" style={{background: "#F2F2F2"}}>
                <div className="pad align-content-center container">
                    <ProductFeatureInput featureName={"First name"} type={"text"} placeholderValue={"First name"}
                                         handler={handleFirstNameChange}/>
                    <ProductFeatureInput featureName={"Last name"} type={"text"} placeholderValue={"Last name"}
                                         handler={handleLastNameChange}/>
                    <ProductFeatureInput featureName={"Street"} type={"text"} placeholderValue={"Street"}
                                         handler={handleStreetChange}/>
                    <ProductFeatureInput featureName={"Zip code"} type={"text"} placeholderValue={"Zip code"}
                                         handler={handleZipCodeChange}/>
                    <ProductFeatureInput featureName={"City"} type={"text"} placeholderValue={"City"}
                                         handler={handleCityChange}/>
                    <ProductFeatureInput featureName={"Country"} type={"text"} placeholderValue={"Country"}
                                         handler={handleCountryChange}/>
                    <ProductFeatureInput featureName={"Phone number"} type={"text"} placeholderValue={"111222333"}
                                         handler={handlePhoneNumberChange}/>
                    <div className="verticalSpacer"></div>
                    <div className="end"><button type="button" className="sellBtn verticalSpacer spacer btn btn-success"
                                        onClick={handleSubmit}>Order</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderPage;