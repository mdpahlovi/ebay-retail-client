import React from "react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Check from "../Assets/Check.png";

const ProductCard = ({ product }) => {
    const { name, image, location, resale_price, original_price, used_year, description, condition, date, seller_name, seller_avatar, verification } = product;
    const dateIs = format(parseISO(date), "PP");
    const timeIs = format(parseISO(date), "p");

    return (
        <div className="flex flex-col sm:flex-row rounded-lg shadow-md">
            <div className="sm:hidden">
                <img src={image} alt="" />
            </div>
            <div className="flex-none sm:w-48 md:w-64 lg:w-96 xl:w-48 relative">
                <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover rounded-l-lg" loading="lazy" />
            </div>
            <div className="flex-auto p-6 space-y-1">
                <div className="flex flex-wrap space-y-1.5">
                    <h3 className="flex-auto text-2xl font-semibold">{name}</h3>
                    <div className="text-xl font-semibold text-base-content/80">${resale_price}</div>
                    <div className="w-full flex-none">
                        <span className="badge badge-primary badge-lg">{condition}</span>
                    </div>
                </div>
                <p className="line-clamp-2 pt-1">{description}</p>
                <div className="text-lg font-semibold">Location : {location}</div>
                <div className="text-sm text-base-content/50 flex flex-col gap-1">
                    <span>Original Price : ${original_price}</span>
                    <span>Used : {used_year} Year</span>
                </div>
                <div className="h-1.5 w-full"></div>
                <div className="flex-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <img className="w-12 mask mask-squircle" src={seller_avatar} alt="" />
                        <div>
                            <h3 className="font-semibold flex items-center gap-1">
                                {seller_name}
                                {verification ? <img className="w-4 h-4" src={Check} alt="" /> : ""}
                            </h3>
                            <h3 className="text-sm text-base-content/75 mt-0.5">{`${dateIs} ${timeIs}`}</h3>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-primary" type="submit">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
