import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import boltImg from "../../public/bolt.jpg";
import excalidrwaImg from "../../public/excalidraw.jpg";
import aiShortImg from "../../public/ai-shorts-gen.jpg";
import wier2codeImg from "../../public/wire2code.jpg";
import { FaGithub, FaYoutube } from "react-icons/fa6";

interface Project {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  demoLink: string;
  imageUrl: StaticImageData;
  techStack: string[];
}

const projectInfo: Project[] = [
  {
    projectName: "Web App Generator",
    projectDescription:
      "This app allows users to input a prompt to generate web app code. It supports running the code, sharing a deployment link, and exporting the code for others.",
    projectLink: "https://github.com/mdalkama689/bolt",
    demoLink: "https://www.youtube.com/watch?v=obNvPCyJA7U",
    imageUrl: boltImg,
    techStack: [
      "Sanpack",
      "Next.js",
      "Tailwind CSS",
      "ShadCN",
      "Gemini",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    projectName: "Collaborative Drawing Studio",
    projectDescription:
      "A real-time collaborative drawing app where users can create and join rooms to draw shapes like rectangles and circles, use a pencil, and erase drawings.",
    projectLink: "https://github.com/mdalkama689/excalidraw",
    demoLink: "https://www.youtube.com/watch?v=z3H7dEXwnMw",
    imageUrl: excalidrwaImg,
    techStack: ["Turborepo", "Next.js", "Node.js", "WebSockets", "HTML Canvas"],
  },
  {
    projectName: "Video Script Generator",
    projectDescription:
      "Users provide a topic, and the app generates a script. They can then select a voice, topic, and style to generate a video, which can be played. The system uses Google authentication and a credit-based system.",
    projectLink: "https://github.com/mdalkama689/ai-shorts-generator",
    demoLink: "https://www.youtube.com/watch?v=wg_j-BlLdGI",
    imageUrl: aiShortImg,
    techStack: ["NextAuth", "Remotion", "Next.js", "ShadCN", "Gemini"],
  },
  {
    projectName: "Wireframe to Code Tool",
    projectDescription:
      "This tool allows users to convert wireframes to production-ready React code instantly, streamlining the design-to-code process and accelerating development.",
    projectLink: "https://github.com/mdalkama689/wire2code",
    demoLink: "https://www.youtube.com/watch?v=jZZewOHbzXI",
    imageUrl: wier2codeImg,
    techStack: ["OpenRouter", "NextAuth", "ShadCN", "Sanpack"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-gray-200 text-center mb-8 relative before:absolute before:w-16 before:h-[2px] before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:-bottom-2">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectInfo.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => (
  <div className="bg-black border border-gray-200 hover:border-gray-400 transition duration-300 rounded-lg overflow-hidden w-[350px]">
    <div className="mx-auto">
      <Image
        src={project.imageUrl}
        alt={project.projectName}
        unoptimized
        className="w-full h-64 object-cover rounded-t-lg"
      />
    </div>

    <div className="p-5">
      <p className="mb-2 text-lg font-semibold tracking-tight text-white">
        {project.projectName}
      </p>
      <p className="mb-3 font-normal text-gray-400">
        {project.projectDescription}
      </p>

      <div className="mb-3 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm font-medium text-white bg-gray-700 rounded p-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="text-white hover:text-gray-300 transition-colors duration-300"
            size={24}
          />
        </Link>
        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <FaYoutube
            className="text-white hover:text-gray-300 transition-colors duration-300"
            size={24}
          />
        </Link>
      </div>
    </div>
  </div>
);
