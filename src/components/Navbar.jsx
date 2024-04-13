import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Keyboard Store</h1>
                </div>
                <div>
                    <Link to="/" className="px-4 hover:bg-blue-700 rounded">Home</Link>
                    <Link to="/about" className="px-4 hover:bg-blue-700 rounded">About</Link>
                </div>
                <div>
                </div>
            </div>
        </nav>
    );
};