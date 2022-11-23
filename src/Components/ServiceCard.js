import React from "react";

const ServiceCard = () => {
    return (
        <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-base-content/10">
                <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
            <p className="text-sm text-base-content/70">
                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.
            </p>
        </div>
    );
};

export default ServiceCard;
