import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteUser, getAllSeller } from "../Api/user";
import TableLoader from "../Components/TableLoader";

const AllSeller = () => {
    const [sellers, setSellers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllSeller()
            .then((res) => {
                setSellers(res);
                setLoading(false);
            })
            .catch((err) => toast.error(err.message));
    }, [refresh]);

    const handelDelete = (email) => {
        deleteUser(email)
            .then((res) => {
                toast.success(`${res.message} Seller`);
                setRefresh(!refresh);
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Delete Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <TableLoader />
                    ) : (
                        sellers.map(({ _id, avatar, name, role, email }, index) => (
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
                                    <button onClick={() => handelDelete(email)} className="btn btn-sm btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;
