import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";
import DeshboardHome from "../Pages/DeshboardHome";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllBuyer from "../Pages/AllBuyer";
import AllSeller from "../Pages/AllSeller";
import AddProduct from "../Pages/AddProduct";
import SellerRoute from "./SellerRoute";
import MyProduct from "../Pages/MyProduct";
import CategoryProduct from "../Pages/CategoryProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:category",
                element: (
                    <PrivateRoute>
                        <CategoryProduct />
                    </PrivateRoute>
                ),
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/blogs",
                loader: () => fetch("http://localhost:5000/blogs"),
                element: <Blogs />,
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "/dashboard",
                        element: <DeshboardHome />,
                    },
                    {
                        path: "all-buyer",
                        element: (
                            <AdminRoute>
                                <AllBuyer />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "all-seller",
                        element: (
                            <AdminRoute>
                                <AllSeller />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "add-product",
                        element: (
                            <SellerRoute>
                                <AddProduct />
                            </SellerRoute>
                        ),
                    },
                    {
                        path: "my-product",
                        element: (
                            <SellerRoute>
                                <MyProduct />
                            </SellerRoute>
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;
