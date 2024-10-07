import React, { useRef, useState, useEffect, useContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./AtsScorePopup.css";
import GlobalContext from "../context/GlobalContext";
import AtsAnalzer from "./AtsAnalzer";
import { AtsSkeletonLoader } from "./AtsSkeletonLoader";

export const AtsScorePopup = ({ cancel }) => {
  const textPopup = useRef();
  const [result, setResult] = useState("");
  const [improvementSuggestions, setImprovementSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { atsScoreGemini } = useContext(GlobalContext);

  useEffect(() => {
    const fetchAtsScore = async () => {
      setLoading(true);
      setError(null);
      try {
        const genAI = new GoogleGenerativeAI('AIzaSyDeKkrIQ_uSGDdYj9l3_4MykdI3XdrTxtk');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const additionalText = 'Use this HTML and text content to analyze the keywords, and score the resume out of 100. Just tell the resume score, nothing else.';
        const combinedPrompt = `HTML Content: ${atsScoreGemini[0]}\nText Content: ${atsScoreGemini[1]}\n${additionalText}`;

        const response = await model.generateContent(combinedPrompt);
        if (response && response.response && response.response.text) {
          setResult(response.response.text);
        } else {
          throw new Error("Invalid response structure");
        }

        // Fetch improvement suggestions
        // const improvementPrompt = `Analyze the following resume data ${atsScoreGemini[1]} and suggest specific improvements to enhance ATS compatibility. Include suggestions for each section to improve ATS compatibility, with brief explanations. Not include issue, show suggestions only. Word count must be 50 in total. Provide this into the HTML form, nothing else.`;
        const improvementPrompt=`Analyze the following resume data ${atsScoreGemini[1]} and suggest specific improvements to enhance ATS compatibility. Include suggestions to improve ATS compatibility, with brief explanations. Not include issue, show suggestions only in the format of heading and the text must be short in 18 words. Provide this into the HTML form heading must be in h3 and description in paragraph, also remove if any '*' in heading or paragraph,use easy keywords nothing else.`;
        const improvementResponse = await model.generateContent(improvementPrompt);
        
        // Store improvement suggestions in a variable
        let suggestionsText = "";
        if (improvementResponse && improvementResponse.response && improvementResponse.response.text) {
          suggestionsText = improvementResponse.response.text;
          setImprovementSuggestions(suggestionsText);
        } else {
          throw new Error("Invalid response structure for improvements");
        }

      } catch (error) {
        console.error("Error generating content:", error);
        setError("An error occurred while generating the score or suggestions.");
      } finally {
        setLoading(false);
      }
    };

    fetchAtsScore();
  }, [atsScoreGemini]);

  const handleClickOutside = (event) => {
    if (textPopup.current && textPopup.current.contains(event.target)) return;
    cancel();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={`ats-score-popup common-pop-box ${loading ? "loading" : ""}`} ref={textPopup}>
      {loading ? (
        <AtsSkeletonLoader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <h2>Your ATS Score</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="cancel-btn" onClick={cancel}>
            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <AtsAnalzer value={result} />
          {improvementSuggestions && (
            <div className="improvement-suggestions" dangerouslySetInnerHTML={{ __html: improvementSuggestions }} />
          )}
        </>
      )}
    </div>
  );
};
