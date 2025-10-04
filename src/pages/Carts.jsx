import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Minus, Plus } from "lucide-react";

const Carts = () => {
  const { carts, addToCart, decreaseQuantity, removeProductsItem } =
    useContext(ProductsContext);

  console.log(carts);

  const totalPrice = carts.reduce(
    (total, item) => total + item.discount_price * item.quantity,
    0
  );
  return (
    <div className="max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center ">
      <div className=" flex items-center justify-center text-amber-400">
        <div className=" w-full space-y-6">
          {carts.map((cart, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2 shadow rounded-md"
            >
              <img className="w-[100px] h-[100px]" src={cart.image} alt="" />
              <h4>{cart.name}</h4>
              <div className="flex items-center gap-2">
                Price: <p className="line-through">${cart.price}</p>
                <p>${cart.discount_price}</p>
              </div>
              <p>Quantity: ( {parseInt(cart.quantity)} )</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => addToCart(cart)}
                  className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                >
                  <Plus />
                </button>
                <button
                  onClick={() => decreaseQuantity(cart)}
                  className="py-2 px-2 rounded-full bg-amber-100 cursor-pointer"
                >
                  <Minus />
                </button>
              </div>
              <button
                onClick={() => removeProductsItem(cart.id)}
                className="bg-red-500 text-white font-semibold rounded-sm py-2 px-6 cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-5 mt-4">
        <p className="text-2xl font-semibold text-amber-400">Totol Price:</p>
        <p className="font-semibold text-amber-400">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Carts;
