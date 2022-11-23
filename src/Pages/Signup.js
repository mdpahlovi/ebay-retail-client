import React from "react";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Signup = () => {
    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = `${form.fastName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        console.log(name, email, password, confirmPass);
    };

    // Social Signin

    return (
        <>
            <Header title={"Create an account"} route={"Signup"}></Header>
            <section className="form-container section-gap space-y-5">
                <form onSubmit={handelSubmit} className="space-y-5">
                    <div className="grid xs:grid-cols-2 gap-5">
                        <Input type={"text"} name={"fastName"} text={"Fast Name"} />
                        <Input type={"text"} name={"lastName"} text={"Last Name"} />
                    </div>
                    <Input type={"email"} name={"email"} text={"Email"} />
                    <Input type={"password"} name={"password"} text={"Password"} />
                    <Input type={"password"} name={"confirmPass"} text={"Confirm Password"} />
                    <div className="flex flex-wrap justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="mr-2">Term and Condition</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
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
