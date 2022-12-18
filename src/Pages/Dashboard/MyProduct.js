import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteProduct, getUserProducts, bookProduct } from "../../Api/products";
import TableLoader from "../../Components/TableLoader";
import { AuthContext } from "../../Contexts/UserContext";

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const { user, loading } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(null);

    useEffect(() => {
        getUserProducts(user?.email)
            .then((data) => {
                setProducts(data);
                setProductsLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [user, refresh]);

    // Delete Product By Id
    const handelDelete = (id, name) => {
        deleteProduct(id)
            .then(({ message }) => {
                toast.success(`${message} The ${name}`);
                setRefresh(!refresh);
            })
            .catch(({ message }) => toast.error(message));
    };

    const handelAdvertised = (id) => {
        bookProduct(id, { advertised: true })
            .then(({ message }) => {
                toast.success(`${message} For Ad`);
                setRefresh(!refresh);
            })
            .catch(({ message }) => toast.error(message));
    };

    const removeAdvertised = (id) => {
        bookProduct(id, { advertised: false })
            .then(({ message }) => {
                toast.success("Remove For Add");
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
                        <th>Name</th>
                        <th>Price</th>
                        <th>Sales Status</th>
                        <th>Advertised</th>
                        <th>Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                    {loading || productsLoading ? (
                        <TableLoader field={2} btn={3} />
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
                                    {advertised ? (
                                        <button onClick={() => removeAdvertised(_id)} className="btn btn-sm btn-primary">
                                            Running
                                        </button>
                                    ) : (
                                        <button onClick={() => handelAdvertised(_id)} className="btn btn-sm btn-primary">
                                            Make
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(_id, name)} className="btn btn-sm btn-error">
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

export default MyProduct;
