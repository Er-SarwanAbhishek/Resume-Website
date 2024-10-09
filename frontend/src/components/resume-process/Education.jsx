import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/education.css';
import SaveAlert from '../alerts/SaveAlert';
import { AiTextPopup } from '../popup/AiTextPopup';

export default function JobExp() {
  const [aiTextSuggestion, setAiTextSuggestion] = useState(false);
  const { currentTemplateData, DeleteItem, AddItem, ChangeListValue, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
  const index = 5;
  const { sectionName, list } = currentTemplateData.AllSections[index];
  const navigate = useNavigate();

  // Define new entry template
  const objectData = {
    listId: new Date().getTime().toString(),
    collegeName: "College Name",
    course: "Your course",
    startDate: "2020",  // Default to only year
    endDate: "2020",    // Default to only year
    aboutEducation: "Description",
  };

  // Submit handler with async/await for saving template data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authtoken) {
        localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
        navigate('/edit-resume/job-exp');
        return;
      }

      // POST to backend
      await fetch(`${backServer}/dashboard/update-templates`, {
        method: "POST",
        body: JSON.stringify(currentTemplateData),
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authtoken,
        },
      });

      // Show save alert and save data to local storage
      setIsSaveData(<SaveAlert status={"show"} alertMsg={"All changes saved"} />);
      setTimeout(() => {
        setIsSaveData(<SaveAlert status={"hide"} alertMsg={"All changes saved"} />);
      }, 800);
      localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
      navigate('/edit-resume/job-exp');
    } catch (error) {
      console.log("Server error.", error);
    }
  };

  // Handle changes for AI text generation popup
  const handleTextChange = (newText, listId) => {
    ChangeListValue({ target: { name: 'aboutEducation', value: newText } }, index, listId);
    setAiTextSuggestion(false);
  };

  return (
    <div className="education-form">
      <h1>Education</h1>
      <form onSubmit={handleSubmit}>
        <div className="education-form-edit-section">
          <input
            id="education-section-name"
            type="text"
            name="sectionName"
            value={sectionName}
            placeholder="Section name"
            onChange={(e) => ChangeSectionValue(e, index)}
            required
          />
        </div>

        {list.map((element) => {
          const { listId, collegeName, course, startDate, endDate, aboutEducation } = element;

          return (
            <div key={listId}>
              <div className="education-form-datepic-monthdate-input">
                <div className="education-form-label-section">
                  <input
                    className="education-section"
                    type="text"
                    name="collegeName"
                    value={collegeName}
                    onChange={(e) => ChangeListValue(e, index, listId)}
                    placeholder="College name"
                    required
                  />
                </div>
                <div className="education-form-label-section">
                  <input
                    className="education-section"
                    type="text"
                    name="course"
                    value={course}
                    onChange={(e) => ChangeListValue(e, index, listId)}
                    placeholder="Degree"
                    required
                  />
                </div>
              </div>

              {/* Year Picker Section */}
              <div className="education-form-section-pic-date">
                <div className="education-form-datepic-monthdate">
                  <input
                    className="education-select-option"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={startDate}
                    onChange={(e) => ChangeListValue(e, index, listId)}
                    name="startDate"
                    placeholder="Start Year"
                  />
                </div>
                <div className="education-form-datepic">
                  <input
                    className="education-select-option"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={endDate}
                    onChange={(e) => ChangeListValue(e, index, listId)}
                    name="endDate"
                    placeholder="End Year"
                  />
                </div>
              </div>

              <div className="education-textarea-delete-section">
                <textarea
                  type="text"
                  name="aboutEducation"
                  value={aboutEducation}
                  onChange={(e) => ChangeListValue(e, index, listId)}
                  placeholder="Description"
                  required
                />
                <img
                  className="ai-text-suggestion-img"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                  alt="AI Suggestion"
                  title="Generate text"
                  draggable="false"
                  onClick={() => setAiTextSuggestion(listId)}
                />
                {aiTextSuggestion === listId && (
                  <AiTextPopup
                    prompt={aboutEducation}
                    cancel={() => setAiTextSuggestion(false)}
                    onTextChange={(newText) => handleTextChange(newText, listId)}
                  />
                )}
              </div>

              <div className="education-del-add-button">
                <hr />
                <a onClick={() => DeleteItem(index, listId)}>
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
            </div>
          );
        })}

        <div className="edu-add-button">
          <a onClick={() => AddItem(index, objectData)}>
            <i className="fa-solid fa-plus"></i> Add Section
          </a>
        </div>
        <div className="education-save-button">
          <button type="submit">Save and Next</button>
        </div>
      </form>
    </div>
  );
}
