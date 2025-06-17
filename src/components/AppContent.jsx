import "../styles/AppContent.css";
import { Sidebar } from "./Sidebar";
import { ResumeContainer } from "./ResumeContainer";
import { useState } from "react";

export function AppContent() {
  const [personalData, setPersonalData] = useState({
    firstName: "Faisal",
    lastName: "Irfan",
    phone: "9876543210",
    email: "email@example.com",
    socials: "github.com/Fa1sall",
    website: "yourwebsite.com",
    professionalSummary:
      "Aspiring full-stack developer with a focus on building clean and scalable applications using React and Spring Boot. Comfortable working across the stack, with a strong eye for UI and attention to code quality. Always eager to learn, improve, and take on real-world projects that push my skills forward.",
  });

  const [educationData, setEducationData] = useState([
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Your University",
      grade: "CGPA : 9.45",
      startDate: "2022",
      endDate: "2026",
      location: "Location",
    },
  ]);

  const [workData, setWorkData] = useState([
    {
      workTitle: "Frontend Intern",
      company: "Company",
      startDate: "June 2025",
      endDate: "July 2025",
      location: "Location",
      achievements: [
        "Built a responsive POS dashboard using React and Tailwind CSS.",
        "Collaborated with backend team to integrate AI-based features.",
      ],
    },
  ]);

  const [projectsData, setProjectsData] = useState([
    {
      title: "Resume Crafter",
      skillsUsed: "React.js, html2pdf.js",
      startDate: "May 2025",
      endDate: "June 2025",
      achievements: [
        "Developed a responsive single-page resume builder with live preview and downloadable PDF export using html2pdf.js.",
        "Designed modular, state-driven form sections (Personal, Work, Projects, etc.) with React and dynamic input handling.",
        "Implemented accessibility features, section-wise editing, and consistent print-ready styling across screen sizes.",
      ],
    },
    {
      title: "WeatherScope",
      skillsUsed: "HTML, CSS, JS, VisualCrossing API, date-fns",
      startDate: "March 2025",
      endDate: "April 2025",
      achievements: [
        "Built a dynamic weather application using JavaScript that fetches real-time data from a public weather API.",
        "Implemented hourly and daily weather breakdowns with filtering for relevant time slots to improve readability.",
        "Designed a clean, responsive UI with intuitive data presentation for temperature, precipitation, and location info.",
      ],
    },
  ]);

  const [skillsData, setSkillsData] = useState([
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Spring Boot", "Node.js"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "VS Code", "Netlify", "Vercel"],
    },
    {
      category: "Libraries",
      skills: ["Tailwind CSS", "Redux", "Axios"],
    },
    {
      category: "Certifications",
      skills: [
        "Java Programming 1 - mooc.fi",
        "Java Programming 2 - mooc.fi",
        "Intel Unnati Industrial Training",
      ],
    },
  ]);

  const [settingsData, setSettingsData] = useState({
    fontSize: "0.8",
  });

  function handleClearResume() {
    setPersonalData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      socials: "",
      website: "",
      professionalSummary: "",
    });
    setEducationData([]);
    setWorkData([]);
    setProjectsData([]);
    setSkillsData([]);
    setSettingsData({ fontSize: "0.8" });
  }

  return (
    <div className="appContent">
      <Sidebar
        personalData={personalData}
        setPersonalData={setPersonalData}
        educationData={educationData}
        setEducationData={setEducationData}
        workData={workData}
        setWorkData={setWorkData}
        projectsData={projectsData}
        setProjectsData={setProjectsData}
        skillsData={skillsData}
        setSkillsData={setSkillsData}
        settingsData={settingsData}
        setSettingsData={setSettingsData}
      />

      <ResumeContainer
        personalData={personalData}
        educationData={educationData}
        workData={workData}
        projectsData={projectsData}
        skillsData={skillsData}
        settingsData={settingsData}
        handleClearResume={handleClearResume}
      />
    </div>
  );
}
