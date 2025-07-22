import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="relative shadow-md sticky top-0 z-50" style={{ backgroundColor: " #E08BCA " }}>
            <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: " #D946B2 " }}></div>
            <div className="max-w-7xl mx-auto px-50 py-2 flex justify-center items-center h-13">
                <div className="space-x-9 hidden md:flex text-sm font-medium ">
                    <Link to="/" className='nav-link text-white'>Home</Link>
                    <Link to="/Orchids" className='nav-link text-white'>Orchids</Link>
                    <Link to="/Contact" className='nav-link text-white'>Contact</Link>
                </div>
            </div>
        </nav >
    );
}