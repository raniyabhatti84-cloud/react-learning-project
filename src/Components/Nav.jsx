import React, { useState } from "react";
import logo from "../../public/icon12x.png";
import menuIcon from "../../public/menu.jpg";
import rightArrow from "../../public/right12x.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 md:py-9 px-4 md:px-6 w-full sticky top-0 bg-white z-50 shadow">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-10 md:w-12 lg:w-16" src={logo} alt="logo" />
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-700">Nextcent</h1>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className="md:hidden block" onClick={() => setOpen(!open)}>
        <img className="w-6 h-6" src={menuIcon} alt="menu" />
      </button>

      {/* Menu */}
      <div
        className={`flex flex-col md:flex-row md:flex items-center gap-4 md:gap-6 font-medium text-gray-600 absolute md:static bg-white left-0 w-full md:w-auto py-4 md:py-0 transition-all duration-300 ${
          open ? "top-16" : "top-[-500px]"
        }`}
      >
        <a href="#home" className="px-3 py-2 text-base md:text-lg lg:text-xl hover:text-green-600">
          Home
        </a>
        <a href="#features" className="px-3 py-2 text-base md:text-lg lg:text-xl hover:text-green-600">
          Features
        </a>
        <a href="#community" className="px-3 py-2 text-base md:text-lg lg:text-xl hover:text-green-600">
          Community
        </a>
        <a href="#blog" className="px-3 py-2 text-base md:text-lg lg:text-xl hover:text-green-600">
          Blog
        </a>
        <a href="#pricing" className="px-3 py-2 text-base md:text-lg lg:text-xl hover:text-green-600">
          Pricing
        </a>

        <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded text-sm md:text-base lg:text-lg">
          Register Now
          <img className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" src={rightArrow} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
