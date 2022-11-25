import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthAndToken } from "../Api/auth";

const Signin = () => {
    const { setLoading, signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const loaction = useLocation();
    const from = loaction.state?.from?.pathname || "/";

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(({ user }) => {
                setAuthAndToken(user);
                form.reset();
                toast.success("User Signin Completed");
                navigate(from, { replace: true });
            })
            .catch(({ message }) => {
                if (message === "Firebase: Error (auth/wrong-password).") {
                    toast.error("OPPS ! Your password didn't match");
                    form.reset();
                } else if (message === "Firebase: Error (auth/user-not-found).") {
                    toast.error("OPPS ! User doesn't found");
                    form.reset();
                }
                setLoading(false);
            });
    };

    // Social Signin
    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then(({ user }) => {
                setAuthAndToken(user, "buyer");
                toast.success("Google Signin Done");
                navigate(from, { replace: true });
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then(({ user }) => {
                setAuthAndToken(user, "buyer");
                toast.success("Facebook Signin Done");
                navigate(from, { replace: true });
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then(({ user }) => {
                setAuthAndToken({ user }, "buyer");
                toast.success("Github Signin Done");
                navigate(from, { replace: true });
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
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
                    <button onClick={() => navigate("/signup", { state: from, replace: true })} className="ml-1.5 font-bold uppercase underline">
                        Sign Up Now
                    </button>
                </p>
            </section>
        </>
    );
};

export default Signin;
