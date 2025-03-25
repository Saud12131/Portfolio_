import Header from "./Header";
import SocialLinks from "./SocialLinks";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Notification from "./Notification";

function Landing() {
  return (
    <div className="bg-black pt-20 flex items-center justify-center flex-col gap-3 w-full max-w-screen-lg mx-auto px-4">
    <Notification />
      <Header />
      <SocialLinks />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
