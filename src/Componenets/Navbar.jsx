import React, { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(!isOpen);
  };

  const smoothScroll = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (isOpen) toggleMenu();
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 w-full bg-gray-900 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300 ${
          isOpen ? "h-[calc(100vh-4rem)]" : "h-16"
        }`}
      >
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="text-xl lg:text-4xl font-bold text-green-400">
              Muhammad Sohaib Raza
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" onClick={smoothScroll('home')} className="hover:text-green-400 text-white">
                Home
              </a>
              <a href="#about" onClick={smoothScroll('about')} className="hover:text-green-400 text-white">
                About Me
              </a>
              <a href="#projects" onClick={smoothScroll('projects')} className="hover:text-green-400 text-white">
                Projects
              </a>
              <a href="#skills" onClick={smoothScroll('skills')} className="hover:text-green-400 text-white">
                Skills
              </a>
              <a href="#contact" onClick={smoothScroll('contact')} className="hover:text-green-400 text-white">
                Contact
              </a>
            </div>

            {/* Hamburger/Close Icon for Mobile */}
            <div
              className="md:hidden cursor-pointer z-50"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="text-white h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <AlignJustify className="text-white h-6 w-6 transition-transform duration-300" />
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex flex-col mt-6 space-y-6 text-center">
              <a
                href="#home"
                onClick={smoothScroll('home')}
                className="text-white hover:text-green-400 transition-colors duration-200 py-2"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={smoothScroll('about')}
                className="text-white hover:text-green-400 transition-colors duration-200 py-2"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={smoothScroll('projects')}
                className="text-white hover:text-green-400 transition-colors duration-200 py-2"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={smoothScroll('skills')}
                className="text-white hover:text-green-400 transition-colors duration-200 py-2"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={smoothScroll('contact')}
                className="text-white hover:text-green-400 transition-colors duration-200 py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;