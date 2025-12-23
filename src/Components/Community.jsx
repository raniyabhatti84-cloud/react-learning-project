import React from "react";

import img18 from "../../public/image-1812x.png";
import img19 from "../../public/image-1912x.png";
import img20 from "../../public/image-2012x.png";
import rightArrow from "../../public/right.png";

function Section6(props) {
  return (
    <section
      id="blog"
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4D4D4D]">
          {props.h1}
        </h1>
        <p className="text-[#717171] mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          {props.par}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">

        {/* Card */}
        {[
          {
            img: img18,
            text: "Creating Streamlined Safeguarding Processes with OneRen",
          },
          {
            img: img19,
            text: "What are your safeguarding responsibilities and how can you manage them?",
          },
          {
            img: img20,
            text: "Revamping the Membership Model with Triathlon Australia",
          },
        ].map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">

            {/* Image */}
            <img
              className="w-full rounded-2xl object-cover"
              src={card.img}
              alt=""
            />

            {/* Content Box */}
            <div className="bg-[#F5F7FA] shadow-md rounded-xl p-4 sm:p-5 w-11/12 -mt-12 sm:-mt-14 text-center">
              <p className="text-[#717171] font-semibold text-sm sm:text-base md:text-lg">
                {card.text}
              </p>

              <div className="flex justify-center items-center gap-2 mt-3">
                <h3 className="text-[#4CAF4F] text-sm sm:text-base md:text-lg font-semibold">
                  Read more
                </h3>
                <img className="h-3 sm:h-4" src={rightArrow} alt="" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Heading */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
          Pellentesque suscipit fringilla libero eu.
        </h1>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#4CAF4F] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg lg:text-xl text-white rounded-lg hover:opacity-90 transition">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Section6;
