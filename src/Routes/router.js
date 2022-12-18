import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home";
import CategoryProduct from "../Pages/Home/CategoryProduct";
import Blogs from "../Pages/Home/Blogs";
import Signin from "../Pages/Home/Signin";
import Signup from "../Pages/Home/Signup";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller";
import AddProduct from "../Pages/Dashboard/AddProduct";
import SellerRoute from "./SellerRoute";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ErrorPage from "../Pages/ErrorPage";

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
                        element: <DashboardHome />,
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
