import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-amber-50">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between  px-5 md:px-20 py-10 gap-4 md:gap-20">
        {/* Text Section */}
        <div className="space-y-6 md:max-w-lg">
          <h3 className="text-3xl md:text-5xl font-bold text-amber-500 leading-tight">
            Step Into Style with Our Latest Shoes
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-[30px]">
            Upgrade your wardrobe with our newest collection of shoes, combining
            style, comfort, and quality for every occasion.
          </p>
          <Link
            to={`/shop`}
            className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition duration-300 cursor-pointer"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            className="w-full max-w-md mx-auto"
            src="https://ik.imagekit.io/szqjng5ej/fares-hamouche-HIyD2pPlK-s-unsplash-removebg-preview.png?updatedAt=1759081395168"
            alt="Stylish Shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
