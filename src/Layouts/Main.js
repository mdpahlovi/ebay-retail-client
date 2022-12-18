import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import Icon from "../Assets/logo/icon.png";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer className="px-4 divide-y shadow-md border-t border-base-content/10">
                <div className="my-container flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img className="w-8 rounded-lg" src={Icon} alt="" />
                            </div>
                            <span className="self-center text-2xl font-semibold">Ebay Retail</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase">Product</h3>
                            <div className="flex flex-col space-y-1">
                                <Link>Features</Link>
                                <Link>Integrations</Link>
                                <Link>Pricing</Link>
                                <Link>FAQ</Link>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase">Company</h3>
                            <div className="flex flex-col space-y-1">
                                <Link>Privacy</Link>
                                <Link>Terms of Service</Link>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase">Developers</h3>
                            <div className="flex flex-col space-y-1">
                                <Link>Public API</Link>
                                <Link>Documentation</Link>
                                <Link>Guides</Link>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase">Social media</div>
                            <div className="flex justify-start space-x-3 text-2xl">
                                <Link title="Facebook" className="flex items-center p-1">
                                    <BsFacebook />
                                </Link>
                                <Link title="Twitter" className="flex items-center p-1">
                                    <BsTwitter />
                                </Link>
                                <Link title="Instagram" className="flex items-center p-1">
                                    <RiInstagramFill />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400">© 2022 Company Co. All rights reserved.</div>
            </footer>
        </>
    );
};

export default Main;
