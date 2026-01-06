import { useState } from "react";
import MagicBento, { BentoCardProps } from "../components/MagicBento";
import ProjectModal from "../components/ProjectModal";
import "../Design/Project.css";

// Import Assets from About
import yoloImg from "../assets/about/YOLO.jpeg";
import automationImg from "../assets/about/Automation.jpeg";
import workspaceImg from "../assets/about/Workspace.jpeg";
import mentoringImg from "../assets/about/Mentoring.jpeg";
import yriImg from "../assets/about/YRI.jpeg";
import aiesecImg from "../assets/about/Aiesec.jpeg";

// Import Assets from Activity
import postgreImg from "../assets/activity/postgre.jpeg";
import certIntroAI from "../assets/activity/SertifikatPenyelesaian_Introduction to Artificial Intelligence-1.png";
import certPython from "../assets/activity/dicoding memulai pemrograman degnan python.png";
import certCareerEssentials from "../assets/activity/SertifikatPenyelesaian_Career Essentials in Generative AI by Microsoft and LinkedIn DARI MICROSOFT WOEEE-1.png";
import gdgocImg from "../assets/activity/GDGoC.jpeg";

const PROJECTS: (BentoCardProps & { images: string[] })[] = [
  {
    color: '#060010',
    title: 'Crowd Density Analytics',
    description: 'Real-time crowd analysis system using YOLOv8 to detect and track people for business intelligence insights.',
    label: 'AI / Computer Vision',
    image: yoloImg,
    images: [yoloImg, certIntroAI]
  },
  {
    color: '#060010',
    title: 'Enterprise Automation',
    description: 'Intelligent workflow automation suites connecting diverse business tools to stream operations.',
    label: 'Automation',
    image: automationImg,
    images: [automationImg, certCareerEssentials]
  },
  {
    color: '#060010',
    title: 'Computer Vision R&D',
    description: 'Experimental laboratory for gesture control and object tracking using MediaPipe and OpenCV.',
    label: 'R&D',
    image: workspaceImg,
    images: [workspaceImg, certPython]
  },
  {
    color: '#060010',
    title: 'Database Management',
    description: 'Robust backend systems design and database management using PostgreSQL for scalable applications.',
    label: 'Backend',
    image: postgreImg,
    images: [postgreImg, workspaceImg]
  },
  {
    color: '#060010',
    title: 'Tech Education & Mentoring',
    description: 'Empowering the next generation of developers through workshops, mentoring, and community leadership.',
    label: 'Education',
    image: mentoringImg,
    images: [mentoringImg, gdgocImg]
  },
  {
    color: '#060010',
    title: 'Community Impact',
    description: 'Leading digital transformation initiatives for youth organizations like Youth Ranger Indonesia and AIESEC.',
    label: 'Social Impact',
    image: yriImg,
    images: [yriImg, aiesecImg]
  }
];

function Project() {
  const [selectedProject, setSelectedProject] = useState<(BentoCardProps & { images: string[] }) | null>(null);

  return (
    <div className="ProjectWrapper">
      <div className="projectContainer">
        <div className="BentoContainer">
          <MagicBento
            cards={PROJECTS}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            onCardClick={(card) => {
              setSelectedProject(card as typeof PROJECTS[0]);
            }}
          />
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject ? {
          title: selectedProject.title || '',
          description: selectedProject.description || '',
          label: selectedProject.label,
          images: selectedProject.images || (selectedProject.image ? [selectedProject.image] : [])
        } : null}
      />
    </div>
  );
}

export default Project;
