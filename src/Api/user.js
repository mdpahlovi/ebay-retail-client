// Get User Roll By Email
export const getRole = async (email) => {
    const response = await fetch(`https://ebay-server.vercel.app/user/${email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const user = await response.json();
    return user?.role;
};

// Get User By Email
export const getCorrentUser = async (email) => {
    const response = await fetch(`https://ebay-server.vercel.app/user/${email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const user = await response.json();
    return user;
};

// Get All Buyer
export const getAllBuyer = async () => {
    const response = await fetch(`https://ebay-server.vercel.app/users/allbuyer`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const users = await response.json();
    return users;
};

// Get All Seller
export const getAllSeller = async () => {
    const response = await fetch(`https://ebay-server.vercel.app/users/allseller`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const users = await response.json();
    return users;
};

// Delete User By Email
export const deleteUser = async (email) => {
    const response = await fetch(`https://ebay-server.vercel.app/user/${email}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const message = await response.json();
    return message;
};

export const verifiyUser = async (email, product) => {
    const response = await fetch(`https://ebay-server.vercel.app/user/${email}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
        body: JSON.stringify(product),
    });
    const message = await response.json();
    return message;
};
