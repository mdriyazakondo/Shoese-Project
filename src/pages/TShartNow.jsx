import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Minus, Plus } from "lucide-react";

const TShartNow = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const { id } = useParams();
  const { tShartData, addToCart, decreaseQuantity } =
    useContext(ProductsContext);

  useEffect(() => {
    const foundProduct = tShartData.find((item) => item.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);

      // Related products
      const related = tShartData.filter(
        (item) =>
          item.category === foundProduct.category && item.id !== foundProduct.id
      );
      setRelatedProducts(related);

      // Set discount
      const discount =
        typeof foundProduct.size === "number"
          ? Number(foundProduct.size) + 1
          : Math.floor(Math.random() * (25 - 10 + 1) + 10);

      setDiscountPercentage(discount);
    }
  }, [tShartData, id]);

  if (!product) {
    return <p className="text-center mt-10 text-amber-500">Loading...</p>;
  }

  const discountAmount = (product.price * discountPercentage) / 100;
  const discount_price = (product.price - discountAmount).toFixed(2);

  return (
    <div className="bg-amber-50/30 pt-24">
      <div className="max-w-5xl mx-5 md:mx-auto">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Image */}
          <div className="w-full md:w-1/2 bg-white rounded-md shadow">
            <img
              className="w-full h-[500px]  rounded-md"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 space-y-4 text-amber-500">
            <div className="flex items-center gap-2 flex-wrap">
              {product.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="py-1 px-3 bg-amber-50 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <p className="font-semibold">Category: {product.category}</p>
              <p className="font-semibold">Views: {product.review_count}</p>
            </div>
            <h3 className="text-3xl font-semibold">{product.name}</h3>
            <div className="flex items-center gap-6">
              <p className="font-semibold">{product.title}</p>
              <Rating
                style={{ maxWidth: 100 }}
                value={parseInt(product.rating)}
              />
            </div>
            <p>{product.description}</p>

            {/* Price */}
            <div className="flex items-center gap-4 text-lg font-semibold">
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
              <span className="text-amber-600">${discount_price}</span>
              <span className="text-green-600">
                -{discountPercentage.toFixed(2)}%
              </span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="py-2 px-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                >
                  <Minus />
                </button>
                <span className="font-medium">{product.quantity || 1}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="py-2 px-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                >
                  <Plus />
                </button>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="px-8 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-amber-500">
              Related Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => {
                const itemDiscount =
                  typeof item.size === "number"
                    ? Number(item.size) + 1
                    : Math.floor(Math.random() * (25 - 10 + 1) + 10);
                const itemDiscountPrice = (
                  item.price -
                  (item.price * itemDiscount) / 100
                ).toFixed(2);

                return (
                  <div key={item.id} className="bg-white rounded-md shadow p-4">
                    <Link to={`/t-shart/${item.id}`}>
                      <img
                        className="w-full h-[300px]  rounded-md"
                        src={item.image}
                        alt={item.name}
                      />
                    </Link>
                    <h4 className="text-lg font-semibold mt-2 text-amber-500">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 line-through">${item.price}</p>
                    <p className="text-amber-600 font-semibold">
                      ${itemDiscountPrice} ({itemDiscount}%)
                    </p>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-2 w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition"
                    >
                      Add To Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TShartNow;
