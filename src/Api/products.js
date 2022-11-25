// Add a Product
export const addProduct = async (product) => {
    const response = await fetch(`http://localhost:5000/products`, {
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
