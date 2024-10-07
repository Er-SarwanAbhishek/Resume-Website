import React, { useContext, useState, useRef, useEffect } from "react";
import "./ResumeDashboard.css";
import GlobalContext from "../context/GlobalContext";
import { TemplateData } from "../templates/TemplateData";
import { AtsScorePopup } from "../popup/AtsScorePopup";
import ResumePreviewpopup from "../popup/ResumePreviewpopup"; 
import { AtsSkeletonLoader } from "../popup/AtsSkeletonLoader";

export default function ResumeDashboard({highlightSectionClass}) {
  const { currentTemplateData, setAtsScoreGemini } = useContext(GlobalContext);
  const [isResumePreview, setIsResumePreview] = useState(false);
  const templateRef = useRef();

  const getInnerContent = () => {
    if (templateRef.current) {
      const html = templateRef.current.innerHTML;
      const text = templateRef.current.innerText;

      setAtsScoreGemini([html, text]);

    }
  };

  useEffect(() => {
    getInnerContent();
  }, [currentTemplateData]); 


  const handleResumePreview = () => {
    setIsResumePreview(true);
  };

  return (
    <>
      <div className={`prev-wrapper ${highlightSectionClass}`}>
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
