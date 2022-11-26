import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./Contexts/UserContext";
import Toastify from "./Utility/Toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <UserContext>
            <App />
            <Toastify />
        </UserContext>
    </QueryClientProvider>
);
