import React from "react";
import Feature from "../Components/Feature/Feature";

const PriceOptions = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-slate-300 m-3 rounded-md p-5">
      <div>
        <h3>
          <span className="text-5xl font-extrabold text-red-400">
            {option.price}
          </span>
          <span className="text-2xl font-bold text-red-500">/Month</span>
        </h3>
        <p className="text-2xl my-2">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-green-600 text-slate-200 w-full py-2 px-5 mt-3 rounded-md font-bold">Buy Now</button>
    </div>
  );
};

export default PriceOptions;
