import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  md:flex-row justify-between items-center">
          <div className="hidden mb-6 md:mb-0 items-center space-x-4">
            <div className="w-20 -mt-2">Bollystore</div>
          </div>

          <div className="text-center w-full">
            <p>© {new Date().getFullYear()} Bollystore. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-center">
              <Link to={"/privacy"}>
                <a className="hover:text-white transition duration-300">
                  Privacy
                </a>
              </Link>
              <Link to={"/terms"}>
                <a className="hover:text-white transition duration-300">
                  Terms
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
