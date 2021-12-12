import React from "react";
import Card from "./Card";
import pricingData from "../pricing";

const PricingCards = ({ toggleClick }) => {
  const displayCards = () => {
    const data = pricingData;
    return !toggleClick
      ? data.monthly.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              storage={item.storage}
              maxUsers={item.maxUsers}
              dataLimit={item.dataLimit}
            />
          );
        })
      : data.annually.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              storage={item.storage}
              maxUsers={item.maxUsers}
              dataLimit={item.dataLimit}
            />
          );
        });
  };
  return (
    <>
      <div className="pricing-cards">{displayCards()}</div>
    </>
  );
};

export default PricingCards;
