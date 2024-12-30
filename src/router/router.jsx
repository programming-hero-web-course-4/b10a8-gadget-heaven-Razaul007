import React from 'react';
import { createBrowserRouter, } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';
import Dashboard from '../pages/Dashboard/Dashboard';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DetailPage from '../pages/DetailPage/DetailPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/statistics",
                element: <Statistics/>
            },
            {
                path:"/dashboard",
                element: <Dashboard/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/details/:id",
                element:<DetailPage/>,
                loader: ()=>fetch('/data.json')
            }
        ],
    },
]);
export default router;