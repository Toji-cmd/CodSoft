import emailIcon from "../assets/emailIcon.png";


export default function FooterSection() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">
        <span>Contact</span> <span>Me</span>
      </h2>
      <p className="contact-description">
        <i>
          I’m always open to new opportunities, collaborations, or just a chat
          about tech, art, and storytelling! Feel free to reach out — I’d love
          to hear from you.
        </i>
      </p>
      <div className="contact-email">
        <img src={emailIcon} alt="Email Icon" className="email-icon" />
        <span className="email-text">
          <i>Email:</i>{" "}
          <a
            href="mailto:saksham.tale02dev@gmail.com"
            className="email-link"
          >
            saksham.tale02dev@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
