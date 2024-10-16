import React, { useContext } from "react";
import "./FThemeTemplate.css";
import { QRCodeCanvas } from "qrcode.react";
import GlobalContext from "../../context/GlobalContext";

export const FThemeTemplate = ({ resumeData }) => {
  const { AllSections, isQRCode } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);

  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor
  }
  const { backgroundPattern } = resumeData.resumeStyle;

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

  return (
    <div className="FThemeTemplate-Template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className="FThemeTemplate-for-bottom-border-only">
        {/* Section-A */}
        <div className="FThemeTemplate-Section-A">
          <div className="FThemeTemplate-sub-section-A personal-edit">
            <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
            <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
          </div>

          {/* CONTACT */}
          {resumeData.AllSections[1].isSection &&
            <div className="FThemeTemplate-sec-acc-FT contact-edit">
            {resumeData.AllSections[1].list.map((element) => {
                  const { listId, iconName, contactName, additionalLink } =
                    element;
                  return (
                  <div style={{ ...paraStyleCSS, cursor: 'pointer' }} className="FThemeTemplate-account" key={listId} onClick={()=>window.location.href=additionalLink}>
                    <p style={paraStyleCSS}>{contactName}</p>
                    <i className={iconName}></i>
                  </div>
                );
              })}
            </div>}

        </div>
      </div>
      <div className="FThemeTemplate-padding">
        {/* Section-B */}

        {/* SUMMARY */}
        {
          resumeData.AllSections[0].isSection &&
          <div className="FThemeTemplate-section-B summary-edit">
            <div className="FThemeTemplate-for-heading FThemeTemplate-sub-section-B">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[0].sectionName}</h2>
            </div>
            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
          </div>}
        {/* Section-C */}
        <div className="FThemeTemplate-section-C">
          <div className="FThemeTemplate-sub-section-c-left">
            {/* experience | Job */}
            {
              resumeData.AllSections[4].isSection &&
              <div className="FThemeTemplate-for-heading FThemeTemplate-sub-section-c-job job-exp-edit">
                <h2 style={combineHeadingStyle}>{resumeData.AllSections[4].sectionName}</h2>
                <div className='FThemeTemplate-job-secction-details'>
                  {resumeData.AllSections[4].list.map((element, index) => {
                    const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                    return (
                      <div key={index}>
                        <p style={{ ...paraStyleCSS, fontWeight: 800 }}>{companyName} | {startDate} - {endDate} </p>
                        <p style={paraStyleCSS} className='FThemeTemplate-sub-heading'>{jobRole}</p>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                      </div>
                    );
                  })}
                </div>
              </div>}

            {/* projects */}
            {
              resumeData.AllSections[2].isSection &&
              <div className="FThemeTemplate-for-heading FThemeTemplate-projects project-edit">
                <h2 style={combineHeadingStyle}>{resumeData.AllSections[2].sectionName}</h2>
                <div className="FThemeTemplate-projeccts-details">
                  {resumeData.AllSections[2].list.map((element, index) => {
                    const { projectName, startDate, endDate, aboutProject } = element;
                    return (
                      <div key={index}>
                        <p style={{ ...paraStyleCSS, fontWeight: 800 }}>{projectName} | {startDate} - {endDate} </p>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                      </div>
                    );
                  })}
                </div>
              </div>}
          </div>

          <div className="FThemeTemplate-sub-section-c-right">
            {/* Skills */}
            {
              resumeData.AllSections[3].isSection &&
              <div className="FThemeTemplate-for-heading FThemeTemplate-skils skill-edit">
                <h2 style={combineHeadingStyle}>{resumeData.AllSections[3].sectionName}</h2>
                <div className='FThemeTemplate-skills-list'>
                  {resumeData.AllSections[3].list.map((element, index) => (
                    <li style={paraStyleCSS} key={index}>{element.skillName}</li>
                  ))}
                </div>
              </div>}

            {/* Education */}
            {
              resumeData.AllSections[5].isSection &&
              <div className='FThemeTemplate-for-heading FThemeTemplate-education education-edit'>
                <h2 style={combineHeadingStyle}>{resumeData.AllSections[5].sectionName}</h2>
                <div className='FThemeTemplate-education-details'>
                  {resumeData.AllSections[5].list.map((element, index) => {
                    const { collegeName, course, startDate, endDate, aboutEducation } = element;
                    return (
                      <React.Fragment key={index}>
                        <p style={{ ...paraStyleCSS, fontWeight: 800 }}>{collegeName} | {startDate} - {endDate} </p>
                        <p style={paraStyleCSS} className='FThemeTemplate-sub-heading'>{course}</p>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
