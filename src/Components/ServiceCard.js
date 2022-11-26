import React from "react";

const ServiceCard = ({ stats, statsTitle }) => {
    return (
        <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-xl font-bold bg-base-content/10">{stats}+</div>
            <h6 className="mb-2 font-semibold leading-5">{statsTitle}</h6>
            <p className="text-sm text-base-content/70">
                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.
            </p>
        </div>
    );
};

export default ServiceCard;
