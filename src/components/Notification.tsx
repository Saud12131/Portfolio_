'use client'
import { useState } from "react";
import { X } from "lucide-react";

const Notification = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`fixed top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-6 py-3 rounded-lg flex justify-center items-center gap-4 w-full max-w-[90%] md:w-auto border border-blue-500 transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-full opacity-0 scale-95"
      }`}
    >
      <span className="text-sm md:text-base font-semibold text-center">
        🚀 Would you like to collab with me or hire me?
      </span>
      <button
        onClick={() => setVisible(false)}
        className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer p-1 rounded-full hover:bg-blue-600"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default Notification;
