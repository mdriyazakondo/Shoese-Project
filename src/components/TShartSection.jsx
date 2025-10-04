import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const TShartSection = ({ item }) => {
  const { addToCart } = useContext(ProductsContext);
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
    details,
    tags,
    review_count,
  } = item;

  const discount = Math.random() * (25 - 10 + 1) + 10;

  const discountPercentage =
    typeof size === "number" ? Number(size) + 1 : discount;

  const totalPrice = parseInt((price * discountPercentage) / 100);
  const discount_price = price - totalPrice;

  return (
    <div className="shadow rounded-md  relative bg-white scale-96 cursor-pointer hover:scale-100">
      <p className="absolute right-2 top-2 text-amber-400 px-2 py-1 bg-amber-100 rounded-full ">
        {typeof size === "number"
          ? `${(size + 1).toFixed(2)}%`
          : `${discount.toFixed(2)}%`}
      </p>
      <div className="p-5">
        <div className="px-5">
          <img className="w-full h-[300px] bg-white " src={image} alt="" />
        </div>
        <div className="space-y-2">
          {/* <h1 className="text-5xl font-semibold text-amber-500 text-center">
            {item.id}
          </h1> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              {tags.slice(0, 2).map((tag, index) => (
                <p
                  className="bg-amber-50 rounded-full px-4 py-1.5  text-amber-400"
                  key={index}
                >
                  # {tag}
                </p>
              ))}
            </div>
            <p className="text-amber-400 font-semibold">
              Views: {parseInt(review_count).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between text-amber-500">
            <p>Category: {category}</p>
            <div>
              <Rating style={{ maxWidth: 100 }} value={parseInt(rating)} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-amber-500">{name}</h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-amber-400">{title}</p>
            <p className="font-semibold text-amber-400 bg-amber-100 rounded-full px-3 py-1">
              {color}
            </p>
          </div>
          <p className="font-semibold text-amber-400">{description}.....</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center text-amber-600">
              <span>Price: </span>
              <p className="line-through">${price.toFixed(2)}</p>
              <p>${discount_price.toFixed(2)}</p>
            </div>
            <p className="text-amber-600 font-semibold">Size: {size}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-6">
        <Link
          to={`/t-shart/${item.id}`}
          className="px-8 py-2 bg-amber-600 cursor-pointer text-white font-semibold rounded-full"
        >
          By Now
        </Link>
        <button
          className="px-8 py-2 bg-amber-600 cursor-pointer text-white font-semibold rounded-full"
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default TShartSection;
