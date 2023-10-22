import MenuItem from "../Shared/MenuItem";
import SoupCover from "./SoupCover";
import useMenu from "../../hooks/useMenu";

const SoupMenu = () => {
  const [menu] = useMenu();
  const soups = menu.filter(item => item.category === "soup");
  return (
    <section className="my-8">
      <SoupCover />
     
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {soups.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="hover:bg-[#1F2937] border-b-4 hover:border-b-4 flex w-60 mx-auto  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
        Ordered Your Favorite food
      </button>
    </section>
  );
};

export default SoupMenu;
