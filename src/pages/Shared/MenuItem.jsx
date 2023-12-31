
const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='md:flex  space-x-2 m-6 p-4'>
            <img style={{borderRadius:"0 200px 200px 200px"}}
            className='w-[100px]'    src={image} alt={name} />
            <div>
                <h3 className='uppercase my-2'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>

        </div>
    );
};

export default MenuItem;