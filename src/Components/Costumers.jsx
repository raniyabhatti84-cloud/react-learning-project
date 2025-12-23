

import img9 from "../../public/image-912x.png";
import logoCopy from "../../public/logo32x-copy.png";
import logo1 from "../../public/logo-1.png";
import logo2 from "../../public/logo12x.png";
import logo3 from "../../public/logo2x.png";
import logo4 from "../../public/logo-2.png";
import logo5 from "../../public/logo-3.png";
import rightArrow from "../../public/right13x.png";


function Section5() {
  return (
    <section id="pricing" className="mt-16">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 py-12 px-6 gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            src={img9}
            alt=""
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#717171] text-sm sm:text-base lg:text-xl leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim.
          </p>

          <h2 className="text-[#4CAF4F] font-semibold text-xl lg:text-3xl mt-4">
            Tim Smith
          </h2>

          <h3 className="text-[#89939E] text-sm lg:text-lg mt-1">
            British Dragon Boat Racing Association
          </h3>

          {/* LOGOS */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-6">
            <img className="h-6 lg:h-10" src={logoCopy} />
            <img className="h-6 lg:h-10" src={logo1} />
            <img className="h-6 lg:h-10" src={logo2} />
            <img className="h-6 lg:h-10" src={logo3} />
            <img className="h-6 lg:h-10" src={logo4} />
            <img className="h-6 lg:h-10" src={logo5} />

            <button className="flex items-center text-[#4CAF4F] font-semibold text-sm lg:text-lg ml-2">
              Meet all customers
              <img className="ml-2 h-4 lg:h-6" src={rightArrow} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section5;


