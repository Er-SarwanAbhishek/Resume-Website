import React, { useContext, useState } from "react";
import "../Resume-process-css/job-exp.css";
import GlobalContext from "../context/GlobalContext";
import ResumePreviewpopup from "../popup/ResumePreviewpopup";
import { TemplateData } from "../templates/TemplateData";
import { AiTextPopup } from "../popup/AiTextPopup";
import ProjectJobEduTextEditor from "../popup/ProjectJobEduTextEditor";
import MonthYearPicker from "../popup/MonthYearPicker";

export default function JobExp() {

  const [aiTextSuggestion, setAiTextSuggestion] = useState(false);
  const [isMonthYearPopup, setIsMonthYearPopup] = useState(false);
  const {
    currentTemplateData,
    DeleteItem,
    AddItem,
    ChangeListValue,
    ChangeSectionValue,
    authtoken,
    backServer,
  } = useContext(GlobalContext);

  const index = 4; // Ensure this index corresponds to the job experience section
  const { sectionName, list } = currentTemplateData.AllSections[index];

  const [isPreview, setIsPreview] = useState(false);

  const objectData = {
    listId: new Date().getTime().toString(),
    companyName: "Company Name",
    jobRole: "Your designation",
    startDate: "YY",
    endDate: "YY",
    aboutJob: "Description",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authtoken) {
        localStorage.setItem(
          "currentTemplate",
          JSON.stringify(currentTemplateData)
        );
        return; // Prevents further execution if no auth token
      }

      await fetch(`${backServer}/dashboard/update-templates`, {
        method: "POST",
        body: JSON.stringify(currentTemplateData),
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });
      // Save in local storage
      localStorage.setItem("currentTemplate", JSON.stringify(currentTemplateData));
    } catch (error) {
      console.log("Server error.", error);
    }
  };

  const handleTextChange = (newText, listId) => {
    ChangeListValue({ target: { name: 'aboutJob', value: newText } }, index, listId);
    setAiTextSuggestion(false);
  };

  return (
    <>
      <div className="job-exp">
        <h1>Job Experience</h1>
        <form onSubmit={handleSubmit}>
          <div className="job-exp-edit-section">
            <input
              id="section-name"
              type="text"
              name="sectionName"
              value={sectionName}
              placeholder="Section Name"
              onChange={(e) => ChangeSectionValue(e, index)}
              required
            />
          </div>
          {list.map((element) => {
            const {
              listId,
              companyName,
              jobRole,
              startDate,
              endDate,
              aboutJob,
            } = element;

            return (
              <div key={listId}>
                <div className="job-exp-datepic-monthdate-input">
                  <div className="job-exp-label-section">
                    <input
                      className="section"
                      type="text"
                      name="companyName"
                      value={companyName}
                      onChange={(e) => ChangeListValue(e, index, listId)}
                      placeholder="Company Name"
                      required
                    />
                  </div>
                  <div className="job-exp-label-section">
                    <input
                      className="section"
                      type="text"
                      name="jobRole"
                      value={jobRole}
                      onChange={(e) => ChangeListValue(e, index, listId)}
                      placeholder="Job Role"
                      required
                    />
                  </div>
                </div>
                <div className="job-exp-section-pic-date">
                  <div className="job-exp-datepic-monthdate">
                    <div className="month-year-pickers">
                      <div className="start-end-date" onClick={() => setIsMonthYearPopup({ listId, isStartDate: true })}>
                        <p>{startDate}</p>
                        <i class="fa-regular fa-calendar-range"></i>
                      </div>
                      {isMonthYearPopup.listId === listId && isMonthYearPopup.isStartDate ? <MonthYearPicker cancel={() => setIsMonthYearPopup(false)} startingDate={true} listId={listId} sectionIndex={index} name={"startDate"} /> : <></>}
                    </div>
                    <div className="month-year-pickers">
                      <div className="start-end-date" onClick={() => setIsMonthYearPopup({ listId, isStartDate: false })}>
                        <p>{endDate}</p>
                        <i class="fa-regular fa-calendar-range"></i>
                      </div>
                      {isMonthYearPopup.listId === listId && !isMonthYearPopup.isStartDate ? <MonthYearPicker cancel={() => setIsMonthYearPopup(false)} startingDate={false} listId={listId} sectionIndex={index} name={"endDate"} /> : <></>}
                    </div>
                  </div>
                </div>
                <div className="textarea-delete-section">
                  <ProjectJobEduTextEditor
                    name="aboutjob"
                    value={aboutJob}
                    onChange={(newText) => handleTextChange(newText, listId)}
                    required
                    placeholder='Description'
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
                      prompt={aboutJob}
                      cancel={() => setAiTextSuggestion(false)}
                      onTextChange={(newText) => handleTextChange(newText, listId)}
                    />
                  )}
                </div>

                <div className="job-exp-del-add-button">
                  <hr />
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => DeleteItem(index, listId)}
                  ></i>
                </div>
              </div>
            );
          })}
          <div className="job-exp-add">
            <a href="#" onClick={() => AddItem(index, objectData)}>
              <i className="fa-solid fa-plus"></i> Add Section
            </a>
          </div>
          <div className="job-next-button">
            <button type="button" onClick={() =>
              setIsPreview(
                <ResumePreviewpopup
                  element={TemplateData.map((element) => {
                    if (element.id === currentTemplateData.id)
                      return <element.element resumeData={currentTemplateData} />;
                  })}
                  cancel={() => setIsPreview(false)}
                />
              )
            }>
              Save and Preview
            </button>
          </div>
        </form>
      </div>
      {isPreview}
    </>
  );
}
