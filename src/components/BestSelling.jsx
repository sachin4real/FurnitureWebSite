import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import ProductCard from "./ProductCard";

const products = [
  { name: "Sakarias Armchair", price: 392, image: "/d5a3f321bac85cc737d261d2e07c33af6757be12.png", category: "Chair" },
  { name: "Baltsar Chair", price: 299, image: "/6012e7074ba9207a7e0e984fcbf663c8bb31a920.png", category: "Chair" },
  { name: "Anjay Chair", price: 519, image: "/333e98550db048b910838e0964b74d6c4f5e3527.png", category: "Chair" },
  { name: "Nyantuy Chair", price: 921, image: "/72b45d5c11068dab5ec5316fcbdb57fa2468c3bd.png", category: "Chair" },
  { name: "Luxury Bed", price: 680, image: "/bed1.png", category: "Beds" },
  { name: "Modern Sofa", price: 450, image: "/sofa1.png", category: "Sofa" },
  { name: "Elegant Lamp", price: 120, image: "/lamp1.png", category: "Lamp" },
];

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const BestSelling = () => {
  const [activeCategory, setActiveCategory] = useState("Chair");

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="bg-gray-50 py-20 px-6">
      {/* Section Heading */}
      <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-black">
        Best Selling Product
      </h3>

      {/* Pill Filter Bar */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-[#F7F7F7] px-2 py-1 rounded-full space-x-1">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === item
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid with Arrows */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center z-10">
          <FiArrowLeft />
        </button>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((prod, idx) => (
            <ProductCard
              key={idx}
              name={prod.name}
              price={prod.price}
              image={prod.image}
              type={prod.category}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center z-10">
          <FiArrowRight />
        </button>
      </div>

      {/* View All */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-orange-500 text-sm font-medium inline-flex items-center"
        >
          View All <FiArrowRightCircle className="ml-1" />
        </a>
      </div>
    </section>
  );
};

export default BestSelling;
