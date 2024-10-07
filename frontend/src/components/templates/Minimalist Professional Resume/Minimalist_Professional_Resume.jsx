import React, { useContext } from "react";
import "./Minimalist_Professional_Resume.css";
import { QRCodeCanvas } from "qrcode.react";
import GlobalContext from "../../context/GlobalContext";

const Minimalist_Professional_Resume = ({ resumeData }) => {
  const { AllSections, isQRCode } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);
  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    // color: resumeData.headingTextColor,
  }

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    // color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

  return (
    <div className="minimalist_professional_resume">
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className="Left-section">
        <div className="img-module">
          <img src={resumeData.profileImage} alt="" />
        </div>
        <div className="left-bottom-section">
          {/* SKILLS SECTION */}

          {
            resumeData.AllSections[3].isSection &&
            <div className="skills skill-edit">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[3].sectionName}</h2>
              {resumeData.AllSections[3].list.map((element, index) => {
                const { skillName } = element;
                return (
                  <React.Fragment key={index}>
                    <li style={paraStyleCSS}>{skillName}</li>
                  </React.Fragment>
                );
              })}
            </div>}

          {/* CONTACT SECTION */}

          {
            resumeData.AllSections[1].isSection &&
            <div className="contact contact-edit">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[1].sectionName}</h2>
              {resumeData.AllSections[1].list.map((element) => {
                return (
                  <div style={paraStyleCSS} class="contact-imgs">
                    <i class={element.iconName}></i>
                    <p style={paraStyleCSS}>{element.contactName}</p>
                  </div>
                );
              })}
            </div>
          }
          {/* PROJECT SECTION */}

          {
            resumeData.AllSections[2].isSection &&
            <>
              <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
              {AllSections[2].list.map((element) => {
                const { listId, projectName, startDate, endDate, aboutProject } =
                  element;
                return (
                  <div className="project-sec common-sec project-edit" key={listId}>
                    <div className="name-date">
                      <div>
                        <p style={paraStyleCSS}>
                          <b>{projectName}</b>
                        </p>
                      </div>
                      <div>
                        <p className="date-section" style={paraStyleCSS}>
                          {startDate} / {endDate}
                        </p>
                      </div>
                    </div>
                    <p style={paraStyleCSS}>{aboutProject}</p>
                  </div>
                );
              })}</>}
        </div>
      </div>

      <div className="Right-section">
        <div className="personal-details-module">
          <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
          <h3 style={headingStyleCSS}>{resumeData.userJobRole}</h3>
        </div>

        {/* SUMMARY SECTION */}

        {
          resumeData.AllSections[0].isSection &&
          <div className="about-me summary-edit">
            <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
            <p style={paraStyleCSS}>{AllSections[0].summary}</p>
          </div>}

        {/* EDUCATION SECTION */}

        {
          resumeData.AllSections[5].isSection &&
          <>
            <div className="education-edit">
              <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
              {AllSections[5].list.map((element) => {
                const {
                  listId,
                  collegeName,
                  course,
                  startDate,
                  endDate,
                  aboutEducation,
                } = element;
                return (
                  <div className="education-sec common-sec" key={listId}>
                    <div className="name-date">
                      <div style={{ marginBottom: "" }}>
                        <p style={paraStyleCSS} >
                          <b>{collegeName}</b>
                        </p>
                      </div>
                      <p className="date-section">
                        {startDate} / {endDate}
                      </p>
                    </div>
                    <p className="course-role-section" style={paraStyleCSS}>{course}</p>
                    <p style={paraStyleCSS}>{aboutEducation}</p>
                  </div>
                );
              })}
            </div></>}


        {/* JOB EXPERIENCE SECTION */}

        {
          resumeData.AllSections[4].isSection &&
          <>
            <div className="job-exp-edit">
              <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
              {AllSections[4].list.map((element) => {
                const { listId, companyName, jobRole, startDate, endDate, aboutJob } =
                  element;
                return (
                  <div className="job-sec common-sec" key={listId}>
                    <div className="name-date">
                      <div style={{ marginBottom: "" }}>
                        <p style={paraStyleCSS}>
                          <b>{companyName}</b>
                        </p>
                      </div>
                      <div>
                        {" "}
                        <p className="date-section">
                          {startDate} / {endDate}
                        </p>
                      </div>
                    </div>
                    <p className="course-role-section">{jobRole}</p>
                    <p >{aboutJob}</p>
                  </div>
                );
              })}</div></>}
      </div>
    </div>
  );
};

export default Minimalist_Professional_Resume;