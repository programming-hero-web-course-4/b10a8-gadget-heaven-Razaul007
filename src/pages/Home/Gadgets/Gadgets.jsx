
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';

const Gadgets = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data); 
            })
            
    }, []);

    const handleFilter = (category) => {
        if (category === "all") {
            setFilteredProducts(products); 
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 mt-10 gap-2'>
                <div className='col-span-1'>
                    <div className='flex flex-col gap-2 justify-center p-10'>
                        <button id='all-products' className='btn' onClick={() => handleFilter("all")}>All products</button>
                        <button id='Computers' className='btn' onClick={() => handleFilter("Computers")}>Laptop</button>
                        <button id='phone' className='btn' onClick={() => handleFilter("phone")}>Phone</button>
                        <button id='smart-watch' className='btn' onClick={() => handleFilter("smart-watch")}>Smart Watches</button>
                        <button id='mac-book' className='btn' onClick={() => handleFilter("Accessories")}>Accessories</button>
                        <button id='iPhone' className='btn' onClick={() => handleFilter("iPhone")}>iPhone</button>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h1 className='text-4xl font-bold'>{filteredProducts.length > 0 ? " " : "No products available"}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
