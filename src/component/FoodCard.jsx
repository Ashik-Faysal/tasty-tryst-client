
const FoodCard = ({ products }) => {
  const {_id, image,  name, price, recipe } = products;
  return (
    
      <div className="text-center px-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 h-full hover:bg-slate-200">
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <img
              src={image}
              alt={name}
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600">${price}</p>
          <p>{recipe}</p>
          <button className="mt-8 hover:bg-[#1F2937] border-b-2  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
            Add to Cart
          </button>
        </div>
      </div>
  );
};

export default FoodCard;
