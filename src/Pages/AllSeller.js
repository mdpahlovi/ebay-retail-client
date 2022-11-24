import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllSeller } from "../Api/user";

const AllSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        getAllSeller()
            .then((res) => setSellers(res))
            .catch((err) => toast.error(err.message));
    }, []);
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Report User</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map(({ _id, avatar, name, role }, index) => (
                        <tr key={_id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="w-10 mask mask-squircle">
                                    <img src={avatar} alt="" />
                                </div>
                            </td>
                            <td>{name}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">{role}</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-error">report</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;
