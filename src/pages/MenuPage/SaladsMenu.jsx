import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem";
import SaladsCover from "./SaladsCover";
import useMenu from "../../hooks/useMenu";

const SaladsMenu = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  return (
    <section className="my-8">
      <SaladsCover />
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {salads.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="hover:bg-[#1F2937] border-b-4 hover:border-b-4 flex w-60 mx-auto  px-4 py-2 rounded-lg hover:text-white border[#D9D9D9]">
        Ordered Your Favorite food
      </button>
    </section>
  );
};

export default SaladsMenu;
