import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-10 right-6 z-50 w-16 h-16 flex flex-col items-center justify-center space-y-1.5 bg-transparent hover:bg-black/5 transition-colors duration-300 rounded-lg"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <>
            <span className="w-8 h-0.5 bg-black block transition-all duration-300"></span>
            <span className="w-8 h-0.5 bg-black block transition-all duration-300"></span>
            <span className="w-8 h-0.5 bg-black block transition-all duration-300"></span>
          </>
        ) : (
          <X className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div className="flex items-center justify-center min-h-screen">
          <nav className="text-center">
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <li key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`text-4xl md:text-6xl font-bold transition-all duration-300 hover:text-gray-300 block ${
                      location.pathname === item.path ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Logo - visible on all pages and even when menu is open */}
      <div className="fixed top-10 left-6 z-50">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          ENP Brands
        </h2>
      </div>
    </>
  );
};

export default HamburgerMenu;