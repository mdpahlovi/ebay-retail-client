import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { getRole } from "../Api/user";
import { AuthContext } from "../Contexts/UserContext";

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [roleLoading, setRoleLoading] = useState(true);

    useEffect(() => {
        setRoleLoading(true);
        getRole(user?.email).then((data) => {
            setRole(data);
            setRoleLoading(false);
        });
    }, [user]);

    if (loading || roleLoading) {
        return (
            <div className="w-full h-[350px] flex justify-center items-center">
                <HashLoader color="#F48E00" size={100} />
            </div>
        );
    }

    if (user && user.uid && role === "seller") {
        return children;
    }
    return <Navigate to="/dashboard" />;
};

export default SellerRoute;
