import React, { useContext } from 'react'
import './Blue_ATS_Proof_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Blue_ATS_Proof_Template({ resumeData }) {
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
    fontSize: `${resumeData.bodyTextSize}px`,
    lineHeight: `${resumeData.bodyTextSize + 8}px`
  }

  const boldParaStyleCss = {
    ...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 2}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
  return (
    <div className='blue-ats-proof-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode && <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div>
      }
      <div className='personal-details personal-edit'>
        <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
        <h4 style={{...headingStyleCSS, fontSize: `${resumeData.bodyTextSize + 6}px`}}>{resumeData.userJobRole}</h4>
      </div>

      {AllSections[1].isSection && <div className='contact-details contact-edit' style={{ backgroundColor: themeColor }}>
        <ul>
          {AllSections[1].list.map(element => {
            const { listId, iconName, contactName, additionalLink } = element
            return (
              <a href={additionalLink} key={listId}>
                <li style={{ cursor: 'pointer' }}>
                  <i style={{ color: resumeData.bodyTextColor }} className={iconName} />
                  <p style={paraStyleCSS}> {contactName}</p>
                </li>
              </a>
            )
          })}
        </ul>
      </div>}

      {AllSections[0].isSection && <div className='summary-information summary-edit'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[0].sectionName}</h2>
        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
      </div>}

      {AllSections[7].isSection && <div className='hobbies-information interest-edit'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[7].sectionName}</h2>
        <ul>
          {AllSections[7].list.map(hobbies => {
            const { listId, interest } = hobbies;
            return (
              <li style={{...paraStyleCSS, border: `1px solid ${themeColor}`} }key={listId}>
                {/* <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span> */}
                <p> {interest}</p>
              </li>
            )
          })}
        </ul>
      </div>}

      {AllSections[4].isSection && <div className='job-exp-edit common-section'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[4].sectionName}</h2>
        {AllSections[4].list.map(Experience => {
          const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
          return (
            <div className='common-level' key={listId}>
              <p className='common-details'><span><b style={boldParaStyleCss}>{companyName} </b></span><span><i style={{ ...paraStyleCSS, backgroundColor: themeColor }}>{startDate} - {endDate}</i></span></p>
              <p><b style={boldParaStyleCss}>{jobRole}</b></p>
              <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
            </div>
          )
        })}
      </div>}

      {AllSections[2].isSection && <div className='project-information common-section'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[2].sectionName}</h2>
        {AllSections[2].list.map(Project => {
          const { listId, projectName, startDate, endDate, aboutProject } = Project;
          return (
            <div className='common-level' key={listId}>
              <p className='common-details'><span><b style={boldParaStyleCss}>{projectName}</b></span><span style={{ paddingBottom: '5px'}}><i style={{ ...paraStyleCSS, backgroundColor: themeColor }}>{startDate} - {endDate}</i></span></p>
              <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
            </div>
          )
        })}
      </div>}

      {AllSections[3].isSection && <div className='skills-information skill-edit'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[3].sectionName}</h2>
        <ul>
          {AllSections[3].list.map(skill => {
            const { listId, skillName } = skill;
            return (
              <li style={{...paraStyleCSS, border: `1px solid ${themeColor}`}}key={listId}>
                <p style={paraStyleCSS}>{skillName}</p>
              </li>
            )
          })}
        </ul>
      </div>}

      {AllSections[5].isSection && <div className='education-edit common-section'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[5].sectionName}</h2>
        {AllSections[5].list.map(Education => {
          const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
          return (
            <div className='common-level' key={listId}>
              <p className='common-details'><span><b style={boldParaStyleCss}>{course}</b></span><span><i style={{ ...paraStyleCSS, backgroundColor: themeColor }}>{startDate} - {endDate}</i></span></p>
              <p><b style={boldParaStyleCss}>{collegeName}</b></p>
              <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
            </div>
          )
        })}
      </div>}

      {AllSections[8].isSection && <div className='certification-edit common-section'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[8].sectionName}</h2>
        {AllSections[8].list.map(Project => {
          const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
          return (
            <div className='common-level' key={listId}>
              <p className='common-details'><span><b style={boldParaStyleCss}>{certificateName}</b></span><span><i style={{ ...paraStyleCSS, backgroundColor: themeColor }}>{startDate} - {endDate}</i></span></p>
              <p><b style={boldParaStyleCss}>{instituteName}</b></p>
              <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate}} />
            </div>
          )
        })}
      </div>}

      {AllSections[6].isSection && <div className='languages-information language-edit'>
        <h2 style={{...combineHeadingStyle, borderColor: themeColor}}>{AllSections[6].sectionName}</h2>
        <ul>
          {AllSections[6].list.map(languages => {
            const { listId, languageName, languageProfiency } = languages;
            return (
              <li style={{...paraStyleCSS, border: `1px solid ${themeColor}`}} key={listId}>
                {/* <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span> */}
                <p> {languageName} - {languageProfiency}</p>
              </li>
            )
          })}
        </ul>
      </div>}
    </div>
  )
}
