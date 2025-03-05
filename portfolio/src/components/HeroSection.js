import MyImage from "../assets/MyImage.png";
import LoactionImage from "../assets/LocationIcon.png";

import gitIcon from "../assets/gitIcon.png";
import linkedinIcon from "../assets/linkedInIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import anemoIcon from "../assets/anemoIcon.png";
import hackerrankIcon from "../assets/hackerrankIcon.png";
import sketchfabIcon from "../assets/sketchfabIcon.png";

import Skills from "../components/SkillsTill";

export default function HeroSection() {
  const skills = [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Next Js" },
    { name: "Figma" },
    { name: "FireBase" },
    { name: "Unity 3D" },
    { name: "Python" },
    { name: "Git" },
    { name: "Blender" },
    { name: "Node Js" },
    { name: "Android Studio" },
    { name: "PhotoShop" },
    { name: "C#" },
    { name: "Substance Painter" },
  ];

  return (
    <div className="hero-section-container">
      <div className="hero-section-left">
        <div className="hero-section-name-text">Saksham Tale</div>
        <div className="hero-section-location-group">
          <img src={LoactionImage} alt="Placeholder"></img>
          <div className="hero-section-location-text">Pune,Lohagoan, India</div>
        </div>
        <div className="hero-section-full-stack-developer-text">
          Full-Stack Developer
        </div>
        <div className="hero-section-social-icons-group">
          <img
            src={gitIcon}
            alt="social icon"
            onClick={() => window.open("https://github.com/Toji-cmd", "_blank")}
          />

          <img
            src={linkedinIcon}
            alt="social icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/saksham-tale-5b5bb4322/",
                "_blank"
              )
            }
          />

          <img
            src={instagramIcon}
            alt="social icon"
            onClick={() =>
              window.open("https://www.instagram.com/saksham_tale/", "_blank")
            }
          />

          <img
            src={anemoIcon}
            alt="social icon"
            onClick={() => window.open("https://www.anemostudio.in/", "_blank")}
          />

          <img
            src={hackerrankIcon}
            alt="social icon"
            onClick={() =>
              window.open(
                "https://www.hackerrank.com/profile/ashish02dev",
                "_blank"
              )
            }
          />

          <img
            src={sketchfabIcon}
            alt="social icon"
            onClick={() =>
              window.open("https://sketchfab.com/toji_bro", "_blank")
            }
          />
        </div>

        <div className="hero-section-short-intro">
          Hi, I am 18 years old, and I am a first-year student of B.Tech CS&IT
          at ADYPU.
        </div>

        <div className="hero-section-resume-button-group">
          <div className="hero-section-view-my-resume">View My Resume</div>
          <div className="hero-section-view-my-cv">View My CV</div>
        </div>
        <div className="hero-section-skills-group">
          {skills.map((skills, key) => (
            <Skills key={key} Name={skills.name} />
          ))}
        </div>
      </div>
      <div className="hero-section-right">
        <img src={MyImage} alt="Placeholder" />
      </div>
    </div>
  );
}
