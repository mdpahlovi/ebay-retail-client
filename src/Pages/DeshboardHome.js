import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../Api/user";
import { AuthContext } from "../Contexts/UserContext";

const DeshboardHome = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getRole(user?.email).then((data) => {
            setRole(data);
            setLoading(false);
        });
    }, [user]);

    return (
        <div className="h-screen flex flex-col justify-center items-center pb-16">
            <p className="text-6xl font-bold">Welcome To</p>
            <div className="flex justify-center items-center text-base-content/50 mt-4">
                {!loading && role ? (
                    <p className="text-3xl font-medium">{role[0].toUpperCase() + role.substring(1)} Dashboard</p>
                ) : (
                    <div className="animate-pulse w-60 h-8 bg-base-content/10 mt-2"></div>
                )}
            </div>
        </div>
    );
};

export default DeshboardHome;
