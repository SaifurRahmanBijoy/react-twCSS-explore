import React from "react";
import PriceOptions from "../../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Not-Value-based",
        "competition-based",
        "Not-cost-plus",
        "No pricing",
      ],
    },
    {
      id: 2,
      name: "Moderate",
      price: 9.99,
      features: [
        "Value-based",
        "competition-based",
        "Not-cost-plus",
        "dynamic pricing",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 18.99,
      features: [
        "Value-based",
        "competition-based",
        "cost-plus",
        "dynamic pricing",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-slate-700 text-2xl py-3 rounded-md bg-slate-200">
        Best Deals Available Right Now!
      </h2>
      <div className="grid lg:grid-cols-3 gap-3 sm:grid-cols-1">
        {pricingOptions.map((option) => (
          <PriceOptions key={option.id} option={option}></PriceOptions>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
