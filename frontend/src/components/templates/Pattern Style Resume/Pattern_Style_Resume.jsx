import React, { useContext } from 'react'
import "./Pattern_Style_Resume.css";
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Pattern_Style_Resume({ resumeData }) {
    const { AllSections, isQRCode, resumeStyle } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const { themeColor } = resumeData;
    const { backgroundPattern } = resumeData.resumeStyle;

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
        <div className="pattern-style-resume" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ?
                    <div className="resume-qr-code">
                        <QRCodeCanvas value={liveTemplateURL} size={'50'} />
                    </div> :
                    <></>
            }

            <div className="header personal-edit">
                <div className="personal-details">
                    <h1 style={headingStyleCSS}> {resumeData.userName} </h1>
                    <h4 style={headingStyleCSS}> <span className='bottom-theme' style={{ backgroundColor: themeColor }}></span>{resumeData.userJobRole}</h4>
                </div>
                <div
                    className="profile-img"
                    style={{
                        backgroundImage:
                            `url(${resumeData.profileImage})`
                    }}
                ><span className='side-theme' style={{ backgroundColor: themeColor }}></span>
                </div>
            </div>

            {/* SUMMARY */}
            {
                resumeData.AllSections[0].isSection &&
                <div className="about-information summary-edit">
                    <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}> {AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                </div>}
            <div className="main">
                <div className="left-column">

                    {/* EDUCATION */}
                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="education-information education-edit">
                            <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(Education => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                                return (
                                    <div className="education-details" key={listId}>
                                        <div>
                                            <p style={paraStyleCSS}>
                                                <b>{course}</b>
                                            </p>
                                            <p style={paraStyleCSS}>
                                                <b>{collegeName}</b>
                                            </p>
                                            <p style={paraStyleCSS}>
                                                <i>{startDate} - {endDate}</i>
                                            </p>
                                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}

                    {/* SKILLS */}
                    {
                        resumeData.AllSections[3].isSection &&
                        <div className="skills-information skill-edit">
                            <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[3].sectionName}</h2>
                            <ul>
                                {AllSections[3].list.map(skill => {
                                    const { listId, skillName } = skill;
                                    return (
                                        <li key={listId}>
                                            <p style={paraStyleCSS}>{skillName}</p>
                                            <span className='skills-side-border' style={{ backgroundColor: themeColor }}></span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                </div>
                <div className="right-column" style={{ borderColor: themeColor }}>
                    {/* JOB EXP */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="experience-information job-exp-edit">
                            <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(Experience => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                                return (
                                    <div className="experience-details" key={listId}>
                                        <div>
                                            <p style={paraStyleCSS}>
                                                <b>{companyName}</b>
                                            </p>
                                            <p style={paraStyleCSS}>
                                                <b>{jobRole}</b>
                                            </p>
                                            <p style={paraStyleCSS}>
                                                <i>{startDate} - {endDate}</i>
                                            </p>
                                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}

                    {/* PROJECTS */}
                    {
                        resumeData.AllSections[2].isSection &&
                        <div className="project-information project-edit">
                            <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[2].sectionName}</h2>
                            {AllSections[2].list.map(Project => {
                                const { listId, projectName, startDate, endDate, aboutProject } = Project;
                                return (
                                    <div className="project-details" key={listId}>
                                        <div>
                                            <p style={paraStyleCSS}>
                                                <b>{projectName}</b>
                                            </p>
                                            <p style={paraStyleCSS}>
                                                <i>{startDate} - {endDate}</i>
                                            </p>
                                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />

                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                </div>
            </div>

            {/* CONTACT */}
            {
                resumeData.AllSections[1].isSection &&
                <div className="contact-Information contact-edit" style={{ borderColor: themeColor }}>
                    <span className="contact-theme-design" style={{ backgroundColor: themeColor }}></span>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName } = element
                            return (
                                <li style={paraStyleCSS} key={listId}>
                                    <i style={{ backgroundColor: themeColor }}
                                        className={iconName} />
                                    {contactName}
                                </li>
                            )
                        })}
                    </ul>
                </div>}
        </div>

    )
}
