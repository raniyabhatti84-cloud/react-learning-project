import React from "react";

function Section4(props) {
  return (
    <section
      id="community"
      className="w-full h-auto flex flex-col lg:flex-row items-center justify-center mb-20 px-4 sm:px-6 lg:px-20 lg:mt-40"
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-20">
        <img
          src={props.image}
          alt=""
          className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg lg:h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-5 lg:mt-0 px-2 sm:px-4 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-700">
          {props.h1}
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-700 mt-1">
          We did
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
          {props.par}
        </p>

        <button className="bg-[rgba(76,175,79,1)] text-white font-medium mt-7 px-6 sm:px-8 py-2 sm:py-3 lg:text-2xl xl:text-3xl rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Section4;
