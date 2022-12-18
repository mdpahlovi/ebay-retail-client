import React from "react";
import Header from "../../Components/Header";
import BlogCard from "../../Components/BlogCard";
import { HashLoader } from "react-spinners";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => {
            return axios.get("https://ebay-server.vercel.app/blogs");
        },
    });

    return (
        <>
            {isLoading ? (
                <div className="w-full h-[350px] flex justify-center items-center">
                    <HashLoader color="#F48E00" size={100} />
                </div>
            ) : (
                <>
                    <Header title={"Our Letest Blogs"} route={"Blogs"}></Header>
                    <section className="my-container section-gap">
                        <div className="mx-auto max-w-screen-sm text-center mb-12 sm:mb-14 lg:mb-16">
                            <p className="font-light sm:text-xl">
                                We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                            </p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2">
                            {data?.data.map((blog) => (
                                <BlogCard key={blog._id} blog={blog} />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Blogs;
