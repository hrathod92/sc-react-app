import React from "react"
import { APP_ROUTES } from  '../constant.js';
import { Logo } from "../styled-componants/app.style";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <Logo href={APP_ROUTES.BUSINESS_LIST}>Smooth Commerce</Logo>
            </div>
        </nav>
    );
};

export default Header;