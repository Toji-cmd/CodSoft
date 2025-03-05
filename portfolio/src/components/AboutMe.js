import TimeLine from "./TimeLine";
import secretBorder from "../assets/secretborder.png";
import { useState } from "react";
export default function AboutMe() {
  const gameDeveloperSkills = [
    "FireBase",
    "Unity 3D",
    "C#",
    "Blender",
    "PhotoShop",
    "Substance Painter",
  ];

  const webDeveloperSkills = [
    "TypeScript",
    "JavaScript",
    "Next Js",
    "Figma",
    "FireBase",
    "Git",
  ];

  const fullStackDeveloperSkills = [
    "TypeScript",
    "JavaScript",
    "Next Js",
    "Figma",
    "FireBase",
    "Git",
    "Android Studio",
  ];

  const [visiable, setVisiable] = useState(false);

  return (
    <div className="about-section">
      <div className="about-section-main-container">
        <div className="about-section-left">
          <div className="about-section-about-text">About Me:</div>
          <div className="about-section-about-answer">
            <p>
              I’m a <strong>Full-Stack Developer</strong> and{" "}
              <strong>3D Artist</strong> with a passion for building both
              functional and visually compelling experiences. I started as a{" "}
              <strong>Game Developer (2018–2020)</strong>, working with tools
              like <strong>Unity 3D</strong>, <strong>Blender</strong>, and{" "}
              <strong>Photoshop</strong>.
            </p>

            <p>
              <strong>From 2021 to 2024</strong>, I worked as a{" "}
              <strong>Freelance Web Developer</strong>, gaining experience with
              modern technologies like <strong>TypeScript</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Firebase</strong>. Now, I’m
              the <strong>Founder and CEO of Anemo Studio</strong>, where I
              design and develop <strong>mobile applications</strong> and{" "}
              <strong>websites</strong>.
            </p>

            <p>
              I’m always eager to explore new technologies, participate in
              hackathons, and turn creative ideas into reality.
            </p>
          </div>

          <div className="about-section-secret-group">
            <div className="about-section-secret-text">
              Want to know a secret?
            </div>
            <div
              className="about-section-secret-answer"
              onClick={() => {
                setVisiable(true);
              }}
            >
              Click Here
            </div>
          </div>
        </div>
        <div className="about-section-right">
          <div className="about-section-work-text">Work:</div>

          <div className="about-section-time-line">
            <TimeLine
              startDate={"2018"}
              endDate={"2020"}
              positionName={"Game Developer"}
              skills={gameDeveloperSkills}
            />
            <TimeLine
              startDate={"2021"}
              endDate={"2024"}
              positionName={"Web Developer"}
              skills={webDeveloperSkills}
            />
            <TimeLine
              startDate={"2024"}
              endDate={"Present"}
              positionName={"Full-Stack Developer"}
              skills={fullStackDeveloperSkills}
            />
          </div>
        </div>
      </div>
      {visiable ? (
        <div className="secret-section-main-container">
          <img src={secretBorder} alt="bar"></img>
          <div className="secret-section-top-text">SECRET</div>
          <div className="secret-section-text">
            The secret is, I make manhwas — but I’m starting fresh. This will be
            my first new project under a different author name, a story that
            begins as a romantic comedy but slowly unravels into something much
            darker. The protagonist, after facing betrayal and sinking into
            depression, sets out on a relentless path of revenge. It’s a tale of
            loss and the painful realization that some things, once lost, can
            never be regained. Through this story, I want to explore the depths
            of human emotion and the ways despair can transform a person’s soul.
          </div>
          <div className="secret-section-bottom-text">COMING SOON</div>
          <img src={secretBorder} alt="bar"></img>
        </div>
      ) : null}
    </div>
  );
}
