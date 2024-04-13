import React from 'react';
import {Button} from './Button';
export function Product({ name, price, imageUrl }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {price}
                </p>
                <Button onClick={() => alert('Added to cart!')}>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}