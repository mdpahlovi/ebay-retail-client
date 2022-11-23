import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { SiSlideshare } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import AuthDropDown from "./AuthDropDown";
import { AuthContext } from "../Contexts/UserContext";
import LightLogo from "../Assets/logo/light-logo.png";
import DarkLogo from "../Assets/logo/dark-logo.png";

const Navbar = () => {
    const { theme } = useContext(AuthContext);
    const [open, setOpen] = useState(true);

    const location = useLocation();
    const { pathname } = location;

    // Active  Link
    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");
    const nevMenu = `bg-base-100 lg:bg-transparent w-full lg:w-auto fixed lg:static top-16 left-0 pb-5 lg:pb-0 transition-all duration-500 ${
        open ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
    } lg:opacity-100 lg:translate-x-0`;

    return (
        <nav className="sticky bg-base-100 top-0 z-20 shadow-md">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <Link to="/">
                    <img className="w-40 lg:w-48" src={theme === "dark" ? DarkLogo : LightLogo} alt="" />
                </Link>
                <div className="flex lg:hidden items-center space-x-5">
                    {pathname === "/dashboard" ? (
                        <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden cursor-pointer">
                            <SiSlideshare className="text-2xl" />
                        </label>
                    ) : (
                        <label className="swap swap-rotate text-3xl cursor-pointer">
                            <input onClick={() => setOpen(!open)} type="checkbox" />
                            <CgMenuRight className="swap-off" />
                            <CgClose className="swap-on" />
                        </label>
                    )}
                    <AuthDropDown className="flex" />
                </div>
                <div className={nevMenu}>
                    <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-3">
                        <NavLink to="/" className={navLink} end>
                            Home
                        </NavLink>
                        <NavLink to="/signin" className={navLink}>
                            signin
                        </NavLink>
                        <NavLink to="/signup" className={navLink}>
                            signup
                        </NavLink>
                        <NavLink to="/blogs" className={navLink}>
                            Blogs
                        </NavLink>
                        <AuthDropDown className="hidden lg:flex" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
