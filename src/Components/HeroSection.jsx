import React from 'react';
import illustration from '../../public/illustration.png';
import dot from '../../public/dot.png';

function Page1() {
  return (
    <div
      id="home"
      className="px-4 md:px-10 lg:px-20 py-10 lg:py-20 bg-[rgba(245,247,250,1)]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between">

        {/* LEFT TEXT SECTION */}
        <div className="py-10 md:py-0 px-2 md:px-0 text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[rgba(77,77,77,1)]">
            Lessons and insights
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[rgba(76,175,79,1)]">
            from 8 years
          </h1>

          <p className="mt-4 md:mt-6 text-[rgba(113,113,113,1)] text-base sm:text-lg md:text-xl lg:text-2xl md:w-4/5">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="mt-6 text-white bg-[rgba(76,175,79,1)] py-2 px-6 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Register
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center md:justify-end md:w-1/2 mb-6 md:mb-0">
          <img
            src={illustration}
            alt="Illustration"
            className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[500px] h-auto"
          />
        </div>
      </div>

      {/* DOTS IMAGE */}
      <div className="flex justify-center mt-6">
        <img
          src={dot}
          alt="dots"
          className="w-10 sm:w-16 md:w-20 lg:w-24"
        />
      </div>
    </div>
  );
}

export default Page1;
