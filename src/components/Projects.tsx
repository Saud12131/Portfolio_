import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Wanderlust from "../../public/wanderlust.png";
import Medium from "../../public/medium.png";
import Shareabite from "../../public/share-a-bite.png";
import { FaGithub, FaLink } from "react-icons/fa6";
import InstaBot from "../../public/Screenshot 2025-07-09 173030.png";
import LookMaxxing from "../../public/Screenshot 2025-07-10 181234.png";
import AIInterviewer from "../../public/landingpagess.png";

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
  projectName: "AI Interviewer",
  projectDescription:
    "AI Interviewer: Real-time human-like AI interview agent that conducts structured technical and behavioral interviews using voice interaction. Features dynamic role-based question generation, intelligent follow-ups, session memory, voice activity detection, and interview summaries. Built with FastAPI backend, Next.js frontend, Azure OpenAI, Azure Cognitive Services (STT/TTS), WebSockets, and PostgreSQL with Alembic .",
  projectLink: "https://github.com/Saud12131/UNSCREW",
  demoLink: "https://unscrew-eta.vercel.app/",
  imageUrl: AIInterviewer, 
  techStack: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Prisma ORM",
    "Azure OpenAI",
    "Azure Cognitive Services",
    "WebSockets",
    "WebRTC",
    "Docker"
  ],
},
  {
    projectName: "LookMaxxing.ai",
    projectDescription:
      "LookMaxxing.ai: AI-powered personal style transformation platform with facial analysis, color palette matching, real-time style chat assistant, and secure photo-based before/after comparisons. Features include social feed, protected user dashboard, and transformation tracking. Built with Next.js 14, React 19, TypeScript, and Google Generative AI.",
    projectLink: "https://github.com/Saud12131/LookMaxxing.ai",
    demoLink: "https://look-maxxing-ai.vercel.app/",
    imageUrl: LookMaxxing,
    techStack: [
      "Next.js 14",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Firebase",
      "Google Generative AI",
      "Framer Motion",
      "Shadcn/ui"
    ],
  },
  {
    projectName: "Instagram Automation Bot",
    projectDescription:
      "Instagram Automation Bot: Boosts engagement by auto-posting photos with AI-generated captions and auto-commenting on reels using Azure transcription + Gemini API. Includes anti-bot detection, smart scheduling, and session persistence for seamless automation.",
    projectLink: "https://github.com/Saud12131/Instagram-Automation-Bot",
    demoLink: "https://www.youtube.com/watch?v=KksBltyxNjM",
    imageUrl: InstaBot,
    techStack: [
      "Python",
      "Selenium",
      "Azure OpenAI",
      "Gemini API",
      "yt-dlp",
      "dotenv"
    ],
  },
  {
    projectName: "Wanderlust",
    projectDescription:
      "Wanderlust: Hotel Booking Platform with Razorpay Payment Integration: Secure and efficient payment processing- Forgot Password Functionality: Easy password recovery for users- Email Verification using Nodemailer: Ensuring authenticity and security User-Friendly Interface: Providing a smooth and intuitive user experience",
    projectLink: "https://github.com/Saud12131/WANDERLUST",
    demoLink: "https://wanderlust-myk8.vercel.app/",
    imageUrl: Wanderlust,
    techStack: [
      "MERN STACK",
      "Tailwind CSS",
      "JWT",
      "bcryptjs"
    ],
  },
  {
    projectName: "Medium",
    projectDescription:
      "Developed a scalable Medium clone using React, TypeScript, and Tailwind for the frontend. Implemented a serverless backend with Hono, Cloudflare Workers, PostgreSQL, and Prisma, utilizing TypeScript for consistency. Featured CRUD operations, user authentication, and a seamless reading experience.",
    projectLink: "https://github.com/Saud12131/Medium",
    demoLink: "https://medium-1-horj.onrender.com/",
    imageUrl: Medium,
    techStack: [
      "Prisma",
      "PostgresSql",
      "CloudFlareWorkers",
      "JWT",
      "bcryptjs",
      "React",
      "Tailwind"
    ],
  },
  {
    projectName: "Share-A-Bite",
    projectDescription:
      "Share a Bite is a food ordering app built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to browse a variety of food options, place orders, and enjoy a seamless food delivery experience, all in a user-friendly interface.",
    projectLink: "https://github.com/Saud12131/full-stack-task-delivery-app",
    demoLink: "https://share-a-bite-frontend.vercel.app/",
    imageUrl: Shareabite,
    techStack: [
      "React",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "React Context API",
      "JWT",
      "bcryptjs"
    ],
  }
];

const Projects: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-gray-200 text-center mb-8 relative before:absolute before:w-16 before:h-[2px] before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:-bottom-2">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
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
          <FaLink
            className="text-white hover:text-gray-300 transition-colors duration-300"
            size={24}
          />
        </Link>
      </div>
    </div>
  </div>
);