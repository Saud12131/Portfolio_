"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Notification = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/hiring");
  };

  return (
    <div
    onClick={handleClick}
    className="z-10 fixed top-6 left-1/2 cursor-pointer -translate-x-1/2 
    bg-blue-700 text-white px-6 py-3 rounded-lg flex justify-center 
    items-center gap-4 w-full max-w-[90%] md:w-auto border 
    border-blue-500  translate-y-0"
  >
    <span className="text-sm md:text-base font-semibold text-center">
      🚀 We are hiring!
    </span>
  

  </div>
  
    )

};

export default Notification;
