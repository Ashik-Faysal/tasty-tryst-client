import PizzaCover from "./PizzaCover";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";



const PizzaMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "pizza");

  return (
    <section className="my-8">
      <PizzaCover />
      {/* <SectionTitle heading="Today's" subHeading="Don't Miss" /> */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="hover:bg-[#1F2937] border-b-4 hover:border-b-4 flex w-60 mx-auto  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
        Ordered Your Favorite food
      </button>
    </section>
  );
};

export default PizzaMenu;
