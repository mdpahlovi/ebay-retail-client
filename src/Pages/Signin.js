import React from "react";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signin = () => {
    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    // Social Signin

    return (
        <>
            <Header title={"SignIn your account"} route={"Signin"}></Header>
            <section className="form-container section-gap space-y-5">
                <form onSubmit={handelSubmit} className="space-y-5">
                    <Input type={"email"} name={"email"} text={"Email"} />
                    <Input type={"password"} name={"password"} text={"Password"} />
                    <div className="flex flex-wrap justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="mr-2">Remember me</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                        <a className="link" href="/">
                            Forgot password?
                        </a>
                    </div>
                    <input type={"submit"} value="Sign In" className="w-full btn btn-primary" />
                </form>
                <div className="line-x">
                    <p className="mx-2">Or Sign in with</p>
                </div>
                <div className="grid grid-col-1 xs:grid-cols-[auto_auto_auto] gap-5">
                    <button className="btn btn-outline btn-primary gap-1.5">
                        <ImGoogle />
                        Google
                    </button>
                    <button className="btn btn-outline btn-primary gap-1.5">
                        <BsFacebook />
                        Facebook
                    </button>
                    <button className="btn btn-outline btn-primary gap-1.5">
                        <ImGithub />
                        Github
                    </button>
                </div>
                <p className="text-center">
                    Don't have an account?
                    <Link to="/signup" className="ml-1.5 font-bold uppercase underline">
                        Sign Up Now
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Signin;
