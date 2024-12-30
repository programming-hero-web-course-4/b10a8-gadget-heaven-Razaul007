import { useLoaderData, useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";
// import data from "../data/products.json"; // Assume JSON data is stored here
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailPage = () => {


    const { id } = useParams(); // Get the product ID from the route
    const data = useLoaderData();
    console.log(data);
    const product = data.find(product => product.id === parseInt(id));
    console.log(product, id)
    //   const { addToCart } = useContext(CartContext); // Cart context function
    //   const { addToWishlist, isInWishlist } = useContext(WishlistContext); // Wishlist functions
    //   const [wishlistDisabled, setWishlistDisabled] = useState(isInWishlist(product.id));

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Item added to cart!");
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast.info("Item added to wishlist!");
        setWishlistDisabled(true);
    };

    return (
        <div>
            <div className="flex flex-col pt-20 items-center bg-purple-700 h-[463px] text-white space-y-5">
                <h1 className="text-2xl font-bold">Product Details</h1>
                <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            </div>
            <div className="detail-page flex flex-col justify-center items-center rounded-xl -mt-52">

                <ToastContainer />
                <div className="detail-container space-y-5 flex gap-5 bg-base-300 p-5 rounded-3xl border-[16px] ">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="detail-image rounded-2xl"
                    />
                    <div className="detail-info">
                        <h1 className="text-xl font-bold">{product.title}</h1>
                        <p>{product.description}</p>
                        <h2 className=" font-bold">Price: ${product.price}</h2>
                        <p>Category: {product.category}</p>
                        <p>
                            <strong>Availability: </strong>
                            {product.availability ? "In Stock" : "Out of Stock"}
                        </p>
                        <div className="specifications">
                            <h3>Specifications:</h3>
                            <ul>
                                {product.Specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                        <p>
                            <strong>Rating: </strong>
                            {product.rating} ⭐
                        </p>
                        <div className="actions">
                            <button
                                //   onClick={handleAddToCart}
                                className="btn add-to-cart"
                            //   disabled={!product.availability}
                            >
                                Add to Cart 🛒
                            </button>
                            <button
                                //   onClick={handleAddToWishlist}
                                className="btn add-to-wishlist"
                            //   disabled={wishlistDisabled}
                            >
                                ♥ Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
