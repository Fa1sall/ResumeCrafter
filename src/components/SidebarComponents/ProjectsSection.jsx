export function ProjectsSection({ projectsData, setProjectsData }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedData = [...projectsData];
    updatedData[index][name] = value;
    setProjectsData(updatedData);
  }

  function handleAddProjects() {
    const updatedData = [
      ...projectsData,
      {
        title: "",
        skillsUsed: "",
        startDate: "",
        endDate: "",
        achievements: [],
      },
    ];
    setProjectsData(updatedData);
  }

  function handleDeleteProjects(index) {
    const updatedData = projectsData.filter((_, i) => i !== index);
    setProjectsData(updatedData);
  }

  function handleAchievementChange(e, index, achindex) {
    const value = e.target.value.trim();
    const updatedData = [...projectsData];
    updatedData[index].achievements[achindex] = value;
    setProjectsData(updatedData);
  }

  function handleAddAchievement(index) {
    const updatedData = [...projectsData];
    updatedData[index].achievements.push("");
    setProjectsData(updatedData);
  }

  function handleDeleteAchievement(workIndex, achIndex) {
    const updatedData = [...projectsData];
    updatedData[workIndex].achievements = updatedData[
      workIndex
    ].achievements.filter((_, i) => i !== achIndex);
    setProjectsData(updatedData);
  }

  return (
    <>
      <div className="workSection">
        <div className="sectionTitle">Projects</div>
        {projectsData.map((entry, index) => (
          <div key={index}>
            <label htmlFor={`projectTitle-${index}`} className="formLabel">
              Project Title
            </label>
            <input
              type="text"
              className="formInput"
              name="title"
              value={entry.title}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`skillsUsed-${index}`} className="formLabel">
              Skills Used (Separated By Commas)
            </label>
            <input
              type="text"
              className="formInput"
              name="skillsUsed"
              value={entry.skillsUsed}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`startDate-${index}`} className="formLabel">
              Start Date
            </label>
            <input
              type="text"
              className="formInput"
              name="startDate"
              value={entry.startDate}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`endDate-${index}`} className="formLabel">
              End Date
            </label>
            <input
              type="text"
              className="formInput"
              name="endDate"
              value={entry.endDate}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`achievements-${index}`} className="formLabel">
              Achievements
            </label>
            <div className="achievements">
              {entry.achievements.map((achEntry, achIndex) => (
                <div key={achIndex}>
                  <textarea
                    className="formTextarea"
                    value={achEntry}
                    onChange={(e) =>
                      handleAchievementChange(e, index, achIndex)
                    }
                    placeholder="Describe your achievement..."
                  />
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDeleteAchievement(index, achIndex)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className="buttonControls">
                <button
                  type="button"
                  className="addButton"
                  onClick={() => handleAddAchievement(index)}
                >
                  + Add Achievement
                </button>
                {projectsData.length > 1 && (
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteProjects(index)}
                  >
                    Delete Project
                  </button>
                )}
              </div>
              <hr className="divider" />
            </div>
          </div>
        ))}
        <button className="addButton" onClick={handleAddProjects}>
          Add Project
        </button>
      </div>
    </>
  );
}
