import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Contexts/UserContext";

const Toastify = () => {
    const { theme } = useContext(AuthContext);
    return <ToastContainer position="top-right" autoClose={1500} theme={theme} />;
};

export default Toastify;
