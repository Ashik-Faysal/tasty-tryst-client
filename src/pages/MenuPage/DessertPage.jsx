import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import DessertCover from "./DessertCover";

const DessertPage = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");
        setMenu(popularItems);
      });
  }, []);
  return (
      <section className="my-8">
          <DessertCover />
      <SectionTitle heading="Today's" subHeading="Don't Miss" />
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="hover:bg-[#1F2937] border-b-4 hover:border-b-4 flex w-36 mx-auto  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
        Ordered Your Favorite food
      </button>
    </section>
  );
};

export default DessertPage;
