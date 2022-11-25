import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import { getRole } from "../Api/user";
import DashboardMenu from "../Components/DashBoardMenu";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const { displayName, photoURL } = user;

    useEffect(() => {
        getRole(user?.email).then((data) => {
            setRole(data);
            setLoading(false);
        });
    }, [user]);

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
                        {loading ? (
                            <div className="animate-pulse w-56 h-56 mask mask-squircle mt-10 mb-8 bg-base-content/10"></div>
                        ) : (
                            <img className="w-56 mask mask-squircle mt-10 mb-8" src={photoURL} alt="" />
                        )}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{displayName}</h3>
                    {!loading && role ? (
                        <p className="mb-6">{role[0].toUpperCase() + role.substring(1)}</p>
                    ) : (
                        <div className="animate-pulse w-10 h-4 mb-6 bg-base-content/10"></div>
                    )}
                    <ul className="menu w-full">
                        <li>
                            <NavLink to="/dashboard" end>
                                Dashboard
                            </NavLink>
                        </li>
                        {!loading && role ? <DashboardMenu role={role} /> : ""}
                        <li>
                            <NavLink to="/">Back To Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
