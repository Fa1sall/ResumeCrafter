import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import html2pdf from "html2pdf.js";

import "../styles/ResumeContainer.css";

export function ResumeContainer({
  personalData,
  educationData,
  workData,
  projectsData,
  skillsData,
  settingsData,
  handleClearResume,
}) {
  const [isPrinting, setIsPrinting] = useState(false);

  const resumeRef = useRef();

  useEffect(() => {
    if (!isPrinting) {
      resumeRef.current.classList.add("scaleResume");
    } else {
      resumeRef.current.classList.remove("scaleResume");
    }
  }, [isPrinting]);

  const handleDownload = () => {
    const element = resumeRef.current;

    setIsPrinting(true);

    const opt = {
      margin: [-0.15, 0, -0.2, 0],
      filename: "Resume_Faisal.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        setIsPrinting(false);
      });
  };

  return (
    <div className="resumeContainer">
      <div className="resumeHeader">
        <div>Preview</div>
        <div>
          <div className="resumeButtonControls">
            <button
              className="clearResumeButton"
              onClick={handleClearResume}
              aria-label="Clear Resume"
            >
              Clear Resume
            </button>
            <button
              className="downloadPDFButton"
              onClick={handleDownload}
              aria-label="Download Resume as PDF"
            >
              Download as PDF
            </button>
          </div>
        </div>
      </div>
      <div
        className="resumeContent"
        id="resumeContent"
        ref={resumeRef}
        style={{ fontSize: `${settingsData.fontSize}rem` }}
      >
        <div className="personalSection">
          <div className="resName">
            <div className="resFirstName">
              {personalData.firstName && personalData.firstName.trim()}
            </div>
            {personalData.firstName && <span>&nbsp;</span>}
            <div className="resLastName">
              {personalData.lastName && personalData.lastName.trim()}
            </div>
          </div>
          <div className="spacer"></div>
          <div className="resPersonalDetails">
            <div className="resPhone">
              {personalData.phone && <>{personalData.phone.trim()}</>}
            </div>
            <div className="resEmail">
              {personalData.email && (
                <>
                  <span>&nbsp;|&nbsp;</span>
                  {personalData.email.trim()}
                </>
              )}
            </div>
            {personalData.socials && (
              <>
                <span>&nbsp;|&nbsp;</span>
                <a
                  className="resSocials"
                  href={`https://${personalData.socials.trim()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalData.socials.trim()}
                </a>
              </>
            )}
            {personalData.website && (
              <>
                <span>&nbsp;|&nbsp;</span>
                <a
                  className="resWebsite"
                  href={`https://${personalData.website.trim()}`}
                >
                  {personalData.website && `${personalData.website.trim()}`}
                </a>
              </>
            )}
          </div>
          <div className="spacer"></div>
          <div className="resProfSummaryContainer">
            {personalData.professionalSummary && (
              <>
                <div className="resSectionTitle">Professional Summary</div>
                <hr className="divider" />
                <div className="resProfSummary">
                  {personalData.professionalSummary.trim()}
                </div>
              </>
            )}
            <div className="spacer"></div>
          </div>
        </div>
        <div className="educationSection">
          {educationData.length > 0 && (
            <>
              <div className="resSectionTitle">Education</div>
              <hr className="divider" />
              {educationData.map((entry, index) => {
                return (
                  <div className={`resEducation-${index}`} key={index}>
                    <div className="splitLine">
                      {entry.degree && (
                        <>
                          <div className={`resDegree-${index} boldTitle`}>
                            {entry.degree.trim()}
                          </div>
                          <div className="resDate">
                            {entry.startDate && (
                              <div className={`resStartDate-${index}`}>
                                {entry.startDate.trim()}
                              </div>
                            )}
                            {entry.endDate && <span>&nbsp;-&nbsp;</span>}
                            {entry.endDate && (
                              <div className={`resEndDate-${index}`}>
                                {entry.endDate.trim()}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="splitLine">
                      {entry.institution && (
                        <div className={`resInstitution-${index}`}>
                          {entry.institution.trim()}
                        </div>
                      )}
                      {entry.location && (
                        <div className={`resLocation-${index}`}>
                          {entry.location.trim()}
                        </div>
                      )}
                    </div>
                    {entry.grade && (
                      <div className={`resGrade-${index}`}>
                        {entry.grade.trim()}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="spacer"></div>
            </>
          )}
        </div>
        <div className="workSection">
          {workData.length > 0 && (
            <>
              <div className="resSectionTitle">Work Experience</div>
              <hr className="divider" />
              {workData.map((entry, index) => {
                return (
                  <div className={`resWork-${index}`} key={index}>
                    <div className="splitLine">
                      {entry.workTitle && (
                        <>
                          <div className={`resWorkTitle-${index} boldTitle`}>
                            {entry.workTitle.trim()}
                          </div>
                          <div className="resDate">
                            {entry.startDate && (
                              <div className={`resStartDate-${index}`}>
                                {entry.startDate.trim()}
                              </div>
                            )}
                            {entry.endDate && <span>&nbsp;-&nbsp;</span>}
                            {entry.endDate && (
                              <div className={`resEndDate-${index}`}>
                                {entry.endDate.trim()}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="splitLine">
                      {entry.company && (
                        <div className={`resCompany-${index}`}>
                          {entry.company.trim()}
                        </div>
                      )}
                      {entry.location && (
                        <div className={`resLocation-${index}`}>
                          {entry.location.trim()}
                        </div>
                      )}
                    </div>
                    <div className={`resWorkAchievements-${index}`}>
                      <ul>
                        {entry.achievements.map((ach, achIndex) => {
                          return (
                            <li className={`wa-${achIndex}`} key={achIndex}>
                              {ach.trim()}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
              <div className="spacer"></div>
            </>
          )}
        </div>
        <div className="projectsSection">
          {projectsData.length > 0 && (
            <>
              <div className="resSectionTitle">Projects</div>
              <hr className="divider" />
              {projectsData.map((entry, index) => {
                return (
                  <div className={`resProject-${index}`} key={index}>
                    <div className="splitLine">
                      <div className="splitProjectLine">
                        <div className={`resProjectTitle-${index} boldTitle`}>
                          {entry.title}
                        </div>
                        {entry.skillsUsed && (
                          <>
                            <span>&nbsp;|&nbsp;</span>
                            <span className={`resSkill=${index}`}>
                              {entry.skillsUsed.trim()}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="resDate">
                        {entry.startDate && (
                          <div className={`resStartDate-${index}`}>
                            {entry.startDate.trim()}
                          </div>
                        )}
                        {entry.endDate && <span>&nbsp;-&nbsp;</span>}
                        {entry.endDate && (
                          <div className={`resEndDate-${index}`}>
                            {entry.endDate.trim()}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`resProjectAchievements-${index}`}>
                      <ul>
                        {entry.achievements.map((ach, achIndex) => {
                          return (
                            <li className={`pa-${achIndex}`} key={achIndex}>
                              {ach.trim()}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
              <div className="spacer"></div>
            </>
          )}
        </div>
        <div className="skillsSection">
          {skillsData.length > 0 && (
            <>
              <div className="resSectionTitle">Skills</div>
              <hr className="divider" />
              {skillsData.map((entry, index) => {
                return (
                  <div className={`resSkill-${index}`} key={index}>
                    <div className="splitProjectLine">
                      <div className="skillTitle boldTitle">
                        {entry.category}
                      </div>
                      {entry.skills.length > 0 && (
                        <>
                          <span>&nbsp;|&nbsp;</span>
                          <span className={`resSkillContent${index}`}>
                            {entry.skills.map((skillName, i) => (
                              <span key={i}>
                                <span className={`s-${i}`}>{skillName}</span>
                                {i !== entry.skills.length - 1 && (
                                  <span>,&nbsp;</span>
                                )}
                              </span>
                            ))}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
