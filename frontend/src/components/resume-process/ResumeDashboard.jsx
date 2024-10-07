import React, { useContext, useState, useRef, useEffect } from "react";
import "./ResumeDashboard.css";
import GlobalContext from "../context/GlobalContext";
import { TemplateData } from "../templates/TemplateData";
import { AtsScorePopup } from "../popup/AtsScorePopup";
import ResumePreviewpopup from "../popup/ResumePreviewpopup"; 
import { AtsSkeletonLoader } from "../popup/AtsSkeletonLoader";

export default function ResumeDashboard() {
  const { currentTemplateData, setAtsScoreGemini } = useContext(GlobalContext);
  const [isAtsPreview, setIsAtsPreview] = useState(false);
  const [isResumePreview, setIsResumePreview] = useState(false);
  const [innerHTML, setInnerHTML] = useState("");
  const [innerText, setInnerText] = useState("");
  const templateRef = useRef();

  const getInnerContent = () => {
    if (templateRef.current) {
      const html = templateRef.current.innerHTML;
      const text = templateRef.current.innerText;

      setInnerHTML(html);
      setInnerText(text);
      setAtsScoreGemini([html, text]);

      setIsAtsPreview(true);
    }
  };

  useEffect(() => {
    getInnerContent();
  }, []); 


  const handleResumePreview = () => {
    setIsResumePreview(true);
  };

  return (
    <>
      <div className="prev-wrapper">
        <div className="resume-prev-section">
          <div className="resumeCV" ref={templateRef}>
            {TemplateData.map((element) => {
              if (element.id === currentTemplateData.id) {
                return <element.element key={element.id} resumeData={currentTemplateData} />;
              }
              return null;
            })}
          </div>

          {/* Preview Button */}
          {!isResumePreview && (
            <div className="resumecv-eye" onClick={handleResumePreview}>
              <i className="fa-regular fa-eye"></i>
            </div>
          )}
        </div>
      </div>

      {isResumePreview && (
        <ResumePreviewpopup
          element={TemplateData.map((element) => {
            if (element.id === currentTemplateData.id) {
              return <element.element key={element.id} resumeData={currentTemplateData} />;
            }
            return null;
          })}
          cancel={() => setIsResumePreview(false)}
        />
      )}
     
    </>
  );
}
