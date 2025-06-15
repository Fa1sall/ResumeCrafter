export function WorkSection({ workData, setWorkData }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedData = [...workData];
    updatedData[index][name] = value.trim();
    setWorkData(updatedData);
  }

  function handleAddWork() {
    const updatedData = [
      ...workData,
      {
        workTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        achievements: [],
      },
    ];
    setWorkData(updatedData);
  }

  function handleDeleteWork(index) {
    const updatedData = workData.filter((_, i) => i !== index);
    setWorkData(updatedData);
  }

  function handleAchievementChange(e, index, achindex) {
    const value = e.target.value.trim();
    const updatedData = [...workData];
    updatedData[index].achievements[achindex] = value;
    setWorkData(updatedData);
  }

  function handleAddAchievement(index) {
    const updatedData = [...workData];
    updatedData[index].achievements.push("");
    setWorkData(updatedData);
  }

  function handleDeleteAchievement(workIndex, achIndex) {
    const updatedData = [...workData];
    updatedData[workIndex].achievements = updatedData[
      workIndex
    ].achievements.filter((_, i) => i !== achIndex);
    setWorkData(updatedData);
  }

  return (
    <>
      <div className="workSection">
        <div className="sectionTitle">Work</div>
        {workData.map((entry, index) => (
          <div key={index}>
            <label htmlFor={`workTitle-${index}`} className="formLabel">
              Work Title
            </label>
            <input
              type="text"
              className="formInput"
              name="workTitle"
              value={entry.workTitle}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`company-${index}`} className="formLabel">
              Company
            </label>
            <input
              type="text"
              className="formInput"
              name="company"
              value={entry.company}
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
            <label htmlFor={`location-${index}`} className="formLabel">
              Location
            </label>
            <input
              type="text"
              className="formInput"
              name="location"
              value={entry.location}
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
                {workData.length > 1 && (
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteWork(index)}
                  >
                    Delete Work
                  </button>
                )}
              </div>
              <hr className="divider" />
            </div>
          </div>
        ))}
        <button className="addButton" onClick={handleAddWork}>
          Add Work
        </button>
      </div>
    </>
  );
}
