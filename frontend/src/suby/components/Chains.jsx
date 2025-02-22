import React, { useState } from "react";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chains = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({ left: gallery.scrollLeft - scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      gallery.scrollTo({ left: gallery.scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  const dummyVendors = [
    { id: 1, name: "Food Express", image: "/images/food1.jpg" },
    { id: 2, name: "Tasty Treats", image: "/images/food2.jpg" },
    { id: 3, name: "Spice Delight", image: "/images/food3.jpg" },
    { id: 4, name: "Healthy Bites", image: "/images/food4.jpg" },
    { id: 5, name: "Gourmet Hub", image: "/images/food5.jpg" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Top Restaurant Chains in Hyderabad</h3>
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-gray-900 hover:scale-110 transition-all"
          onClick={() => handleScroll("left")}
        >
          <FaRegArrowAltCircleLeft size={30} />
        </button>

        <section
          id="chainGallery"
          className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6 p-4 bg-white rounded-lg shadow-md"
        >
          {dummyVendors.map((vendor) => (
            <Link
              key={vendor.id}
              to={`/products/${vendor.id}/${vendor.name}`}
              className="min-w-[200px] bg-white rounded-lg shadow-lg p-3 hover:scale-105 transition-transform"
            >
              <div className="rounded-lg overflow-hidden">
                <img src={vendor.image} alt={vendor.name} className="w-full h-40 object-cover" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 text-center mt-2">{vendor.name}</h4>
            </Link>
          ))}
        </section>

        <button
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-gray-900 hover:scale-110 transition-all"
          onClick={() => handleScroll("right")}
        >
          <FaRegArrowAltCircleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Chains;
