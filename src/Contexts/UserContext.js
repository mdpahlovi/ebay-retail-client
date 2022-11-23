import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signInByFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };
    const signInByGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const signout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (correntUser) => {
            setUser(correntUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    // Get Theme Value
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const authInfo = { user, loading, createUser, signIn, signInByGoogle, signInByFacebook, signInByGithub, signout, theme, setTheme };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
