import React from "react";

const TableLoader = () => {
    return (
        <>
            <tr className="animate-pulse">
                <th>
                    <div className="w-5 h-5 bg-base-content/10"></div>
                </th>
                <td>
                    <div className="w-10 h-10 mask mask-squircle bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-24 h-5 bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-16 h-5 bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-16 h-5 bg-base-content/10"></div>
                </td>
            </tr>
            <tr className="animate-pulse">
                <th>
                    <div className="w-5 h-5 bg-base-content/10"></div>
                </th>
                <td>
                    <div className="w-10 h-10 mask mask-squircle bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-24 h-5 bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-16 h-5 bg-base-content/10"></div>
                </td>
                <td>
                    <div className="w-16 h-5 bg-base-content/10"></div>
                </td>
            </tr>
        </>
    );
};

export default TableLoader;
