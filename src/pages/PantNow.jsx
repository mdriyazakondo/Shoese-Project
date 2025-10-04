import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Minus, Plus } from "lucide-react";

const PantNow = () => {
  const [product, setProduct] = useState(null);
  const [filteProductData, setFilteProductData] = useState([]);
  const { id } = useParams();
  const { pantData, addToCart, decreaseQuantity } = useContext(ProductsContext);

  useEffect(() => {
    const foundProduct = pantData.find((item) => item.id === Number(id));
    setProduct(foundProduct);

    if (foundProduct) {
      const releted = pantData.filter(
        (item) =>
          item.category === foundProduct.category && item.id !== foundProduct.id
      );
      setFilteProductData(releted);
    }
  }, [pantData, id]);

  if (!product) {
    return <p className="text-center mt-10 text-amber-500">Loading...</p>;
  }

  const {
    image,
    title,
    name,
    price,
    color,
    size,
    category,
    description,
    rating,
    tags,
    review_count,
    id: productId,
  } = product;

  const totalPrice = parseInt((price * (Number(size) + 1)) / 100);
  const discount_price = price - totalPrice;

  return (
    <div className="bg-amber-50/30 pt-24 ">
      <div className="max-w-5xl mx-5 md:mx-auto">
        <div className=" flex items-center gap-0 md:gap-20 md:flex-row flex-col space-y-8">
          <div className="w-full md:w-1/2 bg-white rounded-md shadow">
            <img className="w-full h-[500px] rounded-md" src={image} alt="" />
          </div>
          <div className="full md:w-1/2 space-y-2 text-amber-500">
            <div className="flex items-center gap-2">
              {tags.slice(0, 4).map((item, index) => (
                <h4
                  className="py-2 px-4 bg-amber-50 text-amber-500 rounded-full flex"
                  key={index}
                >
                  #{item}
                </h4>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <p className="font-semibold text-xl">Category: {category}</p>
              <p className="font-semibold">Views: {review_count}</p>
            </div>
            <h3 className="text-3xl text-amber-500 font-semibold">{name}</h3>
            <div className="flex items-center gap-10">
              <p className="font-semibold">{title}</p>
              <Rating style={{ maxWidth: 100 }} value={parseInt(rating)} />
            </div>
            <p className="font-semibold">{description}</p>
            <div className="flex items-center gap-2">
              Price: <p className="font-semibold line-through"> ${price}</p>
              <p className="font-semibold">${discount_price}</p>
            </div>
            <div className="flex items-center  gap-20">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                >
                  <Plus />
                </button>
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                >
                  <Minus />
                </button>
              </div>
              <div>
                <button
                  onClick={() => addToCart(product)}
                  className="px-8 py-2 bg-amber-600 text-white rounded-full cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
          {filteProductData.map((items) => (
            <div key={items.id} className="bg-white rounded-md shadow p-4">
              <div className="flex items-center justify-center">
                <Link to={`/cart/${items.id}`}>
                  <img
                    className="w-[200px] h-[200px]"
                    src={items.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="text-amber-500 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-xl">Category: {category}</p>
                  <p className="font-semibold">Views: {review_count}</p>
                </div>
                <h3 className="text-xl text-amber-500 font-semibold">{name}</h3>
                <div className="flex items-center justify-between ">
                  <p className="font-semibold">Title: {title}</p>
                  <Rating style={{ maxWidth: 100 }} value={parseInt(rating)} />
                </div>
                <h2 className="text-xl font-semibold ">{items.name}</h2>
                <div className="flex items-center  gap-10 mt-5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                    >
                      <Plus />
                    </button>
                    <button
                      onClick={() => decreaseQuantity(product)}
                      className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                    >
                      <Minus />
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-8 py-2 bg-amber-600 text-white rounded-full cursor-pointer"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PantNow;
