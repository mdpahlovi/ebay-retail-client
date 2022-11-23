import React from "react";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import { DiReact } from "react-icons/di";

const BlogCard = ({ blog }) => {
    const { question, answer, auther } = blog;
    const { first_name, last_name, avatar } = auther;
    return (
        <article className="p-6 rounded-lg shadow-md flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="inline-flex items-center px-2.5 py-0.5">
                    <DiReact className="text-xl mr-1" />
                    React
                </span>
                <span>14 days ago</span>
            </div>
            <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight">
                    <Link>{question}</Link>
                </h2>
                <p className="font-light line-clamp-[10] sm:line-clamp-6">{answer}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src={avatar} alt="" />
                    <span className="font-medium">{`${first_name} ${last_name}`}</span>
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
