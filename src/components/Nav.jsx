import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext.jsx";
import { food_items } from "../pages/food";
import { useSelector } from "react-redux";


function Nav() {
  const { input, setInput, setCate, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);
  let items=useSelector(state=>state.cart);


  return (
    <div className="w-full h-[80px] md:h-[100px] flex items-center justify-between px-4 md:px-8 bg-white relative z-20">
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex items-center justify-center rounded-md shadow-lg">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <form
        className="w-[55%] md:w-[70%] h-[45px] md:h-[60px] bg-white flex items-center px-3 md:px-5 gap-3 md:gap-5 rounded-md shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-green-600 w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        <input
          type="text"
          placeholder="Search food..."
          className="w-full outline-none text-[14px] md:text-[20px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div
        className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] bg-white flex items-center justify-center rounded-md shadow-lg relative cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[12px] w-5 h-5 rounded-full flex items-center justify-center">
          {items.length}
        </span>
        <LuShoppingBag className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-green-600" />
      </div>
    </div>
  );
}

export default Nav;
