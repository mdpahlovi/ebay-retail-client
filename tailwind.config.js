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
                header: "url('/src/Assets/header.png')",
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
                    "base-content": "#151719",
                    neutral: "#151719",
                    "neutral-content": "#ffffff",
                    primary: "#F48E00",
                    error: "#FF3333",
                    "error-content": "#FFFFFF",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#151719",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#151719",
                    primary: "#F48E00",
                    error: "#FF3333",
                    "error-content": "#FFFFFF",
                },
            },
            "light",
            "dark",
        ],
    },
};
