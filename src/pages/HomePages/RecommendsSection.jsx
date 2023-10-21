import React from "react";
import SectionTitle from "../Shared/SectionTitle";

const RecommendsSection = () => {
  // Sample product data
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
              <button className="bg-[#D9D9D9] hover:bg-[#1F2937] border-b-2 text-[#BB8506] px-4 py-2 mt-4 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendsSection;
