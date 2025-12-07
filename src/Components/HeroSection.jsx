import React from 'react';

function Page1() {
    return (
        <div
            id="home"
            className="px-4 md:px-20  lg:px-50 lg:py-73 py-10 bg-[rgba(245,247,250,1)]"
        >
            <div className="mt-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between">

                {/* LEFT TEXT SECTION */}
                <div className="py-10 md:py-20 px-4 md:px-10  lg:px-20 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold text-[rgba(77,77,77,1)]">
                        Lessons and insights
                    </h1>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold text-[rgba(76,175,79,1)]">
                        from 8 years
                    </h1>

                    <p className="mt-3 md:w-3/4 lg:text-3xl text-[rgba(113,113,113,1)]">
                        Where to grow your business as a photographer: site or social media?
                    </p>

                    <button className="text-lg rounded lg:text-3xl py-2 px-6 mt-4 text-white bg-[rgba(76,175,79,1)]">
                        Register
                    </button>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <img
                        className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[500px]   h-auto"
                        src="src/assets/Illustration.png"
                        alt="Illustration"
                    />
                </div>

            </div>

            {/* DOTS IMAGE */}
            <div className="flex justify-center mt-6">
                <img src="src/assets/Dot.png" alt="dots" className="w-20 md:w-20 sm:w-5   lg:mt-35" />
            </div>
        </div>
    );
}

export default Page1;
