import React, { useEffect, useState } from "react";
import { getAllUser } from "../Api/user";

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser().then((data) => {
            setUsers(data);
        });
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
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="w-10 mask mask-squircle">
                                    <img src={user.avatar} alt="" />
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">{user.role ? user.role : "buyer"}</button>
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

export default AllUser;
