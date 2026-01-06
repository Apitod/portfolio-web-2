import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Design/Header.css";
import Home from "./Pages/Home";
import Navigation from "./components/Navigation";
import FloatingLines from "./components/FloatingLines";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Activity from "./Pages/Activity";

import { useState, useEffect } from "react";

function App() {
  const [lineCount, setLineCount] = useState([7, 3, 6]);

  useEffect(() => {
    const handleResize = () => {
      setLineCount(window.innerWidth < 768 ? [3, 2, 3] : [7, 3, 6]);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="Background">
        <FloatingLines
          linesGradient={["#8400FF", "#FF00E5", "#00D9FF"]}
          enabledWaves={["bottom", "middle", "top"]}
          lineCount={lineCount}
          lineDistance={2}
          animationSpeed={0.8}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
        />
      </div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
