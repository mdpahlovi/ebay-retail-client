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
import AllUser from "../Pages/AllUser";

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
                        path: "alluser",
                        element: (
                            <AdminRoute>
                                <AllUser />
                            </AdminRoute>
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
