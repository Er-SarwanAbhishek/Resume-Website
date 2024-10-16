import React, { useContext } from 'react'
import './Brown_Minimalist_Creative_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Brown_Minimalist_Creative_Template({ resumeData }) {
  const { AllSections, themeColor, isQRCode, resumeStyle } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);

  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor,
  }
  const { backgroundPattern } = resumeStyle;

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const boldParaStyleCss = {
    ...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 2}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
  return (
    <div className='brown-minimalist-creative-template' style={{ background: `linear-gradient(180deg, ${themeColor} 20%, rgba(255, 255, 255, 1) 20%), url(/background-pattern/${backgroundPattern})` }}>
      {
        isQRCode && <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div>
      }
      <div className='header'>
        <div className='personal-details personal-edit'>
          <h1 style={{ ...headingStyleCSS, color: "#fff" }}>{resumeData.userName}</h1>
          <h4 style={{ ...headingStyleCSS, color: "#fff" }}>{resumeData.userJobRole}</h4>
          {AllSections[0].isSection && <div className='summary-information summary-edit'>
            <p style={{ ...headingStyleCSS, color: "#fff" }} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
          </div>}
        </div>
        <div
          className="profile-img personal-edit"
          style={{
            backgroundImage: `url(${resumeData.profileImage})`,
          }}
        ></div>
      </div>
      <div className='main-section'>
        <div className='left-column'>
          {AllSections[1].isSection && <div className='contact-information contact-edit'>
            <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
            <ul>
              {AllSections[1].list.map(element => {
                const { listId, iconName, contactName, additionalLink } = element
                return (
                  <li onClick={() => window.location.href = additionalLink} key={listId} style={{cursor:'pointer'}}>
                    <i style={{ backgroundColor: themeColor, color: resumeData.bodyTextColor }} className={iconName}></i>
                    <p style={paraStyleCSS}> {contactName}</p>
                  </li>
                )
              })}
            </ul>
          </div>}

          {AllSections[3].isSection && <div className='skills-information skill-edit'>
            <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
            <ul>
              {AllSections[3].list.map(skill => {
                const { listId, skillName } = skill;
                return (
                  <li key={listId}>
                    <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span>
                    <p style={paraStyleCSS}> {skillName}</p>
                  </li>
                )
              })}
            </ul>
          </div>}

          {AllSections[5].isSection && <div className='education-edit common-section'>
            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
            {AllSections[5].list.map(Education => {
              const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
              return (
                <div className='common-details' key={listId}>
                  <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                  <p><i style={paraStyleCSS}>{startDate} - {endDate} - </i><b style={boldParaStyleCss}>{course}</b></p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                </div>
              )
            })}
          </div>}
        </div>
        <div className='right-column'>
          {AllSections[2].isSection && <div className='project-edit common-section'>
            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
            {AllSections[2].list.map(Project => {
              const { listId, projectName, startDate, endDate, aboutProject } = Project;
              return (<div className='common-details' key={listId}>
                <span className='common-dots'></span>
                <p><i style={paraStyleCSS}>{startDate} - {endDate} - </i><b style={boldParaStyleCss}> {projectName}</b></p>
                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
              </div>
              )
            })}
          </div>}

          {AllSections[4].isSection && <div className='job-exp-edit common-section'>
            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
            {AllSections[4].list.map(Experience => {
              const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
              return (
                <div className='common-details' key={listId}>
                  <span className='common-dots'></span>
                  <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                  <p><i style={paraStyleCSS}>{startDate} - {endDate} - </i><b style={boldParaStyleCss}> {companyName}</b></p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                </div>
              )
            })}
          </div>}
        </div>
      </div>
    </div>
  )
}
