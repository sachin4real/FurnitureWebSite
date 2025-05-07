import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import CartSidebar from "./CartSidebar"; // Update path as needed

const Header = () => {
  const [active, setActive] = useState("furniture");
  const [isCartOpen, setCartOpen] = useState(false);

  const navLinks = [
    { id: "furniture", label: "Furniture" },
    { id: "shop", label: "Shop" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 text-white bg-transparent">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-extrabold tracking-wide">Panto</div>

          <nav className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`transition duration-300 ${
                  active === link.id
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="relative">
            <FiShoppingCart
              onClick={() => setCartOpen(true)}
              className="text-xl cursor-pointer hover:text-orange-400 transition"
            />
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </header>

      {/* Cart Sidebar and Backdrop */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
