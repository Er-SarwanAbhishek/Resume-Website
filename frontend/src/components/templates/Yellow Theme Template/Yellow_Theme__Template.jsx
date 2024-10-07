import React, { useContext } from 'react'
import "./Yellow_Theme_Template.css";
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Yellow_Theme__Template({ resumeData }) {

  const { AllSections, isQRCode } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);
  const { themeColor } = resumeData;
  const { backgroundPattern } = resumeData.resumeStyle;

  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor,
  }

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
  return (
    <div className="Yellow-Theme-Template"  style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className="Header personal-edit">
        <div className="Personal-Details" style={{ backgroundColor: themeColor }}>
          <h1 style={headingStyleCSS}>
            {resumeData.userName}<span style={{ color: "black", paddingLeft: "15%" }}></span>
          </h1>
        </div>
        <h4 style={headingStyleCSS}>
          {resumeData.userJobRole}
          <br />
        </h4>
      </div>
      <div className="Main">
        <div className="Left-Column">

          {/* SUMMARY */}
          {
            resumeData.AllSections[0].isSection &&
            <div className="Summary-Information summary-edit">
              <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
              <p style={paraStyleCSS}>{AllSections[0].summary}</p>
            </div>}

          {/* SKILLS */}
          {
            resumeData.AllSections[3].isSection &&
            <div className="Skills-Information skill-edit">
              <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
              <ul style={{ borderColor: themeColor }}>
                {AllSections[3].list.map(skill => {
                  const { listId, skillName } = skill;
                  return (
                    <li style={{ backgroundColor: themeColor }} key={listId}>
                      <p style={paraStyleCSS}>{skillName}</p>
                    </li>
                  )
                })}
              </ul>
            </div>}

          {/* PROJECTS */}
          {
            resumeData.AllSections[2].isSection &&
            <div className="Project-Information project-edit">
              <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
              {AllSections[2].list.map(Project => {
                const { listId, projectName, startDate, endDate, aboutProject } = Project;
                return (
                  <div className="Project-Details" key={listId}>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                    <div>
                      <p style={paraStyleCSS}>
                        <b>{projectName}</b>
                      </p>
                      <p style={paraStyleCSS}>
                        {aboutProject}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>}
        </div>
        <div className="Right-Column">

          {/* CONTACT */}
          {
            resumeData.AllSections[1].isSection &&
            <div className="Contact-Information contact-edit">
              {/* <h2>Contact</h2> */}
              <ul>
                {AllSections[1].list.map(element => {
                  const { listId, iconName, contactName } = element
                  return (
                    <li style={paraStyleCSS} key={listId}>
                      <i style={{ backgroundColor: themeColor }} className={iconName} />
                      {contactName}
                    </li>
                  )
                })}
              </ul>
            </div>}

          {/* EDUCATION */}
          {
            resumeData.AllSections[5].isSection &&
            <div className="Education-Information education-edit">
              <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
              {AllSections[5].list.map(Education => {
                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                return (
                  <div className="Education-Details" key={listId}>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                    <div>
                      <p style={paraStyleCSS}>
                        <b>{course}</b>
                      </p>
                      <p style={paraStyleCSS}>
                        <b>{collegeName}</b>
                      </p>
                      <p style={paraStyleCSS}>
                        {aboutEducation}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>}

          {/* JOB EXP */}
          {
            resumeData.AllSections[4].isSection &&
            <div className="Experience-Information job-exp-edit">
              <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
              {AllSections[4].list.map(Experience => {
                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                return (
                  <div className="Experience-Details" key={listId}>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                    <div>
                      <p style={paraStyleCSS}>
                        <b>{companyName}</b>
                      </p>
                      <p style={paraStyleCSS}>
                        <b>{jobRole}</b>
                      </p>
                      <p style={paraStyleCSS}>
                        {aboutJob}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>}
        </div>
      </div>
    </div>
  )
}
