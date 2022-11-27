// Add a Product
export const addProduct = async (product) => {
    const response = await fetch(`https://ebay-server.vercel.app/products`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
};

// Get Product By Email
export const getUserProducts = async (email) => {
    const response = await fetch(`https://ebay-server.vercel.app/products/${email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const products = await response.json();
    return products;
};

// Delete User Product By Id
export const deleteProduct = async (id) => {
    const response = await fetch(`https://ebay-server.vercel.app/product/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
        },
    });
    const message = await response.json();
    return message;
};

// Book & Update Product
export const bookProduct = async (id, product) => {
    const response = await fetch(`https://ebay-server.vercel.app/product/${id}`, {
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

export const verifiyUserProducts = async (email, product) => {
    const response = await fetch(`https://ebay-server.vercel.app/products/${email}`, {
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
