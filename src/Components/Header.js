import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, route, children }) => {
    return (
        <div className="hero py-12 sm:py-14 lg:py-16 bg-header">
            <div className="hero-overlay bg-black/10"></div>
            <div className="my-container text-neutral-content space-y-5">
                <h3 className="text-5xl sm:text-6xl font-bold text-white text-uppercase">{title}</h3>
                <div className="text-white breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{route}</li>
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
