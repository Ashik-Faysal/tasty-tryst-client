import React, { useState } from "react";
import OrderCover from "./OrderCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
   
          <>
      <OrderCover />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      
    </>
  );
};

export default OrderPage;
