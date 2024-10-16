import React, { useRef, useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./AiTextPopup.css";
import { SkeletonLoader } from "./SkeletonLoader";

export const AiTextPopup = ({ prompt, cancel, onTextChange }) => {
  const textPopup = useRef();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const onClickHandler = async () => {
      setLoading(true);
      try {
        const genAI = new GoogleGenerativeAI(
          "AIzaSyDeKkrIQ_uSGDdYj9l3_4MykdI3XdrTxtk"
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const additionalText =
          // 'Enhance the provided text for a resume. Maintain grammatical accuracy, logical structure, and a formal tone.Present suggestions in a list format, beginning each sample on a new line without employing introductory words, special characters, or symbols. Separate samples using white spaces and line breaks.Develop 3 samples, ensuring each sample stays within a 60 to 80 word limit per sample. Refrain from mentioning word count, sample numbers, or any introductory elements. Conclude each sample with the word "END". Add appropriate keywords where necessary, or replace existing words with more relevant keywords.';

        // 'Please analyze and enhance the provided resume text while maintaining its original structure. Focus on improving clarity, coherence, and ATS (Applicant Tracking System) optimization by correcting grammatical errors and integrating strong, relevant keywords. Generate 3 different samples, each section must contain words between 40 to 60 words, and conclude each sample with "END" without mentioning word count or sample numbers or using any asterisks.(the answer must be in html format).Analyze the complete text again and dont include any heading like smaple number of somgthing like that';
        
        'Please analyze and enhance the provided resume text while maintaining its original structure. Focus on improving clarity, coherence, and ATS (Applicant Tracking System) optimization by correcting grammatical errors and integrating strong, relevant keywords while enchancing. Generate 3 different samples, each section must contain words between 40 to 60 words, and after closing tag make sure their must be a text"END" like(</p>END) without mentioning word count or sample numbers or using any asterisks.(the answer must be in html format).Analyze the complete text again and dont include any heading like smaple number of somgthing like that';

        const combinedPrompt = `${prompt}\nAdditional Context: ${additionalText}`;
        const result = await model.generateContent(combinedPrompt);
        setResult(result.response.text());
      } catch (error) {
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };
    onClickHandler();
  }, []);

  const formatResultAsList = (text) => {
    const items = text.split("END").filter((item) => item.trim() !== "");
    return (
      <ul className="result-list">
        {items.map((item, index) => (
          <div
            className="ai-gemini-each-list"
            key={index}
            onClick={() => handleItemClick(item.trim())}
            dangerouslySetInnerHTML={{ __html: item.trim() }}
          />
        ))}
      </ul>
    );
  };
  const handleItemClick = (item) => {
    if (onTextChange) {
      onTextChange(item);
    }
  };
  const handleClickOutside = (event) => {
    if (textPopup.current.contains(event.target)) return;
    cancel();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div
        className={`ai-generated-text-popup ${
          prompt === "" || prompt.split(" ").length < 10
            ? "invalid-prompt"
            : "valid-prompt"
        }`}
        ref={textPopup}
      >
        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            {prompt === "" || prompt.split(" ").length < 10
              ? "Enter valid data"
              : formatResultAsList(result)}
          </>
        )}
      </div>
    </>
  );
};
