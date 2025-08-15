import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#8BC53F] shadow-lg" : "bg-[#5E8526]"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-xl font-bold hover:text-indigo-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="300"
                height="100"
                viewBox="0 0 300 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <!-- Background (optional gradient) --> */}
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" />
                    <stop
                      offset="100%"
                      style={{stopColor:"#4ECDC4", stopOpacity:1}}
                    />
                  </linearGradient>
                </defs>

                {/* <!-- Bollystore Text (Stylish & Elegant) --> */}
                <text
                  x="20"
                  y="60"
                  font-family="'Montserrat', sans-serif"
                  font-size="40"
                  font-weight="600"
                  fill="url(#gradient)"
                >
                  Bollystore
                </text>

                {/* <!-- Optional Decorative Line --> */}
                <line
                  x1="20"
                  y1="70"
                  x2="280"
                  y2="70"
                  stroke="url(#gradient)"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                {/* <!-- Optional Tagline (smaller text) --> */}
                <text
                  x="20"
                  y="85"
                  font-family="'Montserrat', sans-serif"
                  font-size="12"
                  fill="#4B0082"
                >
                  Fashion | Lifestyle | Elegance
                </text>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-200 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-indigo-200 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            {/* <Link 
              to="/products" 
              className="hover:text-indigo-200 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Products
            </Link> */}
            <Link
              to="/deals"
              className="hover:text-indigo-200 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Deals
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-200 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-200 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="h-[1000px] md:hidden mt-4 space-y-3 pb-3">
            <Link
              to="/"
              className="text-amber-400 block py-2 hover:text-indigo-200 transition-colors"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            {/* <Link 
              to="/products" 
              className="block py-2 hover:text-indigo-200 transition-colors"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Products
            </Link> */}
            <Link
              to="/deals"
              className="text-amber-400 block py-2 hover:text-indigo-200 transition-colors"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Deals
            </Link>
            <Link
              to="/about"
              className="text-amber-400 block py-2 hover:text-indigo-200 transition-colors"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-amber-400 block py-2 hover:text-indigo-200 transition-colors"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
