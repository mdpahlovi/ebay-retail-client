import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

const CategoryProduct = () => {
    const { category } = useParams();
    const categoryName = category[0].toUpperCase() + category.substring(1);

    const { isLoading, data } = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            return axios.get(`https://ebay-server.vercel.app/category/${category}`);
        },
    });

    if (isLoading) {
        return (
            <div className="w-full h-[350px] flex justify-center items-center">
                <HashLoader color="#F48E00" size={100} />
            </div>
        );
    } else {
        return (
            <>
                <Header title={categoryName} route={categoryName}></Header>
                <section className="my-container section-gap grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {data.data.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </section>
            </>
        );
    }
};

export default CategoryProduct;
