import Header from "./Header";
import SocialLinks from "./SocialLinks";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Notification from "./Notification";
import Experience from "./Experience";
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem = {
  title: 'SDE Intern',
  company: 'Xillion',
  date: 'April 2025 - Present',
  description: [
    'Working with multiple LLMs and their frameworks',
    'Serving as a full-stack developer using Next.js and FastAPI',
    'Taking ownership of features and building them from scratch',
    'Collaborating closely with the founder and co-founder'
  ],
  link: 'https://xillion.in'
};


function Landing() {
  return (
    <div className="bg-black pt-20 flex items-center justify-center flex-col gap-3 w-full max-w-screen-lg mx-auto px-4">
    <Notification />
      <Header />
      <SocialLinks />
      <Skill />
      <Experience experiences={[experienceData]} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
