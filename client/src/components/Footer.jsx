import React from "react";
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4 pl-20 pr-20">
            <div className="md:flex-1 flex-initial justify-right items-center ml-60">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <div className="text-white mr-60">
                <p>Boris Dovečer</p>
            </div>
        </nav>
    );
}

export default Footer;
