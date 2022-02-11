import React from "react";
import {useLocation} from "react-router-dom";
import BusinessListing from "./BuseinessListing";
import { DetailHeader } from "../styled-componants/app.style";

const BusinessDetails = () => {
    const business = useLocation();
    if(!business.state)
    {
        return <BusinessListing />;
    }
    const {company_name, website, address, image, hours} = business.state;
    const hoursHtml = hours.map((obj, id) => {
        return (<div key={id}>{obj.day} {obj.open} - {obj.close}</div>)
    });
    
    return (
        <div className="m-5">
            { Object.keys(business).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                <div className="row">
                        <div className="col-4">
                        <img src={image} alt={company_name}/>
                    </div>
                    <div className="col-8">
                        <div className="my-3">
                            <DetailHeader>Business Name:</DetailHeader>
                            <div className="col-5">
                                {company_name}
                            </div>
                        </div>
                        <div className="mb-3">
                            <DetailHeader>Address:</DetailHeader>
                            <div className="col-5">
                                {address}
                            </div>
                        </div>
                        <div className="mb-3">
                            <DetailHeader>Website:</DetailHeader>
                            <div className="col-5">
                                {website ? website : 'N/A'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <DetailHeader>Hours:</DetailHeader>
                            <div className="col-5">
                                { hoursHtml }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusinessDetails;