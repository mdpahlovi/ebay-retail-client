/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                header: "url('/src/Assets/header.jpg')",
                hero: "url('/src/images/hero.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
    // DaisyUI Customized
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-100": "#ffffff",
                    "base-content": "#0c2538",
                    neutral: "#0c2538",
                    "neutral-content": "#ffffff",
                    primary: "#1fb698",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#0c2538",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#0c2538",
                    primary: "#1fb698",
                },
            },
            "light",
            "dark",
        ],
    },
};
