import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import ShopSection from "../components/ShopSection";
import ShartSection from "../components/ShartSection";

const categories = ["All", "Men", "Women", "Kids"];

const Shart = () => {
  const { shartData } = useContext(ProductsContext);
  const [products, setProducts] = useState(shartData || []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredProducts = shartData || [];

    // Category filter
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search filter (any field)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  }, [selectedCategory, shartData, searchTerm]);

  return (
    <div className="pt-10 bg-gray-50 min-h-[93vh]">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        {/* Search Input */}
        <div className="w-full md:w-2/6 mb-8 flex justify-end">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-amber-600 border outline-none rounded-md py-2 pl-4 border-amber-400"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full border border-amber-600 cursor-pointer ${
                selectedCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-transparent text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((item) => <ShartSection key={item.id} item={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shart;
