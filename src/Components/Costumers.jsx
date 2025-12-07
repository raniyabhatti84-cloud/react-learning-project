import React from "react";

function Section5() {
    return (
        <div id="pricing" className="mt-10 lg:mt-50">
            <div className="flex flex-col lg:flex-row lg:mt-7 items-center justify-center bg-gray-200 py-12 px-6">

                {/* LEFT IMAGE */}
                <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        className="h-auto w-full max-w-sm lg:max-w-md"
                        src="src/assets/image 9@2x.png"
                        alt=""
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="lg:w-1/2 lg:ml-10">
                    <p className="text-[#717171] font-medium lg:text-3xl lg:mt-50 text-base leading-relaxed">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                        lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
                        enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                        enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
                        at ligula molestie, nec molestie mi blandit. Suspendisse cursus
                        tellus sed augue ultrices, quis tristique nulla sodales.
                    </p>

                    <h2 className="text-[#4CAF4F] font-semibold lg:text-4xl text-2xl mt-4">
                        Tim Smith
                    </h2>

                    <h3 className="text-[#89939E] font-normal lg:text-3xl lg:mt-7 text-lg mt-1">
                        British Dragon Boat Racing Association
                    </h3>

                    {/* LOGOS ROW */}
                    <div className="flex flex-wrap items-center lg:mt-7 gap-4 mt-6">

                        <img className="h-6 lg:w-15 lg:h-15" src="src/assets/Logo@2x copy.png" alt="" />
                        <img className="h-7 lg:w-15 lg:h-15" src="src/assets/Logo (1).png" alt="" />
                        <img className="h-8 lg:w-15 lg:h-15" src="src/assets/Logo@2x.png" alt="" />
                        <img className="h-8 lg:w-15 lg:h-15" src="src/assets/Logo2x.png" alt="" />
                        <img className="h-8 lg:w-15 lg:h-15" src="src/assets/Logo (2).png" alt="" />
                        <img className="h-8 lg:w-15 lg:h-15" src="src/assets/Logo (3).png" alt="" />

                        <button className="flex items-center lg:text-3xl text-[#4CAF4F] font-semibold ml-2">
                            Meet all customers
                            <img className="w-5 h-3 ml-2 lg:h-9 lg:w-9" src="src/assets/Right@3x.png" alt="" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;
