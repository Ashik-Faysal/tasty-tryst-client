import React, { useState } from "react";
import OrderCover from "./OrderCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../component/FoodCard";

const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [items] = useMenu();
  const pizzas = items.filter((item) => item.category === "pizza");
 const salads = items.filter((item) => item.category === "salad");
 const soups = items.filter((item) => item.category === "soup");
 const drinks = items.filter((item) => item.category === "drinks");
 const offers = items.filter((item) => item.category === "offered");
 const desserts = items.filter((item) => item.category === "dessert");
  return (
    <>
      <OrderCover />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"text-center"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Offered</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {salads.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {pizzas.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {desserts.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {soups.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {offers.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {drinks.map((item) => (
              <FoodCard key={item._id} products={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default OrderPage;
