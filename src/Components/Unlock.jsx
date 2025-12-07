import React from "react";

function Section4(props) {
    return (
        <section id="community" className="w-full h-auto flex flex-col lg:mt-40 lg:flex-row items-center justify-center mb-20 px-6 lg:px-20">

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center mb-10  lg:mb-20">
                <img className="w-full h-auto max-w-md lg:mt-60 lg:h-130" src={props.image} alt="" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-5 lg:mt-0 px-2">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-700">
                    {props.h1}
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-700 mt-1">
                    We did
                </h1>

                <p className="mt-6 text-gray-600 lg:text-3xl text-base leading-relaxed">
                    {props.par}
                </p>

                <button className="bg-[rgba(76,175,79,1)] p-3 lg:text-3xl sm:p-4 text-white rounded mt-7 px-8 font-medium">
                    Learn More
                </button>
            </div>

        </section>
    );
}

export default Section4;
