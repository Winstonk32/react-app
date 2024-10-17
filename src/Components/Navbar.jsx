import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">

        <li><Link to="/" className="hover:text-green-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-300">About</Link></li>
        <li><Link to="/portfolio" className="hover:text-green-300">Portfolio</Link></li>
        <li><Link to="array" className="hover:text-green-300">Array</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
