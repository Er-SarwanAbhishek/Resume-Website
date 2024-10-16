import React, { useContext } from 'react'
import './Big_image_Typography_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Big_image_Typography_Template({ resumeData }) {
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
        <div className='big-image-typography-template' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='left-column'>
                <div className='personal-details'>
                    <h1>
                        <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    </h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[1].isSection && <div className='contact-details contact-edit'>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor, color: "#fff" }}>{AllSections[1].sectionName}</h2>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName, additionalLink } = element
                            return (
                                <li onClick={() => window.location.href = additionalLink} key={listId} style={{ cursor: 'pointer' }}>
                                    <i style={{ backgroundColor: themeColor }} className={iconName} />
                                    <p style={paraStyleCSS}> {contactName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}

                {AllSections[3].isSection && <div className='skills-information skill edit'>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor, color: "#fff" }}>{AllSections[3].sectionName}</h2>
                    <ul>
                        {AllSections[3].list.map(skill => {
                            const { listId, skillName } = skill;
                            return (
                                <li key={listId}>
                                    <span className='list-dots-boxes' style={{ backgroundColor: themeColor }}></span>
                                    <p style={paraStyleCSS}>{skillName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}

                {AllSections[5].isSection && <div className='education-information education-edit'>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor, color: "#fff" }}>{AllSections[5].sectionName}</h2>
                    {AllSections[5].list.map(Education => {
                        const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                        return (
                            <div className='education-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                <p><b style={boldParaStyleCss}>{course}</b></p>
                                <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                            </div>
                        )
                    })}
                </div>}
            </div>
            <div className='right-column'>
                <div
                    className="profile-img"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}
                ></div>
                {AllSections[0].isSection && <div className='summary-information summary-edit' style={{ backgroundColor: themeColor }}>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: "#fff", color: "#000" }}>{AllSections[0].sectionName}</h2>
                    <p style={{ ...paraStyleCSS, color: "#fff" }} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                </div>}

                {AllSections[2].isSection && <div className='project_information project-edit'>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor, color: "#fff" }}>{AllSections[2].sectionName}</h2>
                    {AllSections[2].list.map(Project => {
                        const { listId, projectName, startDate, endDate, aboutProject } = Project;
                        return (
                            <div className='project_details' key={listId}>
                                <p><b style={boldParaStyleCss}>{projectName}</b> | <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                            </div>
                        )
                    })}
                </div>}

                {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                    <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor, color: "#fff" }}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                <p><b style={boldParaStyleCss}>{jobRole}</b> | <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}
