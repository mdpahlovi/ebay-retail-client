import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { verifiyUserProducts } from "../Api/products";
import { deleteUser, getAllSeller, verifiyUser } from "../Api/user";
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
            .catch(({ message }) => toast.error(message));
    }, [refresh]);

    const handelDelete = (email) => {
        deleteUser(email)
            .then(({ message }) => {
                toast.success(`${message} Seller`);
                setRefresh(!refresh);
            })
            .catch(({ message }) => toast.error(message));
    };

    const handelVerifiy = (email) => {
        verifiyUser(email, { verification: true })
            .then((res) => {
                verifiyUserProducts(email, { verification: true })
                    .then(({ message }) => {
                        toast.success(message);
                        setRefresh(!refresh);
                    })
                    .catch(({ message }) => toast.error(message));
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
                        <th>Verification</th>
                        <th>Delete Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <TableLoader img={1} field={1} btn={3} />
                    ) : (
                        sellers.map(({ _id, avatar, name, role, email, verification }, index) => (
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
                                    <button
                                        onClick={() => handelVerifiy(email)}
                                        className={`btn btn-sm ${verification ? "btn-primary" : "hover:bg-base-content/90"}`}
                                    >
                                        {verification ? "Verified" : "Verifiy"}
                                    </button>
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
