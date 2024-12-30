import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>

            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;