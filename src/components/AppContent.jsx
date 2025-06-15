import "../styles/AppContent.css";
import { Sidebar } from "./Sidebar";
import { ResumeContainer } from "./ResumeContainer";
import { useState } from "react";

export function AppContent() {
  const [personalData, setPersonalData] = useState({
    firstName: "Faisal",
    lastName: "Irfan S",
    phone: "9876543210",
    email: "faisal@example.com",
    linkedin: "linkedin.com/in/faisalirfan",
    website: "faisaldev.com",
    professionalSummary:
      "Aspiring full-stack developer with a focus on building clean and scalable applications using React and Spring Boot.",
  });

  const [educationData, setEducationData] = useState([
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Your University",
      startDate: "2021",
      endDate: "2025",
      location: "India",
    },
  ]);

  const [workData, setWorkData] = useState([
    {
      workTitle: "Frontend Intern",
      company: "AI POS Systems",
      startDate: "May 2025",
      endDate: "June 2025",
      location: "Remote",
      achievements: [
        "Built a responsive POS dashboard using React and Tailwind CSS.",
        "Collaborated with backend team to integrate AI-based features.",
      ],
    },
  ]);

  const [projectsData, setProjectsData] = useState([
    {
      title: "CresCart",
      skillsUsed: "React, Node.js, MongoDB",
      startDate: "March 2025",
      endDate: "April 2025",
      achievements: [
        "Built a campus-specific e-commerce platform with peer-to-peer transactions.",
        "Implemented features like product listing, filters, and category-based search.",
      ],
    },
  ]);

  const [skillsData, setSkillsData] = useState([
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "C", "SQL"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Spring Boot", "Express.js"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "VS Code", "Postman", "Netlify"],
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
        "Intel Unnati AI Chatbot Developer",
      ],
    },
  ]);

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
      />

      <ResumeContainer
        personalData={personalData}
        educationData={educationData}
        workData={workData}
        projectData={projectsData}
        skillsData={skillsData}
      />
    </div>
  );
}
