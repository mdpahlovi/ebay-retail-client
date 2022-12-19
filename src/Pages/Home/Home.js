import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Advertisement from "./Components/Advertisement";
import Hero from "./Components/Hero";
import ServiceCard from "../../Components/ServiceCard";
import Google_Badge from "../../Assets/logo/Google_Play_Store_badge_EN.png";
import Apple_Badge from "../../Assets/logo/Download_on_the_App_Store_Badge.png";
import App_img from "../../Assets/mobility_illustration.webp";

const Home = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => {
            return axios.get("https://ebay-server.vercel.app/categories");
        },
    });

    return (
        <>
            <Hero />
            <Advertisement />
            <section className="my-container section-gap">
                <h1 className="text-center mb-4">Our Products</h1>
                <ul className={`flex flex-wrap gap-2 justify-center ${isLoading ? "animate-pulse" : ""}`}>
                    {isLoading
                        ? [...Array(4)].map((name, index) => <div key={index} className="w-28 h-12 bg-base-content/10"></div>)
                        : data?.data.map((category, index) => (
                              <Link to={`/category/${category}`} className="btn btn-ghost" key={index}>
                                  {category}
                              </Link>
                          ))}
                </ul>
            </section>
            <section className="my-container section-gap grid lg:grid-cols-2 gap-x-16 gap-y-10">
                <div className="space-y-4">
                    <h1>Why should you trust our services?</h1>
                    <p className="pb-2">
                        Choose from over 4,500 items that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means
                        that we’ll replace the item for FREE if it’s not as described in the ad!
                    </p>
                    <div className="flex items-center gap-6">
                        <button type="submit" className="btn btn-primary">
                            Contact Us
                        </button>
                        <Link className="btn btn-outline btn-primary">Learn more</Link>
                    </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <ServiceCard stats="100" statsTitle="Customer Review" />
                    <ServiceCard stats="50" statsTitle="Product Selled" />
                    <ServiceCard stats="60" statsTitle="Total Seller" />
                    <ServiceCard stats="20" statsTitle="Daily Customer" />
                </div>
            </section>
            <section className="my-container section-gap bg-primary/10 px-10 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-lg">
                <div class="space-y-6">
                    <h1>Download it now</h1>
                    <p class="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                    <div class="flex flex-wrap justify-center gap-4 md:justify-start lg:gap-6">
                        <a href="/" target="blank">
                            <img src={Google_Badge} className="w-36" alt="Google Badge" />
                        </a>
                        <a href="/" target="blank">
                            <img src={Apple_Badge} className="w-36" alt="Apple store Badge" />
                        </a>
                    </div>
                </div>
                <img src={App_img} class="m-auto w-80" loading="lazy" alt="mobility_illustration" />
            </section>
        </>
    );
};

export default Home;
