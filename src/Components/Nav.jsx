import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-9 px-6 w-full sticky top-0 bg-white z-50 shadow">

      {/* Logo */}
      <div className="  flex items-center gap-2">
        <img className=" md:w-10 lg:w-20 " src="src/assets/Icon@2x.png" alt="logo" />
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-700">Nextcent</h1>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden block"
        onClick={() => setOpen(!open)}
      >
        <img className="w-6" src="src\assets\menu.jpg" alt="menu" />
      </button>

      {/* Menu */}
      <div className={`flex-col md:flex-row md:flex sm:text-12 items-center gap-6 font-medium text-gray-600 absolute md:static bg-white left-0 w-full md:w-auto  py-4 md:py-0 transition-all duration-300 
        ${open ? "top-16" : "top-[-500px]"}`} >

        <a href="#home" className="px-3 sm:text-12 py-2 md:text-xl lg:text-3xl hover:text-green-600">Home</a>
        <a href="#features" className="px-4 py-2 md:text-xl lg:text-3xl hover:text-green-600">Features</a>
        <a href="#community" className="px-4 py-2 md:text-xl lg:text-3xl hover:text-green-600">Community</a>
        <a href="#blog" className="px-4 py-2 md:text-xl lg:text-3xl hover:text-green-600">Blog</a>
        <a href="#pricing" className="px-4 py-2 md:text-xl lg:text-3xl hover:text-green-600">Pricing</a>

        <button className="flex items-center md:text-90 lg:text-3xl gap-1 bg-green-500 text-white sm:px-3 py-2 px-3 rounded">
          Register Now
          <img className="w-4 pt-1" src="src/assets/Right@2x.png" alt="" />
        </button>

      </div>

    </nav>
  );
}

export default Header;
