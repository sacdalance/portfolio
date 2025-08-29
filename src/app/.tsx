import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Your Name</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
