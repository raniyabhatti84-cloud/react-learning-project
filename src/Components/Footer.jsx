import React from "react";
import logo from "../../public/logo-2.png";
import insta from "../../public/instagram-6338401_640.webp";
import whatsapp from "../../public/whatsapp.webp";
import facebook from "../../public/icons8-facebook-logo-48.png";
import youtube from "../../public/icons8-youtube-logo-94.png";

function Footer() {
  return (
    <footer className="bg-[#263238] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} className="h-8 lg:h-12" />
            <h2 className="ml-3 text-white text-xl lg:text-3xl font-semibold">
              Nexcent
            </h2>
          </div>

          <p className="text-gray-300 text-sm lg:text-base">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-gray-300 text-sm lg:text-base">
            All rights reserved
          </p>

          <div className="flex gap-4 mt-4">
            <img className="h-6 lg:h-8" src={insta} />
            <img className="h-6 lg:h-8" src={whatsapp} />
            <img className="h-6 lg:h-8" src={facebook} />
            <img className="h-6 lg:h-8" src={youtube} />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-lg lg:text-xl mb-4">Company</h3>
          {["About us", "Blog", "Contact us", "Pricing", "Testimonials"].map(
            (item) => (
              <p key={item} className="text-gray-300 hover:text-white mt-2">
                {item}
              </p>
            )
          )}
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white text-lg lg:text-xl mb-4">Support</h3>
          {["Help center", "Terms", "Legal", "Privacy", "Status"].map(
            (item) => (
              <p key={item} className="text-gray-300 hover:text-white mt-2">
                {item}
              </p>
            )
          )}
        </div>

        {/* EMAIL */}
        <div>
          <h3 className="text-white text-lg lg:text-xl mb-4">
            Stay up to date
          </h3>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

      </div>
    </footer>
  );
}

export default Footer;

