import { jwtAxios } from "./api";

// Add a Product
export const addProduct = async (product) => {
    const response = await jwtAxios.post("/products", product);
    return response.data;
};

// Get Product By Email
export const getUserProducts = async (email) => {
    const response = await jwtAxios.get(`/products/${email}`);
    return response.data;
};

// Delete User Product By Id
export const deleteProduct = async (id) => {
    const response = await jwtAxios.delete(`/product/${id}`);
    return response.data;
};

// Book & Update Product
export const bookProduct = async (id, product) => {
    const response = await jwtAxios.patch(`/product/${id}`, product);
    return response.data;
};

export const verifyUserProducts = async (email, product) => {
    const response = await jwtAxios.patch(`/products/${email}`, product);
    return response.data;
};
