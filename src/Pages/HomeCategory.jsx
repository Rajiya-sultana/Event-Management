import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import drop_down from "../assets/down.png";
import Item from "../Components/Item";

const HomeCategory = (props) => {
  const { all_product } = useContext(HomeContext);
  return (
    <div className="p-9 sm:p-4">
      <div className="flex justify-between items-center flex-wrap md:my-0 md:mx-44">
        {/* <p>
          <span className="font-bold">showing 1 to 12</span> out of 36 products
        </p> */}
        {/* <div className="flex items-center gap-1 py-1 px-3 sm:py-2 sm:px-5 border-2 border-gray-400 rounded-[40px]">
          Sort by <img src={drop_down} width="20px" alt="sort dropdown" />
        </div> */}
      </div>

      <div className="my-5 mx-28 flex flex-wrap gap-4 justify-center sm:mx-4 sm:gap-2">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                className
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                Rating={item.Rating}
                Lines={item.Lines}
                Btn={item.Btn}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div
        className="flex justify-center items-center my-12
       mx-auto w-56 h-16 rounded-[75px] bg-gray-500 text-white font-bold text-lg"
      >
        Explore More
      </div>
    </div>
  );
};

export default HomeCategory;
