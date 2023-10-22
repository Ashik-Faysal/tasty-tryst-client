import React from "react";

const OrderCover = () => {
  return (
    <div
      className="md:h-[90vh]
       bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/bHXKJMc/glasses-1477078-1920.jpg")',
      }}
    >
      <div className="text-center text-white bg-stone-700 w-4/5 md:w-3/5 p-2 bg-opacity-40 rounded-2xl md:p-8 py-4">
        <h1 className="text-4xl font-bold pb-4">Our Shop</h1>
        <p className="text-2xl">Would you like try Dish?</p>
      </div>
    </div>
  );
};

export default OrderCover;
