import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="my-container section-gap grid grid-col-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col md:justify-center space-y-4">
                <h1>
                    Kickstart <br />
                    Startup Website <br />
                    with TailGrids.
                </h1>
                <p className="max-w-xl lg:max-w-[480px]">
                    With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed.
                </p>
                <div className="flex flex-wrap items-center gap-5">
                    <Link className="btn btn-primary w-full xs:w-auto">Get Start</Link>
                    <Link className="btn btn-outline btn-primary w-full xs:w-auto">Download Now</Link>
                </div>
                <div className="hidden lg:block">
                    <h6 className="font-normal opacity-50 mb-4">Some of Our Clients</h6>
                    <div className="flex items-center gap-8 max-w-lg">
                        <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" alt="ayroui" />
                        <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg" alt="graygrids" />
                        <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="uideck" />
                    </div>
                </div>
            </div>
            <div className="lg:text-right mx-auto lg:ml-auto lg:mr-0 pb-6">
                <div className="relative inline-block z-10">
                    <img src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png" alt="hero" className="max-w-full" />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                        <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#F48E00" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#F48E00" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#F48E00" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#F48E00" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#F48E00" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#F48E00" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#F48E00" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#F48E00" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#F48E00" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#F48E00" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#F48E00" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#F48E00" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#F48E00" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#F48E00" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#F48E00" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#F48E00" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#F48E00" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#F48E00" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#F48E00" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#F48E00" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#F48E00" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#F48E00" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#F48E00" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#F48E00" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#F48E00" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="lg:hidden col-span-full -mt-4">
                <h6 className="font-normal text-sm text-center mb-4">Some Of Our Clients</h6>
                <div className="flex items-center gap-8 max-w-lg mx-auto">
                    <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" alt="ayroui" />
                    <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg" alt="graygrids" />
                    <img className="w-full" src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="uideck" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
