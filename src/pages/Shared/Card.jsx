import FoodCard from '../../component/FoodCard';

const Card = ({item}) => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {item.map((item) => (
          <FoodCard key={item._id} products={item} />
        ))}
      </div>
    );
};

export default Card;