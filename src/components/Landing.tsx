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
  date: 'May 2025 - Present',
  description: [
    'Working as a Software Development Engineer Intern',
    'Actively contributing to project development',
    'Learning and implementing modern software development practices'
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
