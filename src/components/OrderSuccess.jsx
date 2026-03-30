import React, { useEffect } from "react";

function OrderSuccess({ show, onClose }) {

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        onClose();
      }, 2000); // auto close after 2 sec
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-green-500 flex flex-col items-center justify-center z-[999] text-white">

      {/* Tick Animation */}
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center animate-bounce">
        <span className="text-green-500 text-5xl">✓</span>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-bold">
        Order Placed Successfully
      </h2>

      <p className="text-sm mt-2 opacity-90">
        Your food is being prepared 🍽️
      </p>

    </div>
  );
}

export default OrderSuccess;