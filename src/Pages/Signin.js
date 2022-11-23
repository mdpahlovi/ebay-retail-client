import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
    const { signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                toast.success("User Signin Completed");
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === "Firebase: Error (auth/wrong-password).") {
                    toast.error("OPPS ! Your password didn't match");
                    form.reset();
                } else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
                    toast.error("OPPS ! User doesn't found");
                    form.reset();
                }
            });
    };

    // Social Signin
    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                toast.success("Google Signin Done");
            })
            .catch((error) => console.error(error));
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then((result) => {
                toast.success("Facebook Signin Done");
            })
            .catch((error) => console.error(error));
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                toast.success("Github Signin Done");
            })
            .catch((error) => console.error(error));
    };

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
                    <button onClick={handelGoogleSignIn} className="btn btn-outline btn-primary gap-1.5">
                        <ImGoogle />
                        Google
                    </button>
                    <button onClick={handelFacebookSignIn} className="btn btn-outline btn-primary gap-1.5">
                        <BsFacebook />
                        Facebook
                    </button>
                    <button onClick={handelGithubSignIn} className="btn btn-outline btn-primary gap-1.5">
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
