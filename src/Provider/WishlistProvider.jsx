import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add an item to the wishlist
  const addToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.id === product.id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  // Remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
