import React from "react";
import Header from "../Components/Header";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
    return (
        <>
            <Header title={"Our Letest Blogs"} route={"Blogs"}></Header>
            <section className="my-container section-gap">
                <div className="mx-auto max-w-screen-sm text-center mb-12 sm:mb-14 lg:mb-16">
                    <p className="font-light sm:text-xl">
                        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <BlogCard />
                    <BlogCard />
                </div>
            </section>
        </>
    );
};

export default Blogs;
