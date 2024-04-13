import React from 'react';
import { useParams } from 'react-router-dom';
import {keyboards} from '../data';

export const ProductPage = () => {
    const { id } = useParams();
    const product = keyboards.find(p => p.id === parseInt(id));

    return product ? (
        <div className="flex flex-col items-center p-4">
            <img src={product.imageUrl} alt={product.name} className="h-40 mb-2" />
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-lg">{product.price}</p>
        </div>
    ) : <p>Product not found!</p>;
};

export default ProductPage;
