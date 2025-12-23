import React from 'react'

import logo from '../../public/logo.png'
import logo1 from '../../public/logo12x.png'
import logo2 from '../../public/logo2x.png'
import logo3 from '../../public/logo-2.png'

import icon from '../../public/icon.png'
import icon1 from '../../public/icon-1.png'
import icon2 from '../../public/icon-2.png'


function Section2() {
    return (
        <section
            id="features"
            className="w-full h-auto mb-11 px-4 md:px-10 lg:py-32 lg:px-40"
        >
            {/* Heading */}
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl  text-gray-700 font-semibold">
                    Our Clients
                </h1>
                <p className="mt-2 sm:text-xs md:text-lg lg:text-3xl lg:mt-5 text-gray-500">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap justify-center lg:mt-15  gap-4 mt-7">
                <img className="h-6 sm:h-7 md:h-8 w-10 animate-spin" src={logo} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-11 animate-spin" src={logo1} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-11 animate-spin" src={logo1} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-11 animate-spin" src={logo2} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-11 animate-spin" src={logo3} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-10 animate-spin" src={logo} alt="" />
                <img className="h-6 sm:h-7 md:h-8 w-11 animate-spin" src={logo1} alt="" />
                
            </div>

            {/* Middle Heading */}
            <div className="mt-10 text-center lg:mt-15">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700">
                    Manage your entire community
                </h1>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl lg:mt-3 font-semibold text-gray-700 mt-1">
                    in a single system
                </h1>
                <p className="mt-3 text-sm md:text-lg lg:text-3xl lg:mt-6 text-gray-500">
                    Who is Nextcent suitable for?
                </p>
            </div>

           {/* Cards Section */}
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-8 gap-6 py-3">

  {/* Card 1 */}
  <div className="shadow-sm rounded-3xl p-6 lg:h-100 flex flex-col items-center justify-center">
    <img className="w-20 h-20" src={icon} alt="Membership Organisations" />
    <div className="text-center mt-2">
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        Membership
      </h1>
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        Organisations
      </h1>
      <p className="lg:mt-5 lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita
        a unde tenetur minima commodi consequuntur asperiores
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="shadow-sm rounded-3xl p-6 lg:h-100 flex flex-col items-center justify-center">
    <img className="w-20 h-20" src={icon2} alt="National Associations" />
    <div className="text-center mt-2">
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        National
      </h1>
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        Associations
      </h1>
      <p className="lg:mt-5 lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita
        a unde tenetur minima commodi consequuntur asperiores
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="shadow-sm rounded-3xl p-6 lg:h-100 flex flex-col items-center justify-center">
    <img className="w-20 h-20" src={icon1} alt="Clubs and Groups" />
    <div className="text-center mt-2">
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        Clubs And
      </h1>
      <h1 className="font-bold text-2xl lg:text-5xl text-gray-700">
        Groups
      </h1>
      <p className="lg:mt-5 lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita
        a unde tenetur minima commodi consequuntur asperiores
      </p>
    </div>
  </div>

</div>

        </section>
    )
}

export default Section2
