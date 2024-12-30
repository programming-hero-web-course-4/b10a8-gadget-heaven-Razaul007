import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <div>
            <div className="player-card p-5 space-y-2 rounded-2xl border-[12px]">
                <img className="h-[181px] w-full rounded-xl object-cover" src={product.image} alt="" />
                <h3 className="text-xl font-bold">{product.title}</h3>
                 <p>Price: {product.price}$</p>
                 <Link to={`/details/${product.id}`} className='rounded-3xl bg-white text-purple-600 border border-purple-700 p-1'>View Details</Link >
            </div>
        </div>
    );
};

export default ProductCard;