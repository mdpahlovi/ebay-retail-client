import React from "react";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";

const BlogCard = () => {
    return (
        <article className="p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
                <Link>How to quickly deploy a static website</Link>
            </h2>
            <p className="mb-5 font-light">
                Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web
                designers and developers influence both web designers and developers.
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img
                        className="w-7 h-7 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                    />
                    <span className="font-medium">Jese Leos</span>
                </div>
                <Link className="inline-flex items-center font-medium hover:underline">
                    Read more
                    <VscArrowSmallRight className="text-2xl" />
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
