import React from "react";

const TitleSection = () => {
  return (
    <div
      className="md:h-[60vh] bg-cover bg-center flex items-center justify-center my-8"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/m8vM71G/pexels-piotr-arnoldes-6025811.jpg")',
      }}
    >
      <div className="text-center text-white bg-stone-400 w-4/5 md:w-3/5 p-2 bg-opacity-40 rounded-2xl md:p-8">
        <h1 className="text-4xl font-bold pb-4">
          Tasty Tryst
        </h1>
        <p>
          Tasty Tryst is a renowned restaurant that tantalizes your taste buds
          with an exquisite array of delectable dishes. Our culinary creations
          are crafted with a blend of passion and innovation, offering a
          delightful dining experience. From mouthwatering appetizers to
          sumptuous main courses and heavenly desserts, Tasty Tryst is a
          culinary journey that promises to satisfy your cravings and leave you
          craving for more
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
