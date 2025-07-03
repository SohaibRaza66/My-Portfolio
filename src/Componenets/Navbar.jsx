import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={
          "fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300" +
          (isOpen ? " h-[calc(100vh - 4rem)]" : " h-16")
        }
      >
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="text-xl font-bold text-green-400">
              Muhammad Sohaib Raza
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-green-400 text-white">
                Home
              </a>
              <a href="#about" className="hover:text-green-400 text-white">
                About Me
              </a>
              <a href="#projects" className="hover:text-green-400 text-white">
                Projects
              </a>
              <a href="#skills" className="hover:text-green-400 text-white">
                Skills
              </a>
              <a href="#contact" className="hover:text-green-400 text-white">
                Contact
              </a>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AlignJustify className="text-white" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex flex-col mt-6 space-y-6 md:hidden text-center">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
