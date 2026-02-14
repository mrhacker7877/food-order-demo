import React, { useRef, useState, useEffect } from "react";
import { TiThSmallOutline } from "react-icons/ti";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// images
import soups from "./assets/soups.png";
import egg from "./assets/egg.png";
import rice from "./assets/rice.png";
import roti from "./assets/roti.png";
import vegStarters from "./assets/veg-starters.png";
import vegCurry from "./assets/veg-curry.png";
import tandoori from "./assets/tandoori.png";
import seafoodStarters from "./assets/seafood-starters.png";
import seafoodCurry from "./assets/seafood-curry.png";
import biryani from "./assets/biryani.png";
import chickenStarters from "./assets/chicken-starters.png";
import chickenCurry from "./assets/chicken-curry.png";
import mutton from "./assets/mutton.png";
import mandi from "./assets/mandi.png";
import mocktails from "./assets/mocktails.png";
import juices from "./assets/juices.png";
import milkshakes from "./assets/milkshakes.png";
import beverages from "./assets/beverages1.png";

const categories = [
  { id: 1, name: "All", image: <TiThSmallOutline /> },
  { id: 2, name: "Soups", image: soups },
  { id: 3, name: "Egg Dishes", image: egg },
  { id: 4, name: "Rice Specials", image: rice },
  { id: 5, name: "Rotis & Naans", image: roti },
  { id: 6, name: "Veg Starters", image: vegStarters },
  { id: 7, name: "Veg Curries", image: vegCurry },
  { id: 8, name: "Grill & Tandoori", image: tandoori },
  { id: 9, name: "Seafood Starters", image: seafoodStarters },
  { id: 10, name: "Seafood Curries", image: seafoodCurry },
  { id: 11, name: "Biryanis", image: biryani },
  { id: 12, name: "Chicken Starters", image: chickenStarters },
  { id: 13, name: "Chicken Curries", image: chickenCurry },
  { id: 14, name: "Mutton Curries", image: mutton },
  { id: 15, name: "Mandi Specials", image: mandi },
  { id: 16, name: "Mocktails", image: mocktails },
  { id: 17, name: "Fresh Juices", image: juices },
  { id: 18, name: "Milkshakes", image: milkshakes },
  { id: 19, name: "Beverages & Desserts", image: beverages }
];

function Category({ onFilter }) {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleSelect = (index, name) => {
    setActive(index);
    onFilter(name);

    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  const scrollBy = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative w-full mt-6 py-8 bg-slate-100 z-10">
      <button
        onClick={() => scrollBy("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 bg-white rounded-full shadow items-center justify-center"
      >
        <MdChevronLeft size={26} />
      </button>

      <button
        onClick={() => scrollBy("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 bg-white rounded-full shadow items-center justify-center"
      >
        <MdChevronRight size={26} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-14 snap-x snap-mandatory scrollbar-hide"
      >
        {categories.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => handleSelect(index, item.name)}
            className="min-w-[110px] cursor-pointer flex flex-col items-center snap-center"
          >
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center
                ${active === index ? "ring-4 ring-green-500" : ""}`}
            >
              <div
                className="w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-full overflow-hidden"
                style={{
                  backgroundImage:
                    typeof item.image === "string"
                      ? `url(${item.image})`
                      : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {typeof item.image !== "string" && (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-green-600">
                    {item.image}
                  </div>
                )}
              </div>
            </div>

            <p
              className={`mt-3 text-sm font-semibold text-center ${
                active === index ? "text-green-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
