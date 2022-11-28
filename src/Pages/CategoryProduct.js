import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

const CategoryProduct = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const categoryName = category[0].toUpperCase() + category.substring(1);

    useEffect(() => {
        axios.get(`https://ebay-server.vercel.app/category/${category}`).then((data) => {
            setProducts(data.data);
            setLoading(false);
        });
    }, [category, refresh]);

    if (loading) {
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
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} refresh={refresh} setRefresh={setRefresh} />
                    ))}
                </section>
            </>
        );
    }
};

export default CategoryProduct;
