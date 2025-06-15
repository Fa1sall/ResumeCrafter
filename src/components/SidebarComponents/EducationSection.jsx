export function EducationSection({ educationData, setEducationData }) {
  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedData = [...educationData];
    updatedData[index][name] = value.trim();
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
    <div className="educationSection">
      <div className="sectionTitle">Education</div>
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
          <label className="formLabel" htmlFor={`startDate-${index}`}>
            Start Date
          </label>
          <input
            type="text"
            className="formInput"
            name="startDate"
            value={entry.startDate}
            onChange={(e) => handleChange(index, e)}
          />
          <label className="formLabel" htmlFor={`endDate-${index}`}>
            End Date
          </label>
          <input
            type="text"
            className="formInput"
            name="endDate"
            value={entry.endDate}
            onChange={(e) => handleChange(index, e)}
          />
          <label className="formLabel" htmlFor={`location-${index}`}>
            Location
          </label>
          <input
            type="text"
            className="formInput"
            name="location"
            value={entry.location}
            onChange={(e) => handleChange(index, e)}
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
