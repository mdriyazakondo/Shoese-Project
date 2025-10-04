import React, { useEffect, useState } from "react";

const App = () => {
  const [porducts, setProducts] = useState([]);

  useEffect(() => {
    const productsData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    productsData();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-red-400">hello world</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {porducts.map((product) => {
          console.log(product);
          return (
            <div key={product.id}>
              <img
                className="w-full h-[350px]"
                src={product.images[0]}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
