import React from "react";
import star from "../assets/Star 1.png";
const Item = (props) => {
  return (
    <div className="w-90 shadow-lg bg-white p-4  rounded-xl">
      <div className="w-[300px]">
        <img src={props.image} alt="" width="100%" className="rounded-xl" />
      </div>
      <p className="my-2 mx-0 text-xl font-bold">{props.name}</p>
      <div className="flex gap-3 items-center my-4">
        <div className="flex items-center font-bold text-xl ">
          <img src={star} alt="" />
          <p>{props.Rating}</p>
        </div>
        <p className="text-xl">- {props.Lines}</p>
      </div>
      <button
        className="bg-customRed hover:bg-customColor
      py-2 px-20 sm:ml-0 ml-7  md:py-4 md:px-28 text-white font-bold rounded-xl"
      >
        {props.Btn}
      </button>
    </div>
  );
};

export default Item;
