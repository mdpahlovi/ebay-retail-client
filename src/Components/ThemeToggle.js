import React, { useEffect } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

function ThemeToggle({ theme, setTheme }) {
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
