import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "./api";

export const setAuthAndToken = (user, role, name, img) => {
    const currentUser = { email: user.email, role: role };
    if (name || img) {
        currentUser.name = name;
        currentUser.avatar = img;
    } else {
        currentUser.name = user.displayName;
        currentUser.avatar = user.photoURL;
    }

    axios
        .put(`${apiUrl}/user/${user?.email}`, currentUser)
        .then(({ data }) => localStorage.setItem("ebay-token", data.token))
        .catch(({ message }) => toast.error(message));
};
