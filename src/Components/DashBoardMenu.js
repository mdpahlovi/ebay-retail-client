import React from "react";
import { NavLink } from "react-router-dom";

const DashBoardMenu = ({ role }) => {
    if (role === "admin") {
        return (
            <>
                <li>
                    <NavLink to="all-buyer">All Buyer</NavLink>
                </li>
                <li>
                    <NavLink to="all-seller">All Seller</NavLink>
                </li>
            </>
        );
    } else if (role === "seller") {
        return (
            <>
                <li>
                    <NavLink to="add-product">Add Product</NavLink>
                </li>
                <li>
                    <NavLink to="my-product">My Product</NavLink>
                </li>
            </>
        );
    }
};

export default DashBoardMenu;
