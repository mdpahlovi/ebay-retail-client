import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [theme, setTheme] = useState(null);

    // Active  Link
    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");
    const nevMenu = `bg-base-100 lg:bg-transparent w-full lg:w-auto fixed lg:static top-16 left-0 pb-5 lg:pb-0 transition-all duration-500 ${
        open ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
    } lg:opacity-100 lg:translate-x-0`;

    return (
        <nav className="sticky bg-base-100 top-0">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <Link to="/">
                    <h1>Pahlovi</h1>
                </Link>
                <div className="flex items-center">
                    <label className="lg:hidden swap swap-rotate text-3xl cursor-pointer">
                        <input onClick={() => setOpen(!open)} type="checkbox" />
                        <CgMenuRight className="swap-off" />
                        <CgClose className="swap-on" />
                    </label>
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
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
