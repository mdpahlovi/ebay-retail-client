import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../Contexts/UserContext";

const AuthDropDown = ({ className }) => {
    const { user, loading } = useContext(AuthContext);
    return (
        <div className={`${className} justify-end items-center`}>
            {loading ? (
                <button className="btn btn-sm">
                    <BeatLoader color="#ffffff" size={10} />
                </button>
            ) : user?.uid ? (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        {user?.photoURL ? (
                            <img className="w-8 mask mask-squircle" src={user.photoURL} alt="" />
                        ) : (
                            <button className="btn btn-sm">no photo</button>
                        )}
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <h3 className="btn btn-sm btn-ghost">{user?.displayName ? user.displayName : "No Name"}</h3>
                        <button className="btn btn-sm">signout</button>
                    </ul>
                </div>
            ) : (
                <Link to="signin" className="btn btn-sm">
                    signin
                </Link>
            )}
        </div>
    );
};

export default AuthDropDown;
