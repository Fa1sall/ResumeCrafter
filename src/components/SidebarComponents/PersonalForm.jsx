export function PersonalForm({ personalData, setPersonalData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="personalForm">
      <div className="formTitle">Personal</div>
      <label className="formLabel" htmlFor="firstName">
        First Name
      </label>
      <input
        type="text"
        className="formInput"
        name="firstName"
        value={personalData.firstName}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="lastName">
        Last Name
      </label>
      <input
        type="text"
        className="formInput"
        name="lastName"
        value={personalData.lastName}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        className="formInput"
        name="phone"
        value={personalData.phone}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        className="formInput"
        name="email"
        value={personalData.email}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="linkedin">
        Socials (Linkedin | Github)
      </label>
      <input
        type="text"
        className="formInput"
        name="socials"
        value={personalData.socials}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="website">
        Website
      </label>
      <input
        type="text"
        className="formInput"
        name="website"
        value={personalData.website}
        onChange={handleChange}
      />

      <label className="formLabel" htmlFor="professionalSummary">
        Professional Summary
      </label>
      <textarea
        name="professionalSummary"
        className="formTextarea"
        value={personalData.professionalSummary}
        onChange={handleChange}
      />
    </div>
  );
}
