import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="my-container section-gap grid lg:grid-cols-2 gap-x-16 gap-y-10">
                <div className="space-y-6">
                    <h2>The quick, brown fox jumps over a lazy dog</h2>
                    <p>
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
