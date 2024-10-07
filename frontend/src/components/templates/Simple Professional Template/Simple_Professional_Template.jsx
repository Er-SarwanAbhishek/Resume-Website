import React from 'react'
import './Simple_Professional_Template.css'
import { QRCodeCanvas } from 'qrcode.react';

export default function Simple_Professional_Template({ resumeData }) {
    const { AllSections, themeColor, isQRCode, liveTempId, resumeStyle } = resumeData;
    const liveTemplateURL = `http://localhost:3000/${liveTempId}`;

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
        <div className='simple-professional-template' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}.png")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='left-column'>
                <div className='personal-details personal-edit'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>

                    <div className='profile-img'
                        style={{
                            backgroundImage: `url(${resumeData.profileImage})`,
                        }}>
                    </div>
                </div>
                {AllSections[1].isSection &&  <div className='contact-details contact-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[1].sectionName}</h2>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName } = element
                            return (
                                <li key={listId}>
                                    <i style={{ color: themeColor }} className={iconName} />
                                    <p style={paraStyleCSS}> {contactName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}

               {AllSections[0].isSection &&    <div className='summary-information summary-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS}>{AllSections[0].summary}</p>
                </div>}

                {AllSections[3].isSection &&   <div className='skills-information skill-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[3].sectionName}</h2>
                    <ul>
                        {AllSections[3].list.map(skill => {
                            const { listId, skillName } = skill;
                            return (
                                <li key={listId}>
                                    <span className='list-dots' style={{ backgroundColor: themeColor }}></span>
                                    <p style={paraStyleCSS}>{skillName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            <div className='right-column'>
            {AllSections[5].isSection &&   <div className='education-information education-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[5].sectionName}</h2>
                    {AllSections[5].list.map(Education => {
                        const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                        return (
                            <div className='education-details' style={{ borderColor: themeColor }} key={listId}>
                                <span className='chain-type-dots' style={{ backgroundColor: themeColor }}></span>
                                <p><b style={boldParaStyleCss}>{course}</b></p>
                                <p className='education-level'><span><b style={boldParaStyleCss}>{collegeName}</b></span><span><b style={boldParaStyleCss}>{startDate} - {endDate}</b></span></p>
                                <p style={paraStyleCSS}>{aboutEducation}</p>
                            </div>
                        )
                    })}
                </div>}

                {AllSections[4].isSection &&   <div className='experience-information job-exp-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' style={{ borderColor: themeColor }} key={listId}>
                                <span className='chain-type-dots' style={{ backgroundColor: themeColor }}></span>
                                <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                <p className='experience-level'><span><b style={boldParaStyleCss}>{companyName} </b></span><span><b style={boldParaStyleCss}>{startDate} - {endDate}</b></span></p>
                                <p style={paraStyleCSS}>{aboutJob}</p>
                            </div>
                        )
                    })}
                </div>}

                {AllSections[2].isSection &&   <div className='project-information project-edit'>
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[2].sectionName}</h2>
                    {AllSections[2].list.map(Project => {
                        const { listId, projectName, startDate, endDate, aboutProject } = Project;
                        return (
                            <div className='project-details' style={{ borderColor: themeColor }} key={listId}>
                                <span className='chain-type-dots' style={{ backgroundColor: themeColor }}></span>
                                <p className='project-level'><b style={boldParaStyleCss} >{projectName} </b><b style={boldParaStyleCss}>{startDate} - {endDate}</b></p>
                                <p style={paraStyleCSS}>{aboutProject}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}


