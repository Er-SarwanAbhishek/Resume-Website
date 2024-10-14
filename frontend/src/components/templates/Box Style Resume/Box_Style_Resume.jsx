import React, { useContext } from 'react'
import "./Box_Style_Resume.css";
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Box_Style_Resume({ resumeData }) {
    const { AllSections, isQRCode, themeColor, resumeStyle } = resumeData;
    const { backgroundPattern } = resumeStyle;
    const { liveTemplateURL } = useContext(GlobalContext);

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor,
    }

    const paraStyleCSS = {
        fontFamily: resumeData.bodyTextFont,
        color: resumeData.bodyTextColor,
        fontSize: `${resumeData.bodyTextSize}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
    return (
        <div className="box-style-resume" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            <div className="left-column">
                <div
                    className="profile-img personal-edit"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}
                ></div>
                {AllSections[0].isSection && <div className="summary-information summary-edit">
                    <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                </div>}

                {AllSections[3].isSection && <div className="skills-information skill-edit">
                    <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                    <ul style={{ borderColor: themeColor }}>
                        {AllSections[3].list.map(skill => {
                            const { listId, skillName } = skill;
                            return (
                                <li style={paraStyleCSS} key={listId}>{skillName}</li>
                            )
                        })}
                    </ul>
                </div>}

                {AllSections[2].isSection && <div className="project-information project-edit">
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[2].sectionName}</h2>
                    {AllSections[2].list.map(Project => {
                        const { listId, projectName, startDate, endDate, aboutProject } = Project;
                        return (
                            <div className="project-details" key={listId}>
                                <p style={paraStyleCSS}>
                                    <i>{startDate} - {endDate}</i>
                                </p>
                                <div>
                                    <p style={paraStyleCSS}>
                                        <b>{projectName}</b>
                                    </p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
            <div className="right-column">
                <div className="personal-details personal-edit" style={{ backgroundColor: themeColor }}>
                    <h1 style={headingStyleCSS}> {resumeData.userName} </h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[1].isSection && <div className="contact-information contact-edit">
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName } = element
                            return (
                                <li style={paraStyleCSS} key={listId}>
                                    <i style={{ backgroundColor: themeColor }} className={iconName} />
                                    {contactName}
                                </li>
                            )
                        })}
                    </ul>
                </div>}

                {AllSections[5].isSection && <div className="education-information education-edit">
                    <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                    {AllSections[5].list.map(Education => {
                        const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                        return (
                            <div className="education-details" key={listId}>
                                <p style={paraStyleCSS}>
                                    <i>{startDate} - {endDate}</i>
                                </p>
                                <div className="cmmn-sec-border">
                                    <p style={paraStyleCSS}>
                                        <b>{course}</b>
                                    </p>
                                    <p style={paraStyleCSS}>
                                        <b>{collegeName}</b>
                                    </p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            </div>
                        )
                    })}
                </div>}

                {AllSections[4].isSection && <div className="experience-information job-exp-edit">
                    <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className="experience-details" key={listId}>
                                <p style={paraStyleCSS}>
                                    <i>{startDate} - {endDate}</i>
                                </p>
                                <div className="cmmn-sec-border">
                                    <p style={paraStyleCSS}>
                                        <b>{companyName}</b>
                                    </p>
                                    <p style={paraStyleCSS}>
                                        <b>{jobRole}</b>
                                    </p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            </div>
                        )
                    })}
                </div>}

            </div>
        </div>

    )
}
