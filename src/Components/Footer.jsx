import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-[#263238] py-30 px-6">
            <div className="max-w-full mx-auto flex flex-col lg:flex-row justify-center gap-10">

                {/* Logo & Social */}
                <div className="flex flex-col items-start  lg:w-1/4">
                    <div className="flex items-center mb-4">
                        <img src="src/assets/Icon@2x.png" alt="Logo" className="h-8 w-8 lg:w-15 lg:h-15" />
                        <h2 className="ml-3 text-xl text-white lg:text-4xl font-semibold">Nexcent</h2>
                    </div>
                    <p className="text-gray-300 text-sm lg:text-3xl lg:mt-10">Copyright © 2020 Landify UI Kit.</p>
                    <p className="text-gray-300 text-sm lg:text-3xl mt-1">All rights reserved</p>

                    <div className="flex items-center gap-4 mt-4">
                        <img className="h-6 w-6 lg:w-10 lg:h-10" src="src/assets/instagram-6338401_640.webp" alt="Instagram" />
                        <img className="h-6 w-6 lg:w-10 lg:h-10" src="src/assets/icons8-whatsapp-logo-48.png" alt="WhatsApp" />
                        <img className="h-6 w-6 lg:w-10 lg:h-10" src="src/assets/icons8-facebook-logo-48.png" alt="Facebook" />
                        <img className="h-6 w-6 lg:w-10 lg:h-10" src="src/assets/icons8-youtube-logo-94.png" alt="YouTube" />
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col lg:w-1/5">
                    <h3 className="text-white lg:text-4xl text-xl mb-3">Company</h3>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-10">About us</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Blog</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Contact us</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Pricing</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Testimonials</a>
                </div>

                {/* Support Links */}
                <div className="flex flex-col lg:w-1/5">
                    <h3 className="text-white lg:text-4xl text-xl mb-3">Support</h3>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-10">Help center</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Terms of services</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Legal</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Privacy policy</a>
                    <a href="#" className="text-gray-300 mt-1 hover:text-white lg:text-3xl lg:mt-6">Status</a>
                </div>

                {/* Stay Updated */}
                <div className="flex flex-col lg:w-1/4">
                    <h3 className="text-white lg:text-4xl text-xl mb-3">Stay up to date</h3>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="bg-gray-500 text-white rounded-lg py-2 lg:mt-10 lg:text-2xl px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

            </div>
        </footer>
    );
}

export default Footer;
