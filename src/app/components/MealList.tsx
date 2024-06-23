import { Meal } from "@/interface";
import React from "react";

interface Props {
  data: Meal[];
}

const ItemList: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className=" mt-3 p-5 ">
        {data.map((item) => (
          <div
            className=" w-full rounded-md mt-2 bg-[#713f12] text-white "
            key={item.id}
          >
            <div className=" p-2">
              <h2 className=" font-semibold">{item.name}</h2>
              <p className=" font-thin">{item.descricao}</p>
              <p className=" font-semibold">R$ {item.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
