import { useState } from "react";
import "../styles/Sidebar.css";
import "../styles/SidebarComponents.css";
import { PersonalSection } from "./SidebarComponents/PersonalSection";
import { EducationSection } from "./SidebarComponents/EducationSection";
import { WorkSection } from "./SidebarComponents/WorkSection";
import { ProjectsSection } from "./SidebarComponents/ProjectsSection";
import { SkillsSection } from "./SidebarComponents/SkillsSection";

export function Sidebar({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  workData,
  setWorkData,
  projectsData,
  setProjectsData,
  skillsData,
  setSkillsData,
}) {
  const [activeSection, setActiveSection] = useState("personal");

  function handleSectionChange(e, sectionName) {
    setActiveSection(sectionName);
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebarNav">
          <div
            className={`personalBtn sidebarNavBtn ${
              activeSection === "personal" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "personal")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </div>
          <div
            className={`educationBtn sidebarNavBtn ${
              activeSection === "education" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "education")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </div>
          <div
            className={`workBtn sidebarNavBtn ${
              activeSection === "work" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "work")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
            </svg>
          </div>
          <div
            className={`projectsBtn sidebarNavBtn ${
              activeSection === "projects" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "projects")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
            </svg>
          </div>
          <div
            className={`skillsBtn sidebarNavBtn ${
              activeSection === "skills" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "skills")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" />
            </svg>
          </div>
        </div>
        <div className="sidebarContent">
          {activeSection === "personal" && (
            <PersonalSection
              personalData={personalData}
              setPersonalData={setPersonalData}
            />
          )}
          {activeSection === "education" && (
            <EducationSection
              educationData={educationData}
              setEducationData={setEducationData}
            />
          )}
          {activeSection === "work" && (
            <WorkSection workData={workData} setWorkData={setWorkData} />
          )}
          {activeSection === "projects" && (
            <ProjectsSection
              projectsData={projectsData}
              setProjectsData={setProjectsData}
            />
          )}
          {activeSection === "skills" && (
            <SkillsSection
              skillsData={skillsData}
              setSkillsData={setSkillsData}
            />
          )}
        </div>
      </div>
    </>
  );
}
