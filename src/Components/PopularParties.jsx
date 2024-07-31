import React from "react";
import Item from "./Item";
import data_Parties from "../assets/data2";

const PopularParties = () => {
  return (
    <div className=" flex flex-col gap-3 items-center p-9">
      <h1 className="text-black md:text-5xl font-bold mt-8 text-2xl">
        POPULAR IN PARTIES
      </h1>
      <hr className=" w-[200px] h-1 sm:h-2 rounded-xl bg-gray-800" />

      <div className="mt-12 flex flex-wrap gap-8  ">
        {data_Parties.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              Rating={item.Rating}
              Lines={item.Lines}
              Btn={item.Btn}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PopularParties;
