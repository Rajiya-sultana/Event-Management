import React from "react";
import Item from "./Item";
import data_Parties from "../assets/data2";

const PopularSeminar = () => {
  return (
    <div className=" flex flex-col gap-3 items-center p-9">
      <h1 className="text-black md:text-5xl font-bold mt-8 text-2xl">
        POPULAR IN SEMINAR
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
      <hr className="w-[200px] md:w-[600px] h-1  rounded-xl bg-gray-400 mx-auto mt-24" />
    </div>
  );
};

export default PopularSeminar;
