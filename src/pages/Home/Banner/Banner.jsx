import React from 'react';
import bannerIMG from "../../../assets/banner.jpg"
const Banner = () => {
    return (
        <div className='-mt-20'>
            <div className='flex flex-col justify-center items-center text-white bg-[#9538E2] h-[694px] space-y-5 rounded-3xl'>
                <h1 className='text-6xl font-bold w-[ 1120px] text-center'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='btn rounded-3xl bg-white'>Shop Now</button>
            </div>
            <div className='w-2/3 mx-auto rounded-3xl border-[24px] -mt-44'>
                <img className='' src={bannerIMG} />
            </div>
        </div>
    );
};

export default Banner;