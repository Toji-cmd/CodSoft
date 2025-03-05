import ArtProject1 from "../assets/artProjects/project1.png";
import ArtProject2 from "../assets/artProjects/project2.png";
import ArtProject3 from "../assets/artProjects/project3.png";
import ArtProject4 from "../assets/artProjects/project4.png";

import WebProject1 from "../assets/webProjects/project1.png";
import WebProject2 from "../assets/webProjects/project2.png";

export default function ProjectSection() {
  const ArtProjects = [
    {
      image: ArtProject1,
      url: "https://sketchfab.com/toji_bro",
    },
    {
      image: ArtProject2,
      url: "https://sketchfab.com/toji_bro",
    },
    {
      image: ArtProject3,
      url: "https://sketchfab.com/toji_bro",
    },
    {
      image: ArtProject4,
      url: "https://sketchfab.com/toji_bro",
    },
  ];

  const WebProjects = [
    {
      image: WebProject1,
      url: "https://anemostudio.in/",
    },
    {
      image: WebProject2,
      url: "https://edb-store.vercel.app/",
    },
  ];

  const ProjectCards = ({ ProjectName, LinkArray, Btn, BtnLink }) => {
    return (
      <div className="project-section-card-container">
        <div className="project-section-top-text">{ProjectName}</div>
        <div className="project-section-projects-group">
          <div className="project-section-project-cards">
            {LinkArray.map((project, index) => (
              <div
                className="project-section-project-card"
                key={index}
                onClick={() => window.open(project.url, "_blank")}
              >
                <img src={project.image} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
          {Btn ? (
            <div
              className="project-section-btn"
              onClick={() => window.open(BtnLink, "_blank")}
            >
              <div>MORE</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="project-section-container">
      <ProjectCards
        ProjectName="3D Art Projects"
        LinkArray={ArtProjects}
        Btn={true}
        BtnLink="https://sketchfab.com/toji_bro"
      />
      <ProjectCards
      ProjectName="Web Projects"
      LinkArray={WebProjects}
      Btn={false}
      />
    </div>
  );
}
