import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserProducts } from "../Api/products";
import TableLoader from "../Components/TableLoader";
import { AuthContext } from "../Contexts/UserContext";

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        getUserProducts(user?.email)
            .then((data) => {
                setProducts(data);
                setProductsLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [user]);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Sales Status</th>
                        <th>Advertised</th>
                    </tr>
                </thead>
                <tbody>
                    {loading || productsLoading ? (
                        <TableLoader />
                    ) : (
                        products.map(({ _id, name, resale_price, status, advertised }, index) => (
                            <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{resale_price}</td>
                                <td>
                                    <span className="badge badge-primary badge-lg">{status ? status : "UnSoled"}</span>
                                </td>
                                <td>
                                    <btn className="btn btn-sm btn-primary">{advertised ? "Runnig" : "Make"}</btn>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;
