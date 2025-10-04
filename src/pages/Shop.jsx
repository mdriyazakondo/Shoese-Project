import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import ShopSection from "../components/ShopSection";
const category = [
  "All",
  "Dress Shoes",
  "Athletic",
  "Sneakers",
  "Boots",
  "Loafers",
  "Casual",
  "Outdoor",
];

const Shop = () => {
  const { productsData } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsData);
  const [categorys, setCategorys] = useState("All");

  useEffect(() => {
    if (categorys === "All") {
      setProducts(productsData);
    } else {
      const product = productsData.filter(
        (item) => item.category.toLowerCase() === categorys.toLowerCase()
      );
      setProducts(product);
    }
  }, [categorys, productsData]);

  return (
    <div className="pt-10 bg-gray-50 min-h-[93vh]">
      <div className="max-w-7xl mx-auto">
        <div className=" w-2/6  mb-8 flex justify-end">
          <input
            type="text"
            placeholder="Search Products....."
            className="w-full text-amber-400 border outline-none rounded-md py-2 pl-4 border-amber-400"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-5 md:mx-auto flex flex-wrap items-center gap-2 mb-4">
        {category.map((categ, index) => (
          <button
            onClick={() => setCategorys(categ)}
            className={`py-2 px-3 ${
              categorys === `${categ}`
                ? "bg-amber-600 text-white"
                : "bg-transparent"
            } bg-amber-600  rounded-full border border-amber-600 text-amber-600 cursor-pointer`}
            key={index}
          >
            {categ}
          </button>
        ))}
      </div>
      <div className="max-w-7xl mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <ShopSection key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
