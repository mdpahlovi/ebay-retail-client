import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL } = user;
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <div className="w-80 bg-base-100 text-base-content flex flex-col items-center">
                    <div>
                        <img className="w-56 mask mask-squircle my-12" src={photoURL} alt="" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{displayName}</h3>
                    <div className="w-full flex flex-col [&>*]:rounded-none [&>*]:justify-start">
                        <Link className="btn btn-ghost">Item 1</Link>
                        <Link className="btn btn-ghost">I have border</Link>
                        <Link className="btn btn-ghost">Item 3</Link>
                        <Link to="/" className="btn">
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
