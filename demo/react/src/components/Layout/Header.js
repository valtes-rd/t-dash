import * as React from "react";
import { Link } from "react-router-dom";
import Header_image from "../../Public/img/LOGO.png";

function Header() {
    return (
        <div className="bg-white">
            <Link to="/"><img src={Header_image} alt="" height="70" /></Link>
        </div>
    );
}

export default Header;
