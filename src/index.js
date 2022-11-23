import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./Contexts/UserContext";
import Toastify from "./Utility/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContext>
        <App />
        <Toastify />
    </UserContext>
);
