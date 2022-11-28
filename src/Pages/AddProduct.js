import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getImgUrl } from "../Api/getImgUrl";
import { addProduct } from "../Api/products";
import { getCorrentUser } from "../Api/user";
import Input from "../Components/Input";
import { AuthContext } from "../Contexts/UserContext";

const AddProduct = () => {
    const { user, loading } = useContext(AuthContext);
    const [userLoading, setUserLoading] = useState(true);
    const [correntUser, setCorrentUser] = useState({});
    const [submitLoading, setSubmitLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getCorrentUser(user?.email)
            .then((res) => {
                setCorrentUser(res);
                setUserLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [user]);

    const handelSubmit = (event) => {
        setSubmitLoading(true);
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const name = form.name.value;
        const img = form.img.files[0];
        const location = form.location.value;
        const phone = form.phone.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const purchase_date = new Date(form.purchase_date.value);
        const condition = form.condition.value;
        const description = form.description.value;
        const date = new Date();

        if (!loading && !userLoading) {
            const { email, avatar, verification } = correntUser;
            const user_name = correntUser.name;

            const product = {
                category,
                name,
                location,
                resale_price,
                original_price,
                purchase_date,
                condition,
                description,
                date,
                verification,
                seller_email: email,
                seller_avatar: avatar,
                seller_name: user_name,
                seller_phone: phone,
            };

            getImgUrl(img)
                .then(({ data }) => {
                    product.image = data.display_url;
                    addProduct(product)
                        .then(({ message }) => {
                            setSubmitLoading(false);
                            toast.success(message);
                            navigate("/dashboard/my-product");
                            form.reset();
                        })
                        .catch(({ message }) => toast.error(message));
                })
                .catch(({ message }) => toast.error(message));
        }
    };

    // Check & Set image input fild style
    const isImage = (event) => {
        const input = event.target;
        if (input.files.length !== 0) {
            input.classList.add("file-input-primary");
            input.classList.remove("border-base-content");
        } else {
            input.classList.remove("file-input-primary");
        }
    };

    const dateChange = (event) => {
        const date_input = event.target;
        const label = event.target.nextSibling;
        if (date_input.value) {
            date_input.classList.add("opacity-100");
            label.classList.add("hidden");
        } else {
            date_input.classList.remove("opacity-100");
            label.classList.remove("hidden");
        }
    };

    return (
        <form onSubmit={handelSubmit} className="max-w-screen-xs sm:max-w-screen-sm mx-auto px-6 section-gap space-y-5">
            <div className="grid sm:grid-cols-[4fr_8fr] gap-5">
                <Input type={"text"} name={"category"} text={"Category"} />
                <Input type={"text"} name={"name"} text={"Product Name"} />
            </div>
            <input onChange={isImage} type="file" name="img" accept="image/*" className="file-input border-base-content w-full" />
            <div className="grid sm:grid-cols-[8fr_4fr] gap-5">
                <Input type={"text"} name={"location"} text={"Locaton"} />
                <Input type={"number"} name={"phone"} text={"Phone"} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
                <Input type={"number"} name={"resale_price"} text={"Resale Price"} />
                <Input type={"number"} name={"original_price"} text={"Original Price"} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                    <input onChange={dateChange} type="date" name="purchase_date" className="opacity-0 absolute z-10 input w-full border-primary" />
                    <Input type={"text"} text={"Purchase Date"} />
                </div>
                <Input type={"text"} name={"condition"} text={"Condition"} />
            </div>
            <Input type={"text"} name={"description"} text={"Description"} />
            <input type={"submit"} value={submitLoading ? "Loading..." : "Submit"} className="w-full btn btn-primary" />
        </form>
    );
};

export default AddProduct;
