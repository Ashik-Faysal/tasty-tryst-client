import { ToastContainer, toast } from "react-toastify";

const FoodCard = ({ products }) => {
  const { _id, image, name, price, recipe } = products;

  const addToCart = () => {
    // Retrieve the current cart from local storage or initialize an empty cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isProductInCart = cart.some((product) => product._id === _id);

    if (isProductInCart) {
      // Show an alert or toast indicating that the product is already in the cart
      toast.info(`${name} is already in your cart!`);
    } else {
      // Add the product to the cart
      cart.push(products);

      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Show a toast message to confirm that the product has been added to the cart
      toast.success(`${name} has been added to your cart!`);
    }
  };

  return (
    <div className="text-center px-4 mb-8">
      <div className="bg-white rounded-lg shadow-2xl p-4 h-full relative">
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <img src={image} alt={name} className="object-cover rounded-lg" />
        </div>
        <h6 className="text-xl absolute top-8  right-8 bg-amber-950 text-gray-100 p-2 rounded-md">
          ${price}
        </h6>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p>{recipe}</p>
        <button
          className="mt-8 hover-bg-[#1F2937] border-b-4 px-4 py-2 rounded-lg hover-text-white border-orange-600 hover:bg-black hover:text-white"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodCard;
