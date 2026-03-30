import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center z-[9999]">
      
      {/* Food Icon */}
      <div className="text-6xl animate-bounce">
        🍽️
      </div>

      {/* App Name */}
      <h1 className="mt-4 text-2xl font-bold text-green-600">
        WELCOME TO ROYAL KITCHEN
      </h1>

      {/* Loading Text */}
      <p className="mt-2 text-green-500 animate-pulse">
        Preparing your menu...
      </p>

      {/* Progress Bar */}
      <div className="w-40 h-2 bg-green-200 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-green-500 animate-loadingBar"></div>
      </div>

    </div>
  );
}

export default Loader;
