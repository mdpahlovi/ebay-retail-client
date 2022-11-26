import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteUser, getAllBuyer } from "../Api/user";
import TableLoader from "../Components/TableLoader";

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllBuyer()
            .then((res) => {
                setBuyers(res);
                setLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [refresh]);

    const handelDelete = (email) => {
        deleteUser(email)
            .then(({ message }) => {
                toast.success(`${message} Buyer`);
                setRefresh(!refresh);
            })
            .catch(({ message }) => toast.error(message));
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
                        <th>Delete Buyer</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <TableLoader img={1} field={1} btn={2} />
                    ) : (
                        buyers.map(({ _id, avatar, name, role, email }, index) => (
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

export default AllBuyer;
