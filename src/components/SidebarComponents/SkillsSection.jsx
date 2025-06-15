import { useState } from "react";

export function SkillsSection({ skillsData, setSkillsData }) {
  const [newSkillInputs, setNewSkillInputs] = useState(
    skillsData.map(() => "")
  );

  const [newCategoryInput, setNewCategoryInput] = useState("");

  function handleSkillChange(e, index, skillIndex) {
    const value = e.target.value.trim();
    const updatedData = [...skillsData];
    updatedData[index].skills[skillIndex] = value;
    setSkillsData(updatedData);
  }

  function handleAddSkill(index) {
    const newSkill = newSkillInputs[index];
    if (!newSkill) {
      return;
    }
    const updatedData = [...skillsData];
    updatedData[index].skills.push(newSkill);
    setSkillsData(updatedData);

    //clear new skill input
    const skillInputs = [...newSkillInputs];
    skillInputs[index] = "";
    setNewSkillInputs(skillInputs);
  }

  function handleDeleteSkill(index, skillIndex) {
    const updatedData = [...skillsData];
    updatedData[index].skills = updatedData[index].skills.filter(
      (_, i) => i !== skillIndex
    );
    setSkillsData(updatedData);
  }

  function handleAddNewSkillChange(e, index) {
    const skillInputs = [...newSkillInputs];
    skillInputs[index] = e.target.value.trim();
    setNewSkillInputs(skillInputs);
  }

  function handleAddNewCategoryChange(e) {
    setNewCategoryInput(e.target.value);
  }

  function handleAddCategory() {
    const newCategory = newCategoryInput.trim();
    const updatedData = [
      ...skillsData,
      {
        category: newCategory,
        skills: [],
      },
    ];
    setSkillsData(updatedData);

    //clear category input
    setNewCategoryInput("");
  }

  function handleDeleteCategory(index) {
    const updatedData = [...skillsData].filter((_, i) => i !== index);
    setSkillsData(updatedData);
  }

  return (
    <div className="skillsSection">
      <div className="sectionTitle">Skills</div>
      {skillsData.map((entry, index) => (
        <div key={index}>
          <label className={`formLabel category-${entry.category}`}>
            {entry.category}
          </label>
          {entry.skills.map((skill, skillIndex) => (
            <div className={`skill-${skillIndex}`} key={skillIndex}>
              <input
                type="text"
                className="formInput"
                name="skill"
                value={skill}
                onChange={(e) => handleSkillChange(e, index, skillIndex)}
                key={index}
              />
              <div
                className="deleteButton"
                onClick={() => handleDeleteSkill(index, skillIndex)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            </div>
          ))}
          <div className="buttonControls">
            <div className="addSkillsControl">
              <input
                type="text"
                className="formInput"
                placeholder="Add Skill"
                value={newSkillInputs[index]}
                onChange={(e) => handleAddNewSkillChange(e, index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddSkill(index);
                  }
                }}
              />
              <button
                className="addButton"
                onClick={() => handleAddSkill(index)}
              >
                +
              </button>
            </div>
            <div className="deleteControl">
              <button
                className="deleteButton"
                onClick={() => handleDeleteCategory(index)}
              >
                Delete {entry.category}
              </button>
            </div>
          </div>
          <hr className="divider" />
        </div>
      ))}
      <div className="addCategoryContainer">
        <input
          type="text"
          className="formInput"
          placeholder="Enter New Category"
          value={newCategoryInput}
          onChange={handleAddNewCategoryChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddCategory(e);
            }
          }}
        />
        <button className="addButton" onClick={handleAddCategory}>
          Add
        </button>
      </div>
    </div>
  );
}
