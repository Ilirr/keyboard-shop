import React from 'react';
import {keyboards} from '../data';
import {Product} from "../components/Product.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Explore Our Keyboards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {keyboards.map(keyboard => (
                    <Product key={keyboard.id} {...keyboard} />
                ))}
            </div>
        </div>
    </div>
);
};