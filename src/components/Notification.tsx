"use client"; 

const Notification = () => {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={handleClick}
      className={`z-10 fixed top-3 left-1/2 cursor-pointer -translate-x-1/2 
      bg-blue-700 text-white px-6 py-2 rounded-lg flex justify-center 
      items-center gap-4 w-full max-w-fit md:w-auto border 
      border-blue-500 translate-y-0 transition-opacity duration-500`}
    >
      <span className="text-sm md:text-base font-semibold text-center">
      🚀 Hire me or collaborate with me!
      </span>
    </div>
  );
};

export default Notification;
