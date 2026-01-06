import { useRef } from "react";
import "../Design/About.css";
import "../Design/AboutScroll.css";
import InteractiveImage from "../components/InteractiveImage";

// Import dummy images
import universityCampus from "../assets/about/Uin.jpeg";
import workspace from "../assets/about/Workspace.jpeg";
import aiesec from "../assets/about/Aiesec.jpeg";
import automation from "../assets/about/Automation.jpeg";
import mentoring from "../assets/about/Mentoring.jpeg";
import pianoMusic from "../assets/about/Piano.jpeg";
import yolo from "../assets/about/YOLO.jpeg";
import yri from "../assets/about/YRI.jpeg";

function About() {
  const detailScrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="AboutContainer">
      <div className="stuck-grid">
        <section className="scroll-instruction">
          <p>Scroll to know about me</p>
          <div className="arrow">↓</div>
        </section>
        <div className="grid-item">Hi!</div>
        <div className="grid-item">Meet</div>
        <div className="grid-item special">
          <b>Razan</b>
        </div>

        <div className="grid-item narrative">
          Razan, a technology-driven builder born in Makassar on March 24, 2006, who believes that technology is not just about code, but about impact.
        </div>

        <InteractiveImage
          src={universityCampus}
          alt="University Campus"
          className="grid-item"
          description="Campus life at UIN Alauddin Makassar, where I am building my academic foundation in Information Systems and engaging with a vibrant student community."
        />

        <div className="grid-item narrative">
          Currently pursuing a degree in Information Systems at UIN Alauddin Makassar, maintaining a strong academic record with a GPA of 3.95 while actively building real-world projects alongside my studies.
        </div>

        <InteractiveImage
          src={workspace}
          alt="Coding Workspace"
          className="grid-item"
          description="My personal workspace where ideas come to life. Equipped for full-stack development and deep focus sessions."
        />

        <div className="grid-item narrative">
          As a Web Developer and AI Engineer, I specialize in building innovative web apps and exploring AI.
        </div>

        <InteractiveImage
          src={mentoring}
          alt="Mentoring"
          className="grid-item"
          description="Mentoring sessions where I share knowledge on web development and AI, helping others grow their technical skills."
        />

        <div className="grid-item narrative">
          My technical toolkit spans React.js, Python, and OpenCV—tools I use to design systems that are functional, scalable, and aligned with real user needs.
        </div>

        <div className="grid-item narrative">
          I have worked on computer vision projects using YOLO to analyze crowd density, transforming detection results into insights that support real business decision-making.
        </div>

        <InteractiveImage
          src={yolo}
          alt="YOLO"
          className="grid-item"
          description="A snapshot of my Crowd Density Analysis project using YOLOv8. This system detects people in real-time to provide actionable business insights."
        />

        <div className="grid-item narrative">
          Also recently, my focus has expanded into automation workflows, where I design systems that connect tools, data, and AI to reduce manual work and improve efficiency.
        </div>

        <InteractiveImage
          src={automation}
          alt="Automation"
          className="grid-item"
          description="Designing automation workflows that bridge different platforms, streamlining repetitive tasks and enhancing productivity."
        />

        <div className="grid-item narrative">
          Beyond code, I’m a pianist—finding balance between analytical thinking and creative expression, a mindset that also shapes how I approach problem-solving in technology.
        </div>

        <InteractiveImage
          src={pianoMusic}
          alt="Piano Music"
          className="grid-item"
          description="Piano has been my companion for years. It teaches me rhythm, patience, and the beauty of harmony—concepts that echo in my coding style."
        />

        <div className="grid-item narrative">
          Actively involved in tech and youth communities, including Google Developer Group on Campus and Youth Ranger Indonesia, where I contribute as a Social Media Marketing member—combining technical thinking with digital communication.
        </div>

        <InteractiveImage
          src={yri}
          alt="YRI"
          className="grid-item"
          description="Contributing to Youth Ranger Indonesia (YRI) events. It's rewarding to be part of a movement that empowers youth across the nation."
        />

        <InteractiveImage
          src={aiesec}
          alt="AIESEC"
          className="grid-item"
          description="My time with AIESEC provided global exposure and leadership experiences, shaping my perspective on teamwork and cross-cultural collaboration."
        />

        <div className="grid-item special">
          <b>Always Growing</b>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>


    </div>
  );
}

export default About;
