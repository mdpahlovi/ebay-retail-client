import axios from "axios";

export const getImgUrl = async (image) => {
    if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;
        const response = await axios.post(url, formData);
        return response.data;
    }
};
