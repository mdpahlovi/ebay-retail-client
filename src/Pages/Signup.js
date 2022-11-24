import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthAndToken } from "../Api/auth";

const Signup = () => {
    const { setLoading, createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const loaction = useLocation();
    const from = loaction.state || "/";

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = `${form.fastName.value} ${form.lastName.value}`;
        const img = form.img.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPass.value;
        const isSeller = form.isSeller;

        // Check Password
        if (password !== confirmPassword) {
            toast.error("Your password didn't match");
            return;
        }

        // Update Img & Then Create User
        const formData = new FormData();
        formData.append("image", img);
        fetch(`https://api.imgbb.com/1/upload?key=830547d2f0f205ab23f8516091510fb2`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                createUser(email, password)
                    .then((result) => {
                        isSeller.checked ? setAuthAndToken(result.user, "seller") : setAuthAndToken(result.user);
                        updateUserProfile(name, imageData.data.display_url)
                            .then(() => {
                                toast.success("Created New User");
                                navigate(from, { replace: true });
                                setLoading(false);
                            })
                            .catch((error) => {
                                toast.error(error.message);
                                setLoading(false);
                            });
                    })
                    .catch((error) => {
                        toast.error(error.message);
                        setLoading(false);
                    });
            })
            .catch((error) => toast.error(error));
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

    return (
        <>
            <Header title={"Create an account"} route={"Signup"}></Header>
            <section className="form-container section-gap space-y-5">
                <form onSubmit={handelSubmit} className="space-y-5">
                    <div className="grid xs:grid-cols-2 gap-5">
                        <Input type={"text"} name={"fastName"} text={"Fast Name"} />
                        <Input type={"text"} name={"lastName"} text={"Last Name"} />
                    </div>
                    <input onChange={isImage} type="file" name="img" accept="image/*" className="file-input border-base-content w-full" />
                    <Input type={"email"} name={"email"} text={"Email"} />
                    <Input type={"password"} name={"password"} text={"Password"} />
                    <Input type={"password"} name={"confirmPass"} text={"Confirm Password"} />
                    <div className="flex flex-wrap justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="mr-2">Create Seller Account</span>
                            <input type="checkbox" name="isSeller" className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <input type={"submit"} value="Sign Up" className="w-full btn btn-primary" />
                </form>
                <p className="text-center">
                    Already have an account?
                    <Link to="/signin" className="ml-1.5 font-bold uppercase underline">
                        Sign In Now
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Signup;
