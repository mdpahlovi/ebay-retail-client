import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../Assets/error-img.svg";

const ErrorPage = () => {
    return (
        <div className="max-w-lg mx-auto h-screen flex flex-col justify-center items-center">
            <img className="px-3 sm:px-6" src={ErrorImg} alt="" />
            <div className="flex flex-col gap-3 px-6">
                <h1 className="text-3xl sm:text-4xl font-bold">OPPS ! Page Not Found</h1>
                <p>
                    Sorry, the page you are looking for doesn't exist.
                    <br className="hidden sm:block" /> If you thing something in broken, report a problem
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <Link to="/">
                        <button className="btn btn-primary">Return Home</button>
                    </Link>
                    <Link>
                        <button className="btn btn-outline btn-primary">Report Problem</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
