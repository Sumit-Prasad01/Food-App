import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  const dummyFirms = [
    {
      id: 1,
      name: "Spice House",
      image: "/images/spicehouse.jpg",
      offer: "20% Off",
      region: ["south-indian"],
      area: "Banjara Hills"
    },
    {
      id: 2,
      name: "North Feast",
      image: "/images/northfeast.jpg",
      offer: "15% Off",
      region: ["north-indian"],
      area: "Hitech City"
    },
    {
      id: 3,
      name: "Dragon Bites",
      image: "/images/dragonbites.jpg",
      offer: "10% Off",
      region: ["chinese"],
      area: "Madhapur"
    },
    {
      id: 4,
      name: "Sweet Treats",
      image: "/images/sweettreats.jpg",
      offer: "25% Off",
      region: ["bakery"],
      area: "Jubilee Hills"
    }
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Restaurants with Online Food Delivery in Hyderabad</h3>
      <div className="flex justify-center space-x-3 mb-6">
        <button onClick={() => filterHandler("All", "all")} className={`px-4 py-2 rounded-lg ${activeCategory === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>All</button>
        <button onClick={() => filterHandler("South-Indian", "south-indian")} className={`px-4 py-2 rounded-lg ${activeCategory === "south-indian" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>South-Indian</button>
        <button onClick={() => filterHandler("North-Indian", "north-indian")} className={`px-4 py-2 rounded-lg ${activeCategory === "north-indian" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>North-Indian</button>
        <button onClick={() => filterHandler("Chinese", "chinese")} className={`px-4 py-2 rounded-lg ${activeCategory === "chinese" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>Chinese</button>
        <button onClick={() => filterHandler("Bakery", "bakery")} className={`px-4 py-2 rounded-lg ${activeCategory === "bakery" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>Bakery</button>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyFirms.map((item) => {
          if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
            return (
              <Link to={`/products/${item.id}/${item.name}`} className="block bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform" key={item.id}>
                <div className="rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.region.join(", ")}</p>
                  <p className="text-sm text-gray-600">{item.area}</p>
                  <span className="block mt-1 text-blue-500 font-bold">{item.offer}</span>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
};

export default FirmCollections;
