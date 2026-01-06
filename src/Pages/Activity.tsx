import DomeGallery from "../components/DomeGallery";
import '../Design/DomeGallery.css';
import '../Design/Activity.css';

// Videos
import makingAiModel from "../assets/activity/Making AI model.mp4";
import mediaPipe from "../assets/activity/Media pipe and open cv.mp4";
import piano from "../assets/activity/Piano.mp4";
import yriVid from "../assets/activity/YRI Vid.mp4";
import yoloProject2 from "../assets/activity/Yolo Proejct 2.mp4";
import yoloProject from "../assets/activity/Yolo Project.mp4";
import aiesecTeaching from "../assets/activity/aiesec local proejct teaching.mp4";
import aiesecOpening from "../assets/activity/aiesec local project opening.mp4";
import aiesecPresentation from "../assets/activity/aiesec local project presentation.mp4";
import aiesecTeaching2 from "../assets/activity/aiesec local project teaching.mp4";
import aiesecVolunteer2 from "../assets/activity/aiesec volunteer2.mp4";
import automation from "../assets/activity/automation.mp4";
import opencv from "../assets/activity/opencv.mp4";

// Images - AIESEC & Volunteering
import aiesecAnimalCare from "../assets/activity/Aiesec Local Project Animal Care.jpeg";
import aiesecPrepTeaching from "../assets/activity/Aiesec Local Project Preparing to teach student.jpeg";
import aiesecDogShelter from "../assets/activity/Aiesec Volunteer dog shelter visit.jpeg";
import aiesecVolunteer from "../assets/activity/Aiesec_Volunteer.jpeg";
import farewellAiesec from "../assets/activity/Farewell Aiesec.jpeg";
import aiesecAnimalWarfare from "../assets/activity/aiesec local project animal warfare.jpeg";
import yriVolunteer from "../assets/activity/YRI_Sulsel Youth Potential Fest Volunteer.jpeg";

// Images - Tech & Community
import gdgoc from "../assets/activity/GDGoC.jpeg";
import inready from "../assets/activity/Inready_study_club_it.jpeg";
import mentor from "../assets/activity/Mentor.jpeg";
import sisfoFest from "../assets/activity/SisfoFest_Publikasi_dokumentasi.jpeg";
import postgre from "../assets/activity/postgre.jpeg";

// Images - Certificates
import japanEduFair from "../assets/activity/Japan Education Fair in Indonesia (1)-1.png";
import certRazan1 from "../assets/activity/Razan Muhammad Dhirgam (1)-1.png";
import certRazan2 from "../assets/activity/Razan Muhammad Dhirgam-1.png";
import certDigitalMarketing from "../assets/activity/Sertifikat Mini Course - Digital Marketing (Razan Muhammad Dirgham Aswani)-1.png";
import certCareerEssentials from "../assets/activity/SertifikatPenyelesaian_Career Essentials in Generative AI by Microsoft and LinkedIn DARI MICROSOFT WOEEE-1.png";
import certEthics2 from "../assets/activity/SertifikatPenyelesaian_Ethics in the Age of Generative AI (2) yg linkedin to'-1.png";
import certEthics1 from "../assets/activity/SertifikatPenyelesaian_Ethics in the Age of Generative AI yg satu-1.png";
import certEthics from "../assets/activity/SertifikatPenyelesaian_Ethics in the Age of Generative AI-1.png";
import certGenAISearch from "../assets/activity/SertifikatPenyelesaian_Generative AI The Evolution of Thoughtful Online Search-1.png";
import certIntroAI1 from "../assets/activity/SertifikatPenyelesaian_Introduction to Artificial Intelligence (1)-1.png";
import certIntroAI from "../assets/activity/SertifikatPenyelesaian_Introduction to Artificial Intelligence-1.png";
import certCopilot from "../assets/activity/SertifikatPenyelesaian_Learning Microsoft 365 Copilot-1.png";
import certStreamlining from "../assets/activity/SertifikatPenyelesaian_Streamlining Your Work with Microsoft Copilot-1.png";
import certWhatIsGenAI from "../assets/activity/SertifikatPenyelesaian_What Is Generative AI-1.png";
import certInformatika from "../assets/activity/cert_Informatika - ONSB 2023-1.png";
import certPython from "../assets/activity/dicoding memulai pemrograman degnan python.png";
import certPromptEng from "../assets/activity/dicoding prompt engineer.png";
import certEnglish from "../assets/activity/piag_Bahasa Inggris - ONSB 2023-1.png";


function Activity() {
  const images = [
    // Videos
    { src: makingAiModel, alt: "Making AI Model", description: "Deep dive into building and training custom AI models.", type: "video" as const },
    { src: mediaPipe, alt: "MediaPipe & OpenCV", description: "Experimenting with computer vision using MediaPipe and OpenCV.", type: "video" as const },
    { src: piano, alt: "Piano", description: "Finding balance and creativity through music.", type: "video" as const },
    { src: yriVid, alt: "YRI Video", description: "Active contribution to Youth Ranger Indonesia initiatives.", type: "video" as const },
    { src: yoloProject, alt: "YOLO Project", description: "Real-time object detection system in action.", type: "video" as const },
    { src: yoloProject2, alt: "YOLO Project Demo", description: "Advanced crowd analysis using YOLOv8.", type: "video" as const },
    { src: automation, alt: "Automation", description: "Streamlining complex workflows with automation tools.", type: "video" as const },
    { src: opencv, alt: "OpenCV Demo", description: "Computer vision projects for real-world applications.", type: "video" as const },
    { src: aiesecOpening, alt: "AIESEC Opening", description: "Opening session for AIESEC local projects.", type: "video" as const },
    { src: aiesecPresentation, alt: "AIESEC Presentation", description: "Presenting social impact ideas at AIESEC.", type: "video" as const },
    { src: aiesecTeaching, alt: "AIESEC Teaching", description: "Teaching and empowering students through education.", type: "video" as const },
    { src: aiesecTeaching2, alt: "Teaching Session", description: "Engaging classroom sessions with impactful learning.", type: "video" as const },
    { src: aiesecVolunteer2, alt: "AIESEC Volunteering", description: "Hands-on volunteering experience.", type: "video" as const },

    // Community & Volunteering Images
    { src: gdgoc, alt: "GDGoC", description: "Google Developer Group on Campus - Community Event." },
    { src: inready, alt: "Inready Study Club", description: "Sharing knowledge at Inready Study Club IT." },
    { src: mentor, alt: "Mentoring", description: "Mentoring upcoming developers." },
    { src: sisfoFest, alt: "SisfoFest", description: "Documentation and publication team at SisfoFest." },
    { src: aiesecAnimalCare, alt: "Animal Care", description: "AIESEC Project: Caring for animals." },
    { src: aiesecPrepTeaching, alt: "Prep Teaching", description: "Preparing materials for student teaching sessions." },
    { src: aiesecDogShelter, alt: "Dog Shelter", description: "Visiting and helping at the local dog shelter." },
    { src: aiesecVolunteer, alt: "Volunteering", description: "Dedicated to social contribution with AIESEC." },
    { src: farewellAiesec, alt: "Farewell AIESEC", description: "Celebrating the journey with the AIESEC team." },
    { src: aiesecAnimalWarfare, alt: "Animal Welfare", description: "Advocating for animal welfare." },
    { src: yriVolunteer, alt: "YRI Volunteer", description: "Volunteering at Sulsel Youth Potential Fest." },

    // Tech Images
    { src: postgre, alt: "PostgreSQL", description: "Mastering database management with PostgreSQL." },

    // Certificates
    { src: certCareerEssentials, alt: "Career Essentials", description: "Certificate: Career Essentials in Generative AI (Microsoft & LinkedIn)." },
    { src: certPython, alt: "Python", description: "Certificate: Starting Programming with Python (Dicoding)." },
    { src: certPromptEng, alt: "Prompt Engineering", description: "Certificate: Prompt Engineering (Dicoding)." },
    { src: certIntroAI, alt: "Intro to AI", description: "Certificate: Introduction to Artificial Intelligence." },
    { src: certCopilot, alt: "Microsoft Copilot", description: "Certificate: Learning Microsoft 365 Copilot." },
    { src: certStreamlining, alt: "Streamlining Work", description: "Certificate: Streamlining Work with Microsoft Copilot." },
    { src: certWhatIsGenAI, alt: "What is GenAI", description: "Certificate: What Is Generative AI." },
    { src: certEthics, alt: "Ethics in AI", description: "Certificate: Ethics in the Age of Generative AI." },
    { src: certGenAISearch, alt: "GenAI Search", description: "Certificate: Generative AI - The Evolution of Online Search." },
    { src: certDigitalMarketing, alt: "Digital Marketing", description: "Mini Course Certificate: Digital Marketing." },
    { src: japanEduFair, alt: "Japan Edu Fair", description: "Participation in Japan Education Fair." },
    { src: certInformatika, alt: "Informatika ONSB", description: "Certificate: ONSB 2023 - Informatics." },
    { src: certEnglish, alt: "English ONSB", description: "Certificate: ONSB 2023 - English." },
  ];

  return (
    <div className="ActivityWrapper">
      <DomeGallery
        images={images}
        fit={1}
        fitBasis="min"
        minRadius={700}
        maxRadius={Infinity}
        padFactor={0.5}
        overlayBlurColor="#060010"
        maxVerticalRotationDeg={5}
        dragSensitivity={20}
        enlargeTransitionMs={300}
        segments={45}
        dragDampening={3}
        openedImageHeight="400px"
        openedImageWidth="400px"
        imageBorderRadius="30px"
        openedImageBorderRadius="30px"
        grayscale={false}
      />
    </div>
  );
}

export default Activity;
