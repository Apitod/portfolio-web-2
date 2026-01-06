import Logo from "../assets/HomeLogo";
import "../Design/Header.css";
import Dock from "./Dock";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const items = [
    {
      icon: <Logo src="/home (1).png" size={20} />,
      label: "Home",
      onClick: () => navigate("./Home"),
    },
    {
      icon: (
        <Logo
          src="https://cdn-icons-png.flaticon.com/128/11455/11455672.png"
          size={20}
        />
      ),
      label: "About",
      onClick: () => navigate("./About"),
    },
    {
      icon: (
        <Logo
          src="https://img.icons8.com/ios/50/C850F2/running--v1.png"
          size={20}
        />
      ),
      label: "Activity & Certificate",
      onClick: () => navigate("./Activity"),
    },
    {
      icon: (
        <Logo
          src="https://cdn-icons-png.flaticon.com/128/9574/9574141.png"
          size={20}
        />
      ),
      label: "Projects",
      onClick: () => navigate("./Project"),
    },
    {
      icon: (
        <Logo
          src="https://cdn-icons-png.flaticon.com/128/11269/11269639.png"
          size={20}
        />
      ),
      label: "Contact",
      onClick: () => navigate("./Contact"),
    },
  ];

  return (
    <header className="HeaderContainer">
      <nav className="NavBar">
        <Dock items={items} />
      </nav>
    </header>
  );
}

export default Navigation;
