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
    fontSize: `${resumeData.bodyTextSize}px`,
    lineHeight: `${resumeData.bodyTextSize + 8}px`
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
          <h4 style={{...headingStyleCSS,color: 'fff', fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}</h4>
          {AllSections[0].isSection && <div className='summary-information summary-edit'>
            <p style={{ ...paraStyleCSS, color: "#fff" }} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
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
                  <a href={additionalLink} key={listId}>
                    <li style={{ cursor: 'pointer' }}>
                      <i style={{ backgroundColor: themeColor, color: resumeData.bodyTextColor }} className={iconName}></i>
                      <p style={paraStyleCSS}> {contactName}</p>
                    </li>
                  </a>
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

          {AllSections[7].isSection && <div className='hobbies-information interest-edit' style={{ borderColor: themeColor }}>
            <h2 style={combineHeadingStyle}>{AllSections[7].sectionName}</h2>
            <ul>
              {AllSections[7].list.map(hobbies => {
                const { listId, interest } = hobbies;
                return (
                  <li style={paraStyleCSS} key={listId}>
                    <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span>
                    <p> {interest}</p>
                  </li>
                )
              })}
            </ul>
          </div>}

        </div>
        <div className='right-column'>
          {AllSections[2].isSection && <div className='project-edit common-section'>
            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
            {AllSections[2].list.map(Project => {
              const { listId, projectName, startDate, endDate, aboutProject } = Project;
              return (<div className='common-details' key={listId}>
                <span className='common-dots' style={{background: themeColor}}></span>
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
                  <span className='common-dots' style={{background: themeColor}}></span>
                  <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                  <p><i style={paraStyleCSS}>{startDate} - {endDate} - </i><b style={boldParaStyleCss}> {companyName}</b></p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                </div>
              )
            })}
          </div>}
          {AllSections[8].isSection && <div className='certification-edit common-section'>
            <h2 style={combineHeadingStyle}>{AllSections[8].sectionName}</h2>
            {AllSections[8].list.map(Project => {
              const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
              return (
                <div className='common-details' key={listId}>
                  <span className='common-dots' style={{background: themeColor}}></span>
                  <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                  <p style={paraStyleCSS}><i>{startDate} - {endDate} - </i><b style={boldParaStyleCss}>{instituteName}</b></p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                </div>
              )
            })}
          </div>}
          {AllSections[6].isSection && <div className='languages-information language-edit'>
            <h2 style={combineHeadingStyle}>{AllSections[6].sectionName}</h2>
            <ul>
              {AllSections[6].list.map(languages => {
                const { listId, languageName, languageProfiency } = languages;
                return (
                  <li style={paraStyleCSS} key={listId}>
                    <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span>
                    <p> {languageName} - {languageProfiency}</p>
                  </li>
                )
              })}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}
