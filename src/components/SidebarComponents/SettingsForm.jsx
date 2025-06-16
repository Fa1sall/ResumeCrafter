export function SettingsForm({ settingsData, setSettingsData }) {
  function handleFontSizeChange(e) {
    const newFontSize = e.target.value;
    if (isNaN(newFontSize)) {
      return;
    }
    setSettingsData((prevData) => ({
      ...prevData,
      fontSize: newFontSize,
    }));
  }

  return (
    <div className="settingsForm">
      <div className="formTitle">Settings</div>
      <label htmlFor="resumFontSize" className="formLabel">
        Enter Resume Font Size (in rem)
      </label>
      <input
        type="number"
        className="formInput"
        step="0.1"
        min="0.5"
        max="3"
        value={settingsData.fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}
