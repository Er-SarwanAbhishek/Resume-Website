import React from 'react'
import './Blue_Header_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';

export default function Blue_Header_Resume_Template({ resumeData }) {
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
        <div className='blue-header-resume-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='personal-details personal-edit' style={{ backgroundColor: themeColor }}>
                <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
            </div>

            {AllSections[1].isSection && <div className='contact-details contact-edit'>
                <ul>
                    {AllSections[1].list.map(element => {
                        const { listId, iconName, contactName } = element
                        return (
                            <li key={listId}>
                                <i className={iconName} />
                                <p style={{ ...paraStyleCSS, color: "#fff" }}> {contactName}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {AllSections[0].isSection && <div className='summary-information summary-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
            </div>}

            {AllSections[3].isSection && <div className='skills-information skill-edit'>
                <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                <ul>
                    {AllSections[3].list.map(skill => {
                        const { listId, skillName } = skill;
                        return (
                            <li style={paraStyleCSS} key={listId}>
                                {skillName}
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {AllSections[5].isSection && <div className='education-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                {AllSections[5].list.map(Education => {
                    const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                    return (
                        <div className='common-details' key={listId}>
                            <p className="common-datime"><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                            <div className='common-level'>
                                <p><b style={boldParaStyleCss}>{course}</b></p>
                                <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                            </div>
                        </div>
                    )
                })}
            </div>}

            {AllSections[4].isSection && <div className='job-exp-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                {AllSections[4].list.map(Experience => {
                    const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                    return (
                        <div className='common-details' key={listId}>
                            <p className="common-datime"><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                            <div className='common-level'>
                                <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                            </div>
                        </div>
                    )
                })}
            </div>}

            {AllSections[2].isSection && <div className='project-edit common-sec'>
                <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                {AllSections[2].list.map(Project => {
                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                    return (
                        <div className='common-details' key={listId}>
                            <p className="common-datime"><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                            <div className='common-level'>
                                <p><b style={boldParaStyleCss}>{projectName}</b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
