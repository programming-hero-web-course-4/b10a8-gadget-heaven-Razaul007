import React, { useContext, useState } from "react";
import { CartContext } from "../../Provider/CartProvider";
import { WishlistContext } from "../../Provider/WishlistProvider";

const Dashboard = () => {
  const { cartItems, removeFromCart, calculateTotalPrice } = useContext(CartContext);
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const [activeTab, setActiveTab] = useState("cart");

  const sortByPriceDescending = () => {
    cartItems.sort((a, b) => b.price - a.price);
  };
  console.log(sortByPriceDescending)

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="tabs mb-4 gap-2 w-1/4 flex items-center">
        <button 
          className={`tab tab-bordered btn btn-primary ${activeTab === "cart" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
        <button
          className={`tab tab-bordered btn btn-ghost ${activeTab === "wishlist" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist
        </button>
      </div>

      {/* Cart Tab */}
      {activeTab === "cart" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          {cartItems.length > 0 ? (
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="border p-4 rounded shadow">
                    <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-error btn-sm mt-2"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-bold">Total Price: ${calculateTotalPrice()}</h3>
                <button onClick={sortByPriceDescending} className="btn btn-primary mt-2">
                  Sort by Price
                </button>
              </div>
            </div>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      )}

      {/* Wishlist Tab */}
      {activeTab === "wishlist" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
          {wishlistItems.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistItems.map((item) => (
                <li key={item.id} className="border p-4 rounded shadow">
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price}</p>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="btn btn-error btn-sm mt-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the wishlist.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
