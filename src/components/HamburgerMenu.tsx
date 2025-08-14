import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 600); // Wait for closing animation to complete
  };

  const closeMenu = () => {
    handleClose();
  };

  return (
    <>
      {/* Logo - Only visible when at top of page */}
      <div className={`fixed top-10 left-6 z-50 transition-opacity duration-300 ${
        isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}>
        <Link 
          to="/" 
          onClick={() => {
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
          className={`text-2xl md:text-3xl font-bold hover:opacity-80 transition-opacity ${
            location.pathname === '/contact' ? 'text-white' : 'text-black'
          }`}
        >
          ENP Brands
        </Link>
      </div>

      {/* Hamburger Button - Moves with scroll only on home page */}
      <button
        onClick={toggleMenu}
        className={`fixed right-6 z-50 w-16 h-16 flex flex-col items-center justify-center space-y-1.5 bg-transparent hover:bg-white/10 transition-all duration-300 rounded-lg ${
          location.pathname === '/' && isScrolled ? 'top-6' : 'top-10'
        }`}
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <>
            <span className={`w-8 h-0.5 block transition-all duration-300 ${
              location.pathname === '/contact' ? 'bg-white' : 'bg-black'
            }`}></span>
            <span className={`w-8 h-0.5 block transition-all duration-300 ${
              location.pathname === '/contact' ? 'bg-white' : 'bg-black'
            }`}></span>
            <span className={`w-8 h-0.5 block transition-all duration-300 ${
              location.pathname === '/contact' ? 'bg-white' : 'bg-black'
            }`}></span>
          </>
        ) : (
          <X className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <nav className="text-center">
            <ul className="space-y-8">
              {menuItems.map((item, index) => {
                const openDelay = index * 0.1;
                const closeDelay = isClosing ? (menuItems.length - 1 - index) * 0.1 : 0;
                
                return (
                  <li 
                    key={item.name} 
                    className={`transition-all duration-300 ${
                      isClosing 
                        ? 'animate-fade-out' 
                        : isOpen 
                          ? 'animate-fade-in' 
                          : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: isClosing ? `${closeDelay}s` : `${openDelay}s`,
                      animationFillMode: 'both'
                    }}
                  >
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
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
};

export default HamburgerMenu;