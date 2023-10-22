import React, { useState } from "react";
import OrderCover from "./OrderCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../component/FoodCard";
import Card from "../Shared/Card"
import { Helmet } from "react-helmet-async";


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
      <Helmet><title>Tasty Tryst | Order</title></Helmet>
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
          <Card item={salads} />
        </TabPanel>
        <TabPanel>
          <Card item={pizzas} />
        </TabPanel>
        <TabPanel>
          <Card item={desserts} />
        </TabPanel>
        <TabPanel>
          <Card item={soups} />
        </TabPanel>
        <TabPanel>
          <Card item={offers} />
        </TabPanel>
        <TabPanel>
         <Card item={drinks}/>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default OrderPage;
