import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Hero />
            <section className="my-container section-gap">
                <h1 className="text-center mb-4">Our Products</h1>
                <ul className={`flex flex-wrap gap-2 justify-center ${loading ? "animate-pulse" : ""}`}>
                    {loading
                        ? [...Array(4)].map((name, index) => <div key={index} className="w-28 h-12 bg-base-content/10"></div>)
                        : categories.map((category, index) => (
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
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde omnis
                        iste natus.
                    </p>
                    <div className="flex items-center gap-6">
                        <button type="submit" className="btn btn-primary">
                            Get started
                        </button>
                        <Link aria-label="" className="btn btn-outline btn-primary">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </section>
        </>
    );
};

export default Home;
