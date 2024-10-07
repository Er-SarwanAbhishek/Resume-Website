import React, { useContext } from 'react'
import './NuevaTemplate.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export const NuevaTemplate = ({ resumeData }) => {

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

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px`, borderColor: themeColor }

  return (
    <div className="NuevaTemplate" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className='fisrrt-hr'>
        < hr />
        {/* first section */}
        <div className="intro">
          <h1 className="personal-edit" style={headingStyleCSS}>{resumeData.userName} | {resumeData.userJobRole}</h1>

          {/* CONTACT */}
          {
            AllSections[1].isSection &&
            <div className='details contact-edit'>
              {AllSections[1].list.map((element, index) => (
                <div key={index}>
                  <p style={paraStyleCSS}>| {element.contactName} |</p>
                </div>
              ))}
            </div>}
        </div>
      </div>
      {/* first section */}

      {/* Second Section summary */}
      {
        AllSections[0].isSection &&
        <div className="summary-sec summary-edit">
          <div className="headingbox">
            <hr />
            <div className="centered">
              <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
            </div>
          </div>
          <p style={paraStyleCSS} className='para'>{AllSections[0].summary}</p>
          {/* Second Section summary */}

        </div>}

      {/* Skill section */}
      {
        AllSections[3].isSection &&
        <div className="summary-sec skills skill-edit">
          <div className="headingbox">
            <hr />
            <div className="centered">
              <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
            </div>
          </div>
          <div className='skills-list'>
            <ul>

              {AllSections[3].list.map((element, index) => (
                <div className='before-icon' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={"#C2D6D1"} fill={"#C2D6D1"}>
                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M8 12.5L10.5 15L16 9" stroke="#5A6160" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> <li style={paraStyleCSS} key={index}>{element.skillName}</li>
                </div>
              ))}
            </ul>

          </div>
        </div>}
      {/* Exp section */}
      <div className='job-exp-edit'>
        {
          AllSections[4].isSection &&
          <>
            <div className="summary-sec">
              <div className="headingbox">
                <hr />
                <div className="centered">
                  <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                </div>
              </div>
            </div>
            <div className='data-secction'>
              {AllSections[4].list.map((element, index) => {
                const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                return (
                  <div key={index}>
                    <p style={paraStyleCSS} className='sub-heading'><b>{companyName}</b></p>
                    <p style={paraStyleCSS} className='sub-heading-b'><b>{jobRole} | {startDate} - {endDate}</b></p>
                    <p style={paraStyleCSS}>{aboutJob}</p>
                  </div>
                )
              })}
            </div></>}
      </div>
      {/* Proj section */}
      <div className='project-edit'>      {
        AllSections[2].isSection &&
        <>
          <div className="summary-sec">
            <div className="headingbox">
              <hr />
              <div className="centered ">
                <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
              </div>
            </div>
          </div>
          <div className='data-secction'>
            {AllSections[2].list.map((element, index) => {
              const { projectName, startDate, endDate, aboutProject } = element;
              return (
                <div key={index}>
                  <p style={paraStyleCSS} className='sub-heading'><b>{projectName} | {startDate} - {endDate}</b></p>
                  <p style={paraStyleCSS}>{aboutProject}</p>
                </div>
              )
            })}
          </div></>}
      </div>

      {/* Education */}
      <div className='education-edit'>
        {
          AllSections[5].isSection &&
          <>
            <div className="summary-sec">
              <div className="headingbox">
                <hr />
                <div className="centered">
                  <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                </div>
              </div>
            </div>
            <div className='data-secction'>
              {AllSections[5].list.map((element, index) => {
                const { collegeName, course, startDate, endDate, aboutEducation, } = element;
                return (
                  <div key={index}>
                    <p style={paraStyleCSS} className='sub-heading'><b>{collegeName}</b></p>
                    <p style={paraStyleCSS} className='sub-heading-b'><b>{course} | {startDate} - {endDate}</b></p>
                    <p style={paraStyleCSS}>{aboutEducation}</p>
                  </div>

                )
              })}
            </div></>}
      </div>
      <div className='fisrrt-hr'>
        < hr />
      </div>
    </div>
  )
}
