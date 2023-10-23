import React from "react";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Helmet>
        <title>Tasty Tryst | MyCart</title>
      </Helmet>
      <div className="uppercase font-bold gap-4 text-center flex items-center justify-center my-4">
        <h3 className="text-2xl">Total Items: {cart.length}</h3>
        <h3 className="text-2xl">Total Price: ${total}</h3>
        <button className="text-white bg-orange-500 rounded-md w-16 text-xl py-1 px-2">
          Pay
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Serial Number</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="p-2 w-8">{index + 1}.</td>
                <td className="p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 rounded-2xl mx-auto"
                  />
                </td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">${item.price}</td>
                <td className="p-2">
                  <button className="text-white bg-red-500 rounded-md px-2 py-1">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
