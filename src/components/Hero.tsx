import TextType from "./TextType";
import "../Design/Hero.css";
import ProfileCard from "../components/ProfileCard";
import ElectricBorder from "./ElectricBorder";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/Contact");
  };

  return (
    <div className="HeroContainer">
      <div className="ProfileContainer">
        <ProfileCard
          name="Razan Muhammad Dhirgham Aswani"
          showUserInfo={false}
          avatarUrl={"/RazanNoBg2.png"}
          iconUrl={"https://imgs.search.brave.com/NKmbaOKmBFKen58NxcNm6iMPQoC80zMdSMj6HkcRMhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC83/OC8wMy9hYnN0cmFj/dC1jb2RpbmctYmFj/a2dyb3VuZC12ZWN0/b3ItMjExOTc4MDMu/anBn"}
          showBehindGradient={false}
          enableTilt={true}
          enableMobileTilt={true}
        />
      </div>

      <section className="Right">
        <div className="Card">
          <TextType
            text={["a Web Developer.", "an AI Engineer.", "a Pianist.", "an Automation Engineer."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="ContactButtonContainer">
          <ElectricBorder className="ContactButtonBorder"
            color="#7c49d7"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
            >
            <button onClick={handleContactClick} className="ContactButton">
              <p>Contact me</p>
            </button>
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Hero;
