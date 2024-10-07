import React from 'react'
import './ATS_Friendly_Resume.css'
import { QRCodeCanvas } from 'qrcode.react';

export default function ATS_Friendly_Resume({ resumeData }) {
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
        <div className='ats-friendly-resume' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='personal-details personal-edit'>
                <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
            </div>
            {AllSections[1].isSection && <div className='contact-details contact-edit'>
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

            {AllSections[0].isSection && <div className='summary-information summary-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                <p style={paraStyleCSS}>{AllSections[0].summary}</p>
            </div>}

            {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                {AllSections[4].list.map(Experience => {
                    const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                    return (
                        <div className='experience-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                            <p><b style={boldParaStyleCss}>{companyName}</b></p>
                            <p><b style={boldParaStyleCss}><i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                            <p style={paraStyleCSS}>{aboutJob}</p>
                        </div>
                    )
                })}
            </div>}

            {AllSections[2].isSection && <div className='project-information project-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                {AllSections[2].list.map(Project => {
                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                    return (
                        <div className='project-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{projectName}</b></p>
                            <p><b c><i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                            <p style={paraStyleCSS}>{aboutProject}</p>
                        </div>
                    )
                })}
            </div>}

            {AllSections[3].isSection && <div className='skills-information skill-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
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

            {AllSections[5].isSection && <div className='education-information education-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                {AllSections[5].list.map(Education => {
                    const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                    return (
                        <div className='education-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{course}</b></p>
                            <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                            <p><b style={boldParaStyleCss}><i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                            <p style={paraStyleCSS}>{aboutEducation}</p>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
