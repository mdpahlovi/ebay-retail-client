import React from "react";

const ProductCard = ({ product }) => {
    const { name, image, location, resale_price, original_price, used_year, description, condition, seller } = product;
    const { user_name, avatar } = seller;

    return (
        <div class="flex flex-col sm:flex-row rounded-lg shadow-md">
            <div className="sm:hidden">
                <img src={image} alt="" />
            </div>
            <div class="flex-none sm:w-48 md:w-64 lg:w-96 xl:w-48 relative">
                <img src={image} alt="" class="absolute inset-0 w-full h-full object-cover rounded-l-lg" loading="lazy" />
            </div>
            <div class="flex-auto p-6 space-y-1">
                <div class="flex flex-wrap space-y-1.5">
                    <h3 class="flex-auto text-2xl font-semibold">{name}</h3>
                    <div class="text-xl font-semibold text-base-content/80">${resale_price}</div>
                    <div class="w-full flex-none">
                        <span className="badge badge-primary badge-lg">{condition}</span>
                    </div>
                </div>
                <p class="line-clamp-2 pt-1">{description}</p>
                <div className="text-lg font-semibold text-base-content/80">Location : {location}</div>
                <div className="text-sm text-base-content/50 flex flex-col gap-1">
                    <span>Original Price : ${original_price}</span>
                    <span>Used : {used_year} Year</span>
                </div>
                <div className="h-1.5 w-full"></div>
                <div class="flex-auto flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10">
                            <img className="mask mask-squircle" src={avatar} alt={user_name} />
                            <div class="absolute -top-1 -right-1 justify-center items-center w-4 h-4 bg-blue-700 z-10 rounded-full"></div>
                        </div>
                        <h3 className="font-semibold">{user_name}</h3>
                    </div>
                    <button class="btn btn-sm btn-primary" type="submit">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
