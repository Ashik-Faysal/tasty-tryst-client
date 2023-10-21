import React from "react";
import { Helmet } from "react-helmet-async";
import CoverPage from "./CoverPage";
import TodaysOffer from "./TodaysOffer";
import DessertPage from "./DessertPage";
import PizzaMenu from "./PizzaMenu";
import SaladsMenu from "./SaladsMenu";
import SoupMenu from "./SoupMenu";

const MenuPages = () => {
  return (
    <div>
      <Helmet>
        <title>Tasty Tryst | Menu</title>
      </Helmet>
      <>
        <CoverPage />
        <TodaysOffer />
        <DessertPage />
        <PizzaMenu />
        <SaladsMenu/>
        <SoupMenu/>
      </>
    </div>
  );
};

export default MenuPages;
