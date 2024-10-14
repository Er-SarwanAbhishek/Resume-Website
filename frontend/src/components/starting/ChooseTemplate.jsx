import React, { useContext, useState, useEffect } from 'react'
import { TemplateData } from '../templates/TemplateData'
import './ChooseTemplate.css';
import ResumePreviewpopup from '../popup/ResumePreviewpopup';
import GlobalContext from '../context/GlobalContext';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';


export default function ChooseTemplate({ home }) {

  const [templateMenu, setTemplateMenu] = useState("all");
  const [isPrevTemplate, setIsPrevTemplate] = useState(false);
  const { authtoken, backServer, HideOverflowOnPop } = useContext(GlobalContext);
  const [tempArrSize, setTempArrSize] = useState(6);

  //TILT CONTROLS
  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 10,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const EditTemplate = async (element) => {
    try {
      if (!authtoken) {
        localStorage.setItem('currentTemplate', JSON.stringify(element))
        window.location.href = "/edit-resume";
        return;
      }

      const tempResponse = await fetch(`${backServer}/dashboard/add-template`, {
        method: 'PUT',
        body: JSON.stringify(element),
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authtoken
        }
      });
      const tempData = await tempResponse.json();

      localStorage.setItem('currentTemplate', JSON.stringify(tempData.currentTemplate))
      window.location.href = "/edit-resume";
    } catch (error) {
      console.log("Server error: ", error);
    }
  }

  //MEDIA QUERY
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 450px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setTempArrSize(2);
      } else {
        setTempArrSize(6);
      }
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {/* POPUPS */}
      {
        isPrevTemplate ? <ResumePreviewpopup element={isPrevTemplate[0]} cancel={() => { setIsPrevTemplate(false); HideOverflowOnPop(false) }} useTemp={true} funcUseTemp={() => EditTemplate(isPrevTemplate[1])} /> : <></>
      }

      <div className="template-section" id="chooseTemplateSection">
        <div className="ts-row">
          <h2>
            {home ? "Select" : `These are the templates we`} <span style={{ color: "#5A4ABD", fontWeight: '600' }}>{home ? "Template" : "recommend for your first CV"}</span>
          </h2>
        </div>
        <ul className="homemenu">
          <li onClick={() => setTemplateMenu("all")} className={templateMenu === "all" ? "active-tab" : ""}>All Templates</li>
          <li onClick={() => setTemplateMenu("modern")} className={templateMenu === "modern" ? "active-tab" : ""}>Modern</li>
          <li onClick={() => setTemplateMenu("minimal")} className={templateMenu === "minimal" ? "active-tab" : ""}>Minimal</li>
          <li onClick={() => setTemplateMenu("creative")} className={templateMenu === "creative" ? "active-tab" : ""}>Creative</li>
          <li onClick={() => setTemplateMenu("ats-friendly")} className={templateMenu === "ats-friendly" ? "active-tab" : ""}>ATS Friendly</li>
        </ul>
        <div className="resume-templates">
          {TemplateData.slice(0, home && templateMenu === "all" ? tempArrSize : 1000).map((element) => {
            return element.category === templateMenu || "all" === templateMenu ? <div key={element.id} className="template-box">
              <Tilt style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }} options={defaultOptions}><div className="resume-preve" onClick={() => { setIsPrevTemplate([<element.element resumeData={element} />, element]); HideOverflowOnPop(true) }}><element.element resumeData={element} /></div></Tilt>
              <button className="prev-temp" onClick={() => { setIsPrevTemplate([<element.element resumeData={element} />, element]); HideOverflowOnPop(true) }}>Preview</button>
              <button className="use-temp" onClick={() => EditTemplate(element)}>Use Template</button>
            </div> : <></>;
          })}

          {
            home ?
              templateMenu === "all" ?
                <Link className="view-all-btn" to="/templates">
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
                    <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link> : <></> : <></>
          }
        </div>
      </div>
    </>
  )
}
