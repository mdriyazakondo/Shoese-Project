import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Minus, Plus } from "lucide-react";

const Carts = () => {
  const { carts, addToCart, decreaseQuantity, removeProductsItem } =
    useContext(ProductsContext);

  // Total price calculation
  const totalPrice = carts.reduce(
    (total, item) => total + item.discount_price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center px-5 md:px-0">
      {carts.length > 0 ? (
        <div className="space-y-6">
          {carts.map((cart, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between px-4 py-4 shadow rounded-md gap-4 md:gap-2"
            >
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src={cart.image}
                alt={cart.name}
              />
              <h4 className="font-semibold text-gray-700">{cart.name}</h4>
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400">
                  ${cart.price}
                </span>
                <span className="text-amber-400 font-semibold">
                  ${cart.discount_price}
                </span>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(cart)}
                    className="py-1 cursor-pointer px-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-medium">{cart.quantity}</span>
                  <button
                    onClick={() => addToCart(cart)}
                    className="py-1 cursor-pointer px-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeProductsItem(cart.id)}
                  className="bg-red-500 cursor-pointer text-white font-semibold rounded-md py-2 px-4 hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex items-center justify-end gap-5 mt-6">
            <p className="text-2xl font-semibold text-gray-700">Total:</p>
            <p className="text-2xl font-bold text-amber-400">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any products yet.
          </p>
          <a
            href="/shop"
            className="bg-amber-400 text-white py-2 px-6 rounded-md hover:bg-amber-500 transition"
          >
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Carts;
