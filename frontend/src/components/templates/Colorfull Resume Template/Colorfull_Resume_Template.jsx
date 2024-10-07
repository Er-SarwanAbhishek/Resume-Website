import React from 'react'
import './Colorfull_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';

export default function Colorfull_Resume_Template({ resumeData }) {
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
        <div className='colorfull-resume-template' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}.png")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='left-column'>
                <div className='profile-img'
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}>
                </div>

                {AllSections[1].isSection && <div className='contact-details contact-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName } = element
                            return (
                                <li key={listId}>
                                    <i className={iconName} />
                                    <p style={paraStyleCSS}> {contactName}</p>
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
                                <p><b style={boldParaStyleCss}><i>{startDate} - {endDate}</i> |{collegeName}</b></p>
                                <p style={paraStyleCSS}>{aboutEducation}
                                </p>
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
                                <li style={paraStyleCSS} key={listId}>{skillName}</li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            <div className='right-column'>
                <div className='personal-details'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[0].isSection && <div className='summary-information summary-edit'>
                    <p style={paraStyleCSS}>{AllSections[0].summary}</p>
                </div>}

                {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                <p><b style={boldParaStyleCss}>{companyName} | <i>{startDate} - {endDate}</i></b></p>
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
                                <p><b style={boldParaStyleCss}><i>{startDate} - {endDate}</i></b></p>
                                <p><b style={boldParaStyleCss}>{projectName}</b></p>
                                <p style={paraStyleCSS}>{aboutProject}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>

        </div>
    )
}
