import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import ProjectSection from "../components/ProjectsSection";

import "../components/styles/hero.css";
import '../components/styles/aboutme.css';
import '../components/styles/projects.css';
import '../components/styles/footer.css';

export default function HomePage() {
  return (
    <div className="portofilo-main-container">
      <HeroSection />
      <AboutMe />
      <ProjectSection />
    </div>
  );
}
