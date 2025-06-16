import { useState } from "react";
import "../styles/Sidebar.css";
import "../styles/SidebarComponents.css";
import { PersonalForm } from "./SidebarComponents/PersonalForm";
import { EducationForm } from "./SidebarComponents/EducationForm";
import { WorkForm } from "./SidebarComponents/WorkForm";
import { ProjectsForm } from "./SidebarComponents/ProjectsForm";
import { SkillsForm } from "./SidebarComponents/SkillsForm";
import { SettingsForm } from "./SidebarComponents/SettingsForm";

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
  settingsData,
  setSettingsData,
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
            tabIndex={0}
            role="button"
            aria-label="Personal Section"
            className={`personalBtn sidebarNavBtn ${
              activeSection === "personal" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "personal")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "personal");
              }
            }}
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
            tabIndex={0}
            role="button"
            aria-label="Education Section"
            className={`educationBtn sidebarNavBtn ${
              activeSection === "education" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "education")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "education");
              }
            }}
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
            tabIndex={0}
            role="button"
            aria-label="Work Section"
            className={`workBtn sidebarNavBtn ${
              activeSection === "work" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "work")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "work");
              }
            }}
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
            tabIndex={0}
            role="button"
            aria-label="Project Section"
            className={`projectsBtn sidebarNavBtn ${
              activeSection === "projects" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "projects")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "projects");
              }
            }}
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
            tabIndex={0}
            role="button"
            aria-label="Skills Section"
            className={`skillsBtn sidebarNavBtn ${
              activeSection === "skills" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "skills")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "skills");
              }
            }}
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
          <div
            tabIndex={0}
            role="button"
            aria-label="Settings Section"
            className={`educationBtn sidebarNavBtn ${
              activeSection === "settings" ? "activeBtn" : ""
            }`}
            onClick={(e) => handleSectionChange(e, "settings")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSectionChange(e, "settings");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
            </svg>
          </div>
        </div>
        <div className="sidebarContent">
          {activeSection === "personal" && (
            <PersonalForm
              personalData={personalData}
              setPersonalData={setPersonalData}
            />
          )}
          {activeSection === "education" && (
            <EducationForm
              educationData={educationData}
              setEducationData={setEducationData}
            />
          )}
          {activeSection === "work" && (
            <WorkForm workData={workData} setWorkData={setWorkData} />
          )}
          {activeSection === "projects" && (
            <ProjectsForm
              projectsData={projectsData}
              setProjectsData={setProjectsData}
            />
          )}
          {activeSection === "skills" && (
            <SkillsForm skillsData={skillsData} setSkillsData={setSkillsData} />
          )}
          {activeSection === "settings" && (
            <SettingsForm
              settingsData={settingsData}
              setSettingsData={setSettingsData}
            />
          )}
        </div>
      </div>
    </>
  );
}
