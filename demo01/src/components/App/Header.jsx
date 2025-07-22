import React, { useContext } from 'react';

const Header = () => {
  return (
    <nav className="shadow-md px-6 py-4 flex justify-between items-center" style={{ backgroundColor: " #F5F1EB " }}>
      <h1 className="text-2xl font-bold text-purple-600" style={{ color: " #FD5C78 " }}>🌸Orchid Garden </h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#" className="text-black-500" style={{ color: " #FD5C78 ", textDecoration: "none" }} >Login</a></li>
        <li><a href="#" className="text-black-500" style={{ color: " #FD5C78 ", textDecoration: "none" }} >Register</a></li>
      </ul>
    </nav>
  );
};

export default Header;