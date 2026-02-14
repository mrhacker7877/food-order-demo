import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);

  return (
    <div className="w-full max-w-[280px] h-[360px] bg-white p-3 rounded-xl flex flex-col gap-2 shadow-md mx-auto hover:border-2 border-green-300">

      <div className="w-full h-[55%] overflow-hidden rounded-lg bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="text-lg font-semibold truncate">{name}</div>

      <div className="w-full flex items-center justify-between">
        <div className="text-base font-semibold text-green-600">
          Rs {price}/-
        </div>
        <div className="text-sm">{type}</div>
      </div>

      <button
        className="mt-auto w-full p-2 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all"
        onClick={() => {
          const exist = items.find(item => item.id === id);

          if (exist) {
            toast.error(`${name} already exists`, {
              style: {
                background: "#fee2e2",
                color: "#b91c1c"
              }
            });
          } else {
            dispatch(AddItem({ id, name, price, image }));
            toast.success(`${name} added to cart`, {
              style: {
                background: "#dcfce7",
                color: "#166534"
              }
            });
          }
        }}
      >
        Add dish
      </button>
    </div>
  );
}

export default Card;
