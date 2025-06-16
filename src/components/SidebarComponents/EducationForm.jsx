export function EducationForm({ educationData, setEducationData }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedData = [...educationData];
    updatedData[index][name] = value;
    setEducationData(updatedData);
  }

  function handleAdd() {
    setEducationData([
      ...educationData,
      {
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        location: "",
      },
    ]);
  }

  function handleDelete(deletedIndex) {
    const updatedData = educationData.filter(
      (_, index) => index !== deletedIndex
    );

    setEducationData(updatedData);
  }

  return (
    <div className="educationForm">
      <div className="formTitle">Education</div>
      {educationData.map((entry, index) => (
        <div key={index} className={`educationEntry`}>
          <label htmlFor={`degree-${index}`} className="formLabel">
            Degree
          </label>
          <input
            type="text"
            className="formInput"
            name="degree"
            value={entry.degree}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor={`institution-${index}`} className="formLabel">
            Institution
          </label>
          <input
            type="text"
            className="formInput"
            name="institution"
            value={entry.institution}
            onChange={(e) => handleChange(e, index)}
          />
          <label htmlFor={`institution-${index}`} className="formLabel">
            Grade
          </label>
          <input
            type="text"
            className="formInput"
            name="grade"
            value={entry.grade}
            onChange={(e) => handleChange(e, index)}
          />
          <label className="formLabel" htmlFor={`startDate-${index}`}>
            Start Date
          </label>
          <input
            type="text"
            className="formInput"
            name="startDate"
            value={entry.startDate}
            onChange={(e) => handleChange(e, index)}
          />
          <label className="formLabel" htmlFor={`endDate-${index}`}>
            End Date
          </label>
          <input
            type="text"
            className="formInput"
            name="endDate"
            value={entry.endDate}
            onChange={(e) => handleChange(e, index)}
          />
          <label className="formLabel" htmlFor={`location-${index}`}>
            Location
          </label>
          <input
            type="text"
            className="formInput"
            name="location"
            value={entry.location}
            onChange={(e) => handleChange(e, index)}
          />
          {educationData.length > 1 && (
            <div className="deleteButtonContainer">
              <button
                className="deleteButton"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          )}
          <hr className="divider" />
        </div>
      ))}

      <button type="button" className="addButton" onClick={handleAdd}>
        + Add Education
      </button>
    </div>
  );
}
