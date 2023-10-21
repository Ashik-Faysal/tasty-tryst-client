import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecommendsSection = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

   const products = [
     {
       id: 1,
       name: "Caprese Salad",
       price: "$19.99",
       imageUrl: "https://i.ibb.co/Bym9tcj/pexels-lisa-fotios-1152237.jpg",
       description: "Tomatoes, mozzarella, basil, olive oil.",
     },
     {
       id: 2,
       name: "Waldorf Salad",
       price: "$29.99",
       imageUrl: "https://i.ibb.co/Bym9tcj/pexels-lisa-fotios-1152237.jpg",
       description: "Apples, celery, walnuts, grapes, mayo.",
     },
     {
       id: 3,
       name: "Greek Salad",
       price: "$39.99",
       imageUrl: "https://i.ibb.co/09Y4Czg/pexels-valeria-boltneva-1833333.jpg",
       description: "Cucumbers, tomatoes, olives, feta, olive oil.",
     },
     {
       id: 4,
       name: "Caesar Salad",
       price: "$49.99",
       imageUrl: "https://i.ibb.co/MkwNdnr/pexels-christel-jensen-628777.jpg",
       description: "Romaine, croutons, Parmesan, Caesar dressing.",
     },
   ];

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);

    toast.success(`${product.name} has been added to your cart`, {
      position: "top-right",
      autoClose: 3000, // Auto-close the toast after 3 seconds (adjust as needed).
    });
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);

    // Optionally, you can show a confirmation toast for the removal.
    toast.info("Item removed from your cart", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <SectionTitle
        subHeading="Recommended for You"
        heading="CHEF RECOMMENDS"
      />
      <div className="flex flex-wrap bg-[#D9D9D9] py-4 -mx-4 text-center">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              <div className="aspect-w-1 aspect-h-1 mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <p>{product.description}</p>
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  className="mt-8 hover:bg-[#1F2937] border-b-4  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="mt-8 hover:bg-[#1F2937] border-b-2  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}   <button className="hover:bg-[#1F2937] border-b-4 hover:border-b-4 flex w-36 mx-auto  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
              View full menu
            </button>
        <div>
         
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default RecommendsSection;
