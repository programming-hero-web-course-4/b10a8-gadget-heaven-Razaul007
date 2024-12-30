import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './Provider/CartProvider.jsx'
import { WishlistProvider } from './Provider/WishlistProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
       <WishlistProvider>
       <RouterProvider router={router} />
       </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)
