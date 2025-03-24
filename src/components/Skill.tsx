import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiSocketdotio,
  SiPrisma,
  SiExpress,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 size={28} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={28} color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs size={28} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} color="#3178C6" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} color="#47A248" /> },
  { name: "Mongoose", icon: <SiMongodb size={28} color="#880000" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} color="#FFFFFF" /> },
  { name: "React", icon: <FaReact size={28} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} color="#38BDF8" /> },
  { name: "Redux", icon: <SiRedux size={28} color="#764ABC" /> },
  { name: "WebSocket", icon: <SiSocketdotio size={28} color="#FFFFFF" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#FFFFFF" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} color="#339933" /> },
  { name: "Express", icon: <SiExpress size={28} color="#FFFFFF" /> },
  { name: "Git", icon: <FaGitAlt size={28} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={28} color="#FFFFFF" /> },
  { name: "Prisma", icon: <SiPrisma size={28} color="#FFFFFF" /> },
];

function Skill() {
  return (
    <div className="bg-black  flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold text-gray-200 text-center mb-8 relative before:absolute before:w-16 before:h-[2px] before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:-bottom-2">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {techStack.map((item, index) => (
          <button
            key={index}
            className="relative bg-gray-900 text-white rounded-full w-16 h-16 flex justify-center items-center shadow-md border border-gray-600 transition-transform hover:scale-110 group"
          >
            <span className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow opacity-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:pointer-events-auto">
              {item.name}
            </span>

            <div className="animate-spin" style={{ animationDuration: "5s" }}>
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Skill;
