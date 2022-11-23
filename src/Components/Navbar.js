import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [theme, setTheme] = useState(null);

    // Active  Link
    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");
    const nevMenu = `bg-base-100 border-b border-base-300 lg:border-none w-full lg:w-auto fixed lg:static top-16 left-0 pb-5 lg:pb-0 transition-all duration-500 z-[1] ${
        open ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    } lg:opacity-100 lg:translate-y-0`;

    return (
        <nav className="sticky bg-base-100 top-0 z-10">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <Link className="z-[2]" to="/">
                    <img className="w-28 lg:w-32" alt="" />
                </Link>
                <div className="content-gap-x z-[2]">
                    <label className="lg:hidden swap swap-rotate text-3xl cursor-pointer z-[2]">
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
