import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { dataContext } from "../context/UserContext.jsx";
import Nav from "../components/Nav.jsx";
import Category from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "./food.js";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2.jsx";

function Home() {
  const { Cate, setCate, input, showCart, setShowCart } =
    useContext(dataContext);

  const items = useSelector((state) => state.cart);

  // CALCULATIONS
  let subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  let tax = subtotal * 0.05;
  let total = subtotal + tax;

  // CATEGORY FILTER
  function filter(categoryName) {
    if (categoryName === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) =>
          item.food_category.toLowerCase() === categoryName.toLowerCase()
      );
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Nav />

      {input === "" && <Category onFilter={filter} />}

      {/* MENU GRID */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          sm:gap-5
          px-3
          sm:px-4
          md:px-8
          py-6
        "
      >
        {Cate.length > 0 ? (
          Cate.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-10">
            <p className="text-gray-400 text-sm sm:text-base font-medium text-center">
              "{input}" is not in the menu
            </p>
          </div>
        )}
      </div>

      {/* CART */}
      <div
        className={`fixed top-0 right-0
        w-full sm:w-[80vw] md:w-[50vw] lg:w-[40vw]
        h-screen bg-white shadow-xl p-6
        transition-transform duration-300 z-50
        flex flex-col
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] cursor-pointer text-green-400 hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* Cart Items */}
        <div className="mt-6 flex flex-col gap-4 overflow-y-auto flex-1 pr-1">
          {items.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <Card2
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="w-full border-t-2 border-gray-300 pt-4 mt-4 flex flex-col gap-3">
          {/* Subtotal */}
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold">Rs {subtotal}/-</span>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-gray-600">
            <span>Tax (5%)</span>
            <span className="font-semibold">
              Rs {tax.toFixed(2)}/-
            </span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-semibold text-green-500 border-t pt-3">
            <span>Total</span>
            <span>Rs {total.toFixed(2)}/-</span>
          </div>

          {/* Special Note */}
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-600">
              Special Note
            </label>
            <textarea
              placeholder="Add cooking instructions..."
              className="w-full mt-2 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none text-sm"
              rows="3"
            />
          </div>

          {/* Place Order */}
          <button
            className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all disabled:bg-gray-300"
            disabled={items.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
