import React, { useContext } from 'react'
import "./Ppvp_resume_temp.css";
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Ppvp_resume_temp({ resumeData }) {

    const { AllSections, isQRCode } = resumeData;
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
        <div className='ppvp-resume-temp' style={{ backgroundImage: `url(${backgroundPattern})` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='ppvp-left-right-section'>
                <div className='ppvp-left-section'>
                    <div className='psc-section'>
                        <div className="Pic">
                            <img src={resumeData.profileImage} alt="" style={{ width: '150px', height: '150px' }} />
                        </div>

                        {/* CONTACT */}
                        {
                            resumeData.AllSections[1].isSection &&
                            <div className="contact-section contact-edit" style={{ borderColor: themeColor }}>
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[1].sectionName}</h2>
                                <ul>
                                    {AllSections[1].list.map(element => {
                                        const { listId, iconName, contactName,additionalLink } = element;
                                        return (
                                            <li onClick={() => window.location.href = additionalLink} style={{ ...paraStyleCSS, cursor: 'pointer' }} key={listId}>
                                                <i style={{ color: '#fff' }} className={iconName} />
                                                <p style={{ ...paraStyleCSS, color: '#fff' }}>{contactName}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}

                        {/* SKILLS */}
                        {
                            resumeData.AllSections[3].isSection &&
                            <div className="skills-section skill-edit">
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[3].sectionName}<span className='designing-line'></span></h2>
                                <ul className='skill-section'>
                                    {AllSections[3].list.map(skill => {
                                        const { listId, skillName } = skill;
                                        return (
                                            <li key={listId}>
                                                <p style={{ ...paraStyleCSS, color: '#fff' }}>{skillName}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}

                        {/* PROJECTS */}
                        {
                            resumeData.AllSections[2].isSection &&
                            <div className="project-section project-edit">
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[2].sectionName}<span className='designing-line'></span></h2>
                                {AllSections[2].list.map(Project => {
                                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                                    return (
                                        <div className="project-details" key={listId}>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }}>
                                                <b>{projectName}</b>
                                            </p>
                                            <div>
                                                <p style={{ ...paraStyleCSS, color: '#fff' }}>
                                                    <i>{startDate} - {endDate}</i>
                                                </p>
                                                <p style={{ ...paraStyleCSS, color: '#fff' }}
                                                    dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                    </div>
                </div>

                <div className='ppvp-right-section'>
                    <div className="personal-details personal-edit">
                        <h1 style={{ ...headingStyleCSS, color: '#000' }}>
                            {resumeData.userName}
                        </h1>
                        <h4>{resumeData.userJobRole}
                        </h4>
                    </div>

                    {/* SUMMARY */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <div className="summary-section summary-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}<span className='designing-line' ></span></h2>
                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                        </div>}

                    {/* EDUCATION */}
                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="education-section education-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}></span></h2>
                            {AllSections[5].list.map(Education => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                                return (
                                    <div className="education-details" key={listId}>
                                        <p style={paraStyleCSS}>
                                            <b>{collegeName}</b>

                                            <p style={paraStyleCSS}>
                                                <b>{course}</b>
                                            </p>

                                        </p>
                                        <div><p style={paraStyleCSS}>
                                            <i>{startDate} - {endDate}</i>
                                        </p>
                                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}

                    {/* JOB EXP */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="experience-section job-exp-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}<span className='designing-line'></span></h2>
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
                </div>
            </div>

        </div >

    )
}
