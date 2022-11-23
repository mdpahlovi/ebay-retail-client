import React, { useContext, useEffect } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { AuthContext } from "../Contexts/UserContext";

function ThemeToggle() {
    const { theme, setTheme } = useContext(AuthContext);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, [theme]);

    return (
        <label className="swap swap-rotate text-3xl">
            <input onClick={() => setTimeout(() => setTheme(theme === "light" ? "dark" : "light"), 150)} type="checkbox" />
            <RiSunFill className="swap-on" />
            <RiMoonFill className="swap-off" />
        </label>
    );
}

export default ThemeToggle;
