import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const FoodCard = ({ products }) => {
  const { _id, image, name, price, recipe } = products;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const addToCart = products => {
    console.log(products);
    if (user && user.email) {
      const cartItem={menuItemId:_id, name,image, price, recipe, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertId) {
            toast.success("successfully added");
          }
        })
        
    } else {
      navigate("/login");
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
          className="mt-8 border-b-4 px-4 py-2 rounded-lg hover:text-white border-orange-600 hover:bg-black"
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
