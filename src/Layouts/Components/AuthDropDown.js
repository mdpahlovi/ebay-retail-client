import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../Contexts/UserContext";

const AuthDropDown = ({ className }) => {
    const { theme, user, loading, signout } = useContext(AuthContext);

    return (
        <div className={`${className} justify-end items-center`}>
            {loading ? (
                <button className="btn btn-sm hover:bg-base-content/95">
                    <BeatLoader color={theme === "dark" ? "#000000" : "#ffffff"} size={10} />
                </button>
            ) : user?.uid ? (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        {user?.photoURL ? (
                            <img className="w-8 mask mask-squircle cursor-pointer" src={user.photoURL} alt="" />
                        ) : (
                            <button className="btn btn-sm hover:bg-base-content/95">no photo</button>
                        )}
                    </label>
                    <ul tabIndex={0} className="mt-4 lg:mt-6 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 space-y-2">
                        <h3 className="btn btn-sm btn-ghost">{user?.displayName ? user.displayName : "No Name"}</h3>
                        <Link to="/dashboard" className="btn btn-sm hover:bg-base-content/95">
                            deshboard
                        </Link>
                        <button onClick={signout} className="btn btn-sm hover:bg-base-content/95">
                            signout
                        </button>
                    </ul>
                </div>
            ) : (
                <Link to="signin" className="btn btn-sm hover:bg-base-content/95">
                    signin
                </Link>
            )}
        </div>
    );
};

export default AuthDropDown;
