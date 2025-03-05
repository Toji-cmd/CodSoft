import "./styles/component.css";
import Skills from "./SkillsTill";
import icon from '../assets/timelinepositionIcon.png'
export default function TimeLine({ startDate, endDate, positionName, skills }) {
  return (
    <div className="time-line-container">
      <div className="time-line-left">
        <div className="time-line-horizontal-line"></div>
        <img src={icon} alt="icon"></img>
      </div>

      <div className="time-line-right">
        <div className="time-line-time-text">
          {startDate}-{endDate}
        </div>
        <div className="time-line-position-text">{positionName}</div>
        <div className="time-line-skills-group">
          {skills.map((skills, index) => (
            <Skills key={index} Name={skills} />
          ))}
        </div>
      </div>
    </div>
  );
}
