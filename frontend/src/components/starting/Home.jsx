import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ResumePreviewpopup from "../popup/ResumePreviewpopup";
import GlobalContext from "../context/GlobalContext";
import ChooseTemplate from "./ChooseTemplate";
import HowToDesign from "./HowToDesign";
import { DesignationBasedResumeGuidance } from "./DesignationBasedResumeGuidance.jsx";
import ExplainLivePreview from "./ExplainLivePreview.jsx";
import InstructionPopup from "../popup/InstructionPopup.jsx";
import { HomeCta } from "./HomeCta.jsx";
import QrcodeSection from "./QrcodeSection.jsx";

export default function Home() {
  const navigate = useNavigate();
  const [isPrevTemplate, setIsPrevTemplate] = useState(false);
  const [instructionPopup, setInstructionPopup] = useState(false);
  const { authtoken, backServer, HideOverflowOnPop } =
    useContext(GlobalContext);

  useEffect(() => {
    const checkAndShowPopup = () => {
      const lastShownDate = localStorage.getItem("popupLastShownDate");
      const today = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
      console.log(backServer);

      if (lastShownDate !== today) {
        // Show popup if not shown today
        setInstructionPopup(true);
        HideOverflowOnPop(true);
        localStorage.setItem("popupLastShownDate", today); // Update the date in localStorage
      }
    };

    // Show the popup after 2 seconds if it's the first time today
    const timer = setTimeout(checkAndShowPopup, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const EditTemplate = async (element) => {
    try {
      if (!authtoken) {
        localStorage.setItem("currentTemplate", JSON.stringify(element));
        window.location.href = "/edit-resume";
        return;
      }

      const tempResponse = await fetch(`${backServer}/dashboard/add-template`, {
        method: "PUT",
        body: JSON.stringify(element),
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });
      const tempData = await tempResponse.json();

      localStorage.setItem(
        "currentTemplate",
        JSON.stringify(tempData.currentTemplate)
      );
      window.location.href = "/edit-resume";
    } catch (error) {
      console.log("Server error: ", error);
    }
  };

  return (
    <>
      {/* POPUPS */}
      {isPrevTemplate ? (
        <ResumePreviewpopup
          element={isPrevTemplate[0]}
          cancel={() => {
            setIsPrevTemplate(false);
            HideOverflowOnPop(false);
          }}
          useTemp={true}
          funcUseTemp={() => EditTemplate(isPrevTemplate[1])}
        />
      ) : (
        <></>
      )}

      {instructionPopup ? (
        <InstructionPopup
          cancel={() => {
            setInstructionPopup(false);
            HideOverflowOnPop(false);
          }}
        />
      ) : (
        <></>
      )}

      {/* ********** BANNER ********** */}

      <div className="home-banner">
        <img
          src="background-gradient.svg"
          alt=""
          className="background-gradient"
          draggable="false"
        />
        <img
          src="background-gradient.svg"
          alt=""
          className="background-gradient-2"
          draggable="false"
        />

        {/* **** */}

        <div className="row">
          <div className="column1 column">
            <h1>
              Career Gennie Provides{" "}
              <span className="gradient-text"> Professional Templates </span>{" "}
              that Ensure Your Success in Job Progress
            </h1>
            <p>
              Unlock your potential with Career Gennie where you can find
              advanced professional templates for CVs and resumes. Our resources
              are tailored to enhance your career journey with precision and
              effectiveness that empower you to stand out in today’s competitive
              job market.
            </p>
            <div className="only-tblt">
              <h4>Selected resume at</h4>
              <div className="companies">
                <img src="./images/google logo.png" alt="" />
                <img src="./images/facebook logo.png" alt="" />
                <img src="./images/Amazon-Logo.png" alt="" />
              </div>
            </div>
            <button
              onClick={() => navigate("/templates")}
              className="create-cv-btn"
            >
              Create CV
            </button>
            {/* <button className="check-score-btn">Check Score</button> */}
          </div>

          <div className="column2 column">
            <img src="/hired-img-a.png" alt="Image 1" className="slide" />
            <img src="/hired-img-b.png" alt="Image 2" className="slide" />
            <img src="/hired-img-c.png" alt="Image 3" className="slide" />
          </div>

          <div className="mobile-section-selected">
            <h4>Selected resume at</h4>
            <div className="companies">
              <img src="./images/google logo.png" alt="" />
              <img src="./images/facebook logo.png" alt="" />
              <img src="./images/Amazon-Logo.png" alt="" />
            </div>
            <button
              onClick={() => navigate("/templates")}
              className="create-cv-btn"
            >
              Create CV
            </button>
          </div>
        </div>
      </div>

      <ChooseTemplate home={true} />
      <HowToDesign />
      <DesignationBasedResumeGuidance
        editTemplate={(elem) => EditTemplate(elem)}
        setIsPrevTemplate={setIsPrevTemplate}
        HideOverflowOnPop={HideOverflowOnPop}
      />
      <QrcodeSection />
      <HomeCta />
      <ExplainLivePreview authtoken={authtoken} />
    </>
  );
}
