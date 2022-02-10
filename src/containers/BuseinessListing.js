import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBusinesses } from '../redux/actions/businessActions';
import axios from "axios";

import BusinessComponent from "./BusinessComponent";

const BusinessListing = () => {
    const dispatch   = useDispatch();

    const fetchBusinesses = async () => {
        const response = await axios
            .get("https://smoothcommerce.tech/api.json")
            .catch((err) => {
                console.log("Err", err)
            })
        dispatch(setBusinesses(response.data));
    };

    // fetch our businesses from API
    useEffect(() => {
        fetchBusinesses();
    });

    return (
        <div className="container">
            <BusinessComponent />
        </div>
    );
};

export default BusinessListing;