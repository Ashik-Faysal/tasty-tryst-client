import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/menu")
          .then((response) => response.json())
          .then((data) => {
            const popularItems = data.filter(
              (item) => item.category === "popular"
            );
            setMenu(popularItems);
          });
    },[])
    return (
      <section>
        <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </section>
    );
};

export default PopularMenu;