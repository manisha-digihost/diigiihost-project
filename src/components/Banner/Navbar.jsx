import { useState } from "react";
import Logo from "../../icons/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container w-full  text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

         <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer">About Us</li>
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer">Talent Transformation</li>
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer">Learning & Development</li>
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer">Blogs</li>
          <li className="hover:text-orange-500 hover:border-b-2 border-orange-500 cursor-pointer"> <span>+971 52 141 2629</span></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H25M5.5 10H25M10 19H25" stroke="url(#paint0_linear_474_67)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_474_67" x1="13" y1="1" x2="13" y2="87.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D00"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          </defs>
          </svg>

        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#home" className="block text-white  hover:text-orange-500">Home</a>
          <a href="#about" className="block text-white hover:text-orange-500">About Us</a>
          <a href="#services" className="block text-white hover:text-orange-500">Services</a>
          <a href="#contact" className="block text-white hover:text-orange-500">Talent Transformation</a>
          <a href="#contact" className="block text-white hover:text-orange-500">Learning & Development</a>
          <a href="#contact" className="block text-white hover:text-orange-500">Blogs</a>
          <a href="#contact" className="block text-white hover:text-orange-500"><span>+971 52 141 2629</span></a>
        </div>
      )}
    </div>
  );
}