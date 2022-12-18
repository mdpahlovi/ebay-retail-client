import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Advertisement = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["Advertisements"],
        queryFn: () => {
            return axios.get("https://ebay-server.vercel.app/adverties-product");
        },
    });

    return (
        <section className={`my-container section-gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ${isLoading ? "animate-pulse" : ""}`}>
            {isLoading
                ? [...Array(3)].map((name, index) => (
                      <div key={index} className="bg-base-content/10 px-4 pb-4 pt-56 sm:px-6 2xl:px-8 sm:pb-6 2xl:pb-8 sm:pt-64"></div>
                  ))
                : data.data.map(({ _id, category, image, condition, name }) => (
                      <div
                          key={_id}
                          className="relative bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 2xl:px-8 sm:pb-6 2xl:pb-8 sm:pt-64"
                          style={{ backgroundImage: `url(${image})` }}
                      >
                          <span className="absolute inset-0 bg-gray-900/25"></span>
                          <strong className="absolute top-4 left-0 bg-primary py-1.5 px-3 text-xs uppercase tracking-wider text-white">{condition}</strong>
                          <div className="relative text-center">
                              <h3 className="text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
                                  Save
                                  <span className="relative inline-block before:absolute before:inset-x-0 before:bottom-0.5 before:h-2 before:bg-primary mx-2 2xl:mx-4">
                                      <span className="relative"> 10% </span>
                                  </span>
                                  on Sales
                              </h3>
                              <p className="mt-1 text-white/95">{name}</p>
                              <Link to={`/category/${category}`} className="btn btn-primary w-full mt-4">
                                  Book Now
                              </Link>
                          </div>
                      </div>
                  ))}
        </section>
    );
};

export default Advertisement;
