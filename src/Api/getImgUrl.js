export const getImgUrl = async (image) => {
    if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=830547d2f0f205ab23f8516091510fb2`;
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        return data;
    }
};
