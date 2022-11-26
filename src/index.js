import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./Contexts/UserContext";
import Toastify from "./Utility/Toastify";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={new QueryClient()}>
        <UserContext>
            <App />
            <Toastify />
        </UserContext>
    </QueryClientProvider>
);
