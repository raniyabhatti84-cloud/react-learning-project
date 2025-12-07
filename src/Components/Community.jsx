import React from "react";

function Section6(props) {
    return (
        <section id="blog" className="w-full h-auto   mb-12 px-4">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:mt-25 font-semibold text-[#4D4D4D]">
                    {props.h1}
                </h1>
                <p className="text-[#717171] mt-4  lg:text-3xl lg:mt-7 text-base sm:text-lg">
                    {props.par}
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:mt-25 lg:grid-cols-3 gap-10 mt-12">

                {/* Card 1 */}
                <div className="relative flex flex-col items-center">
                    <img
                        className="w-full rounded-2xl"
                        src="src/assets/image 18@2x.png"
                        alt=""
                    />
                    <div className="bg-[#F5F7FA] shadow rounded-xl p-5 w-11/12 -mt-12 relative z-10 text-center">
                        <p className="text-[#717171] font-semibold text-lg lg:text-3xl">
                            Creating Streamlined Safeguarding Processes with OneRen
                        </p>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            <h3 className="text-[#4CAF4F] lg:text-3xl font-semibold">Read more</h3>
                            <img className="h-3" src="src/assets/Right.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative flex flex-col items-center">
                    <img
                        className="w-full rounded-2xl"
                        src="src/assets/image 19@2x.png"
                        alt=""
                    />
                    <div className="bg-[#F5F7FA] shadow rounded-xl p-5 w-11/12 -mt-12 relative z-10 text-center">
                        <p className="text-[#717171] font-semibold lg:text-3xl text-lg">
                            What are your safeguarding responsibilities and how can you manage them?
                        </p>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            <h3 className="text-[#4CAF4F] lg:text-3xl font-semibold">Read more</h3>
                            <img className="h-3" src="src/assets/Right.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative flex flex-col items-center">
                    <img
                        className="w-full rounded-2xl"
                        src="src/assets/image 20@2x.png"
                        alt=""
                    />
                    <div className="bg-[#F5F7FA] shadow rounded-xl p-5 w-11/12 -mt-12 relative z-10 text-center">
                        <p className="text-[#717171] font-semibold lg:text-3xl text-lg">
                            Revamping the Membership Model with Triathlon Australia
                        </p>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            <h3 className="text-[#4CAF4F] lg:text-3xl font-semibold">Read more</h3>
                            <img className="h-3" src="src/assets/Right.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Heading */}
            <div className="text-center max-w-2xl mx-auto mt-12">
                <h1 className="text-3xl sm:text-4xl font-semibold lg:mt-25 lg:text-5xl text-gray-800">
                    Pellentesque suscipit fringilla libero eu.
                </h1>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
                <button className="bg-[#4CAF4F] px-6 lg:text-4xl py-3 lg:mt-10 text-white rounded-lg">
                    Learn More
                </button>
            </div>

        </section>
    );
}

export default Section6;
