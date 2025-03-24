"use client";

import { FaEnvelope, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "X",
      icon: <FaXTwitter size={28} />,
      url: "https://x.com/alkama_07",
      external: true,
    },
    {
      name: "Github",
      icon: <FaGithub size={28} />,
      url: "https://github.com/mdalkama689",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={28} />,
      url: "https://www.linkedin.com/in/md-alkama-ashraf-37359725b/",
      external: true,
    },
    {
      name: "Youtube",
      icon: <FaYoutube size={28} />,
      url: "https://www.youtube.com/@Bug2Build-d7f",
      external: true,
    },

    {
      name: "Email",
      icon: <FaEnvelope size={28} />,
      url: "mailto:mdalkama689@gmail.com",
      external: true,
    },
    {
      name: "Resume",
      icon: <FaFileAlt size={28} />,
      url: "https://github.com/YOUR_GITHUB_USERNAME",
      external: true,
    },
  ];

  return (
    <div className="flex justify-center list-none font-poppins mt-6 ">
      {socialLinks.map((item, index) => (
        <button
          key={index}
          onClick={() => window.open(item.url, "_blank")}
          className="relative bg-white rounded-full m-2 w-12 h-12 flex justify-center items-center shadow-lg cursor-pointer transition-transform hover:scale-110 group"
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-white bg-black text-sm py-1 px-2 rounded shadow opacity-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:pointer-events-auto">
            {item.name}
          </span>
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
