import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const { firmName } = useParams();

  const dummyProducts = [
    {
      id: 1,
      productName: "Spicy Paneer Pizza",
      price: 299,
      description: "Delicious pizza topped with spicy paneer and fresh veggies.",
      image: "/images/pizza.jpg",
    },
    {
      id: 2,
      productName: "Cheesy Garlic Bread",
      price: 149,
      description: "Crispy garlic bread loaded with cheese and herbs.",
      image: "/images/garlicbread.jpg",
    },
    {
      id: 3,
      productName: "Chocolate Brownie",
      price: 199,
      description: "Rich and gooey chocolate brownie topped with nuts.",
      image: "/images/brownie.jpg",
    },
  ];

  return (
    <>
      <TopBar />
      <section className="w-full bg-gray-100 py-10 px-5">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">{firmName}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
              <div className="rounded-lg overflow-hidden">
                <img src={item.image} alt={item.productName} className="w-full h-40 object-cover" />
              </div>
              <div className="mt-2">
                <h4 className="text-lg font-semibold text-gray-800">{item.productName}</h4>
                <p className="text-sm text-gray-600">₹{item.price}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">ADD</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductMenu;
