import React from "react";

const TableLoader = ({ img, field, btn }) => {
    return (
        <>
            {[...Array(3)].map((a) => (
                <tr className="animate-pulse">
                    <th>
                        <div className="w-5 h-5 bg-base-content/10"></div>
                    </th>
                    {img ? (
                        <td>
                            <div className="w-10 h-10 mask mask-squircle bg-base-content/10"></div>
                        </td>
                    ) : (
                        ""
                    )}
                    {field
                        ? [...Array(field)].map((a) => (
                              <td>
                                  <div className="w-24 h-4 bg-base-content/10"></div>
                              </td>
                          ))
                        : ""}
                    {btn
                        ? [...Array(btn)].map((a) => (
                              <td>
                                  <div className="w-24 h-6 bg-base-content/10"></div>
                              </td>
                          ))
                        : ""}
                </tr>
            ))}
        </>
    );
};

export default TableLoader;
