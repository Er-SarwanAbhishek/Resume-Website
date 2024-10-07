import React from 'react'
import './Heading_Border_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';

export default function Heading_Border_Resume_Template({ resumeData }) {
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
        <div className='heading-border-resume-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='main-header'>
                <div className='personal-details personal-edit'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>

                    {AllSections[0].isSection && <div className='summary-information summary-edit'>
                        <p style={paraStyleCSS}>{AllSections[0].summary}</p>
                    </div>}
                </div>
                {AllSections[1].isSection && <div className='contact-details contact-edit'>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName } = element
                            return (
                                <li key={listId}>
                                    <i style={{ color: resumeData.bodyTextColor }} className={iconName} />
                                    <p style={paraStyleCSS}> {contactName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            {AllSections[3].isSection && <div className='skills-information skill-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                <ul>
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

            {AllSections[4].isSection && <div className='job-exp-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                {AllSections[4].list.map(Experience => {
                    const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                    return (
                        <div className='common-level' key={listId}>
                            <p className='common-details'><span><b style={boldParaStyleCss}>{companyName}</b></span><span><i style={paraStyleCSS}>{startDate} - {endDate}</i></span></p>
                            <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                            <p style={paraStyleCSS}>{aboutJob}</p>
                        </div>
                    )
                })}
            </div>}
            {AllSections[2].isSection && <div className='project-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                {AllSections[2].list.map(Project => {
                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                    return (
                        <div className='common-level' key={listId}>
                            <p className='common-details'><span><b style={boldParaStyleCss}>{projectName}</b></span><span><i style={paraStyleCSS}>{startDate} - {endDate}</i></span></p>
                            <p style={paraStyleCSS}>{aboutProject}</p>
                        </div>
                    )
                })}
            </div>}
            {AllSections[5].isSection && <div className='education-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                {AllSections[5].list.map(Education => {
                    const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                    return (
                        <div className='common-level' key={listId}>
                            <p className='common-details'><span><b style={boldParaStyleCss}>{course}</b></span><span><i style={paraStyleCSS}>{startDate} - {endDate}</i></span></p>
                            <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                            <p style={paraStyleCSS}>{aboutEducation}</p>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}