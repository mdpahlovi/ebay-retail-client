export const getRole = async (email) => {
    const response = await fetch(`http://localhost:5000/user/${email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const user = await response.json();
    return user?.role;
};

export const getAllBuyer = async () => {
    const response = await fetch(`http://localhost:5000/users/allbuyer`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const users = await response.json();
    return users;
};

export const getAllSeller = async () => {
    const response = await fetch(`http://localhost:5000/users/allseller`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const users = await response.json();
    return users;
};
