import React, { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();

const ProductContext = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const productData = async () => {
      try {
        const res = await fetch("/shoese.json");
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    productData();
  }, []);

  const addToCart = (item) => {
    setCarts((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // quantity বাড়ানো হচ্ছে
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // নতুন item add হবে quantity = 1 দিয়ে
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  const decreaseQuantity = (item) => {
    setCarts(
      (prev) =>
        prev
          .map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0) // quantity 0 হলে remove
    );
  };

  const removeProductsItem = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  const values = {
    productsData,
    setProductsData,
    carts,
    setCarts,
    addToCart,
    decreaseQuantity,
    removeProductsItem,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContext;
