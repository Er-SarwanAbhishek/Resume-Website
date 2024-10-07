import React, { useContext, useEffect, useRef, useState } from "react";
import "./ManageSectionsPop.css";
import GlobalContext from "../context/GlobalContext";

const ManageSectionsPop = ({ cancel }) => {

  const ReqbackPopRef = useRef();
  const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
  const { AllSections } = currentTemplateData;
  const fixedSectionName = ["Summary", "Contact", "Projects", "Skills", "Job Exp", "Education"]

  const handleToggle = (index) => {
    setCurrentTemplateData(prevState => {
      const newData = { ...prevState };
      newData.AllSections[index] = { ...newData.AllSections[index], isSection: !AllSections[index].isSection };
      return newData;
    });
  };

  const ClosePopup = (e) => {
    if (ReqbackPopRef.current.contains(e.target)) {
      return;
    }
    cancel();
  };


  useEffect(() => {
    document.addEventListener("click", ClosePopup, true);
    return () => {
      document.removeEventListener("click", ClosePopup, true);
    };
  }, []);

  return (
    <div className="manage-required-details-popup common-pop-box" ref={ReqbackPopRef}>
      <h2>Manage Sections</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {AllSections.map((section, index) => {
        const { sectionId, isSection, sectionName } = section;
        return (
          <div
            className="manage-details"
            key={sectionId}
          >
            <span>{fixedSectionName[index]}</span>
            <div className="switch" onClick={() => handleToggle(index)}>
              <div className={`slider ${isSection ? "active" : ""}`}></div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ManageSectionsPop;
