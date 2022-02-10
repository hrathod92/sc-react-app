import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BusinessComponent = () => {
    const businesses = useSelector((state) => state.allBusinesses.businesses);
    const navigate   = useNavigate();
    const renderList = businesses.map((business) => {
        const {id, company_name, website, address} = business;
        const toDetailPage = () =>{
            navigate(`/business/${id}`,{state:business});
        }
        return(
            <tr key={id}>
                <th scope="row">{id}</th>
                <td><a onClick={()=>{toDetailPage()}} style={{textDecoration: "underline", cursor: "pointer"}}>{company_name}</a></td>
                <td>{website ? website : 'N/A'}</td>
                <td>{address ? address : 'N/A'}</td>
            </tr>
        );
    });

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Business ID</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Website</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {renderList}
            </tbody>
        </table>
    );
};

export default BusinessComponent;