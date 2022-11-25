import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

const CategoryProduct = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [category]);

    const categoryName = category[0].toUpperCase() + category.substring(1);

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
                <section className="my-container section-gap grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </section>
            </>
        );
    }
};

export default CategoryProduct;
