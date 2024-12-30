import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';

const Gadgets = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    console.log(products);

    return (
        <div className=' mt-20'>
            <h1 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 mt-10'>
                <div className='col-span-1'><button className='btn' >All products</button></div>
                <div className='col-span-3'>
                    <h1>All products will show here</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            products.map((product) => <ProductCard key={product.id} product={product}

                            ></ProductCard>)
                        }
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Gadgets;