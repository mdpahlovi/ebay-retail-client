import { jwtAxios } from "./api";

// Get User By Email
export const getCurrentUser = async (email) => {
    const response = await jwtAxios.get(`/user/${email}`);
    return response.data;
};

// Get All Buyer
export const getAllBuyer = async () => {
    const response = await jwtAxios.get(`/users/allbuyer`);
    return response.data;
};

// Get All Seller
export const getAllSeller = async () => {
    const response = await jwtAxios.get(`/users/allseller`);
    return response.data;
};

// Delete User By Email
export const deleteUser = async (email) => {
    const response = await jwtAxios.delete(`/user/${email}`);
    return response.data;
};

export const verifyUser = async (email, product) => {
    const response = await jwtAxios.patch(`/user/${email}`, product);
    return response.data;
};
