import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem, IncreaseQty, DecreaseQty } from "../redux/cartSlice";
import toast from "react-hot-toast";

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-3 shadow-lg rounded-xl flex items-center justify-between gap-3">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        
        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Qty */}
        <div className="flex flex-col justify-center gap-3 flex-1 min-w-0">
          
          {/* Name */}
          <div className="text-sm sm:text-base font-semibold text-gray-600 truncate">
            {name}
          </div>

          {/* Qty */}
          <div className="w-[110px] h-[38px] flex border-2 border-green-400 rounded-lg overflow-hidden shadow-md">
            <button
              onClick={() => dispatch(DecreaseQty(id))}
              className="w-1/3 flex items-center justify-center bg-white text-green-500 hover:bg-gray-200"
            >
              -
            </button>

            <span className="w-1/3 flex items-center justify-center bg-slate-200 text-green-500 font-medium">
              {qty}
            </span>

            <button
              onClick={() => dispatch(IncreaseQty(id))}
              className="w-1/3 flex items-center justify-center bg-white text-green-500 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end justify-between self-stretch min-w-[90px]">
        
        {/* Price */}
        <span className="text-sm sm:text-base font-semibold text-green-500 whitespace-nowrap">
          Rs {price * qty}/-
        </span>

        {/* Delete */}
        <RiDeleteBin6Line
          className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 cursor-pointer"
          onClick={() => {
            toast.error(`${name} removed from cart`, {
              style: {
                background: "#fee2e2",
                color: "#b91c1c",
              },
            });

            dispatch(RemoveItem(id));
          }}
        />
      </div>
    </div>
  );
}

export default Card2;
