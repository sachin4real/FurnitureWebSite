import { FiPlus } from "react-icons/fi";

const ProductCard = ({ image, name, price, type = "Chair" }) => {
  return (
    <div className="bg-white rounded-xl p-5 text-left shadow-sm hover:shadow-lg transition">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Product Info */}
      <p className="text-xs text-gray-400">{type}</p>
      <h4 className="font-semibold text-sm text-black mb-1">{name}</h4>
      <div className="text-orange-400 text-sm mb-2">★★★★★</div>

      {/* Price and Action */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">${price}</p>
        <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
