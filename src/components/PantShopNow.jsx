import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import ShopSection from "./ShopSection";
import { Link } from "react-router-dom";
const PantShopNow = () => {
  const { pantData } = useContext(ProductsContext);
  console.log(pantData);
  return (
    <div className="py-10 bg-gray-50">
      <div className="w-[300px] mx-auto ">
        <h3 className="text-4xl font-semibold text-amber-400 text-center mb-4 border-b-4 rounded-full pb-2">
          Best Pant
        </h3>
      </div>

      <div className="max-w-7xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pantData.slice(23, 29).map((item) => (
          <ShopSection key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          to={`/pant`}
          className="px-6 py-2 bg-amber-500  text-white rounded-full text-xl font-semibold"
        >
          See Products...
        </Link>
      </div>
    </div>
  );
};

export default PantShopNow;
