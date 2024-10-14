import React, { useContext } from 'react';
import './Modern_Curriculum_Resume_Templates.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Moder_Curriculum_Resume_Templates({ resumeData }) {

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

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px`, borderColor: themeColor }

    return (
        <div className="modern-curriculum-resume-templates" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            {/* PERSONAL DETAILS */}
            <div className="personal-details">
                <div className="profile-image" style={{ backgroundImage: `url(${resumeData.profileImage})`, borderColor: themeColor }}></div>
                <div className="name-section">
                    <div className='personal-section  personal-edit'>

                        <h1 style={{ fontFamily: resumeData.headingTextFont }}>{resumeData.userName}</h1>
                        <h4 style={{ fontFamily: resumeData.headingTextFont }}>{resumeData.userJobRole}</h4>
                    </div>


                    <hr style={{ marginBottom: '10px', border: 'none', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

                    {/* CONTACT DETAILS */}
                    {
                        resumeData.AllSections[1].isSection &&
                        <ul className="contact-section contact-edit">
                            {AllSections[1].list.map(contact => {
                                const { listId, iconName, contactName } = contact;
                                return <li key={listId}><i className={iconName}></i> <p style={{ fontFamily: resumeData.bodyTextFont, fontSize: `${resumeData.bodyTextSize}px` }}>{contactName}</p></li>
                            })}
                        </ul>}
                </div>
            </div>

            <div className="column-wrapper">

                {/* LEFT COLUMN */}
                <div className="left-column">

                    {/* SUMMARY */}
                    <div className='summary-edit'>                   {
                        resumeData.AllSections[0].isSection &&
                        <div className="summary-section">
                            <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                        </div>}
                    </div>

                    {/* SKILLS */}
                    {
                        resumeData.AllSections[3].isSection &&
                        <div className="skills-section common-sec skill-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                            <ul>
                                {AllSections[3].list.map(skill => {
                                    const { listId, skillName } = skill;
                                    return <li key={listId} style={paraStyleCSS}>{skillName}</li>
                                })}
                            </ul>
                        </div>}

                    {/* PROJECTS */}
                    {
                        resumeData.AllSections[2].isSection &&
                        <div className="project-section common-sec project-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                            {AllSections[2].list.map(project => {
                                const { listId, projectName, startDate, endDate, aboutProject } = project;
                                return (
                                    <div className="each-module" key={listId}>
                                        <p style={paraStyleCSS}><b>{projectName} | <span style={{ color: themeColor }}>{startDate} - {endDate}</span></b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                    </div>
                                )
                            })}
                        </div>}
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">

                    {/* JOB EXPERIENCE */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="job-exp-section common-sec job-exp-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(jobexp => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = jobexp;
                                return (
                                    <div className="each-module" key={listId}>
                                        <p style={paraStyleCSS}><b>{companyName} | <span style={{ color: themeColor }}>{startDate} - {endDate}</span></b></p>
                                        <p style={{ ...paraStyleCSS, marginBottom: '3px' }}><b>{jobRole}</b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                    </div>
                                )
                            })}
                        </div>}

                    {/* EDUCATION */}
                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="education-section common-sec education-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(jobexp => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = jobexp;
                                return (
                                    <div className="each-module" key={listId}>
                                        <p style={paraStyleCSS}><b>{collegeName} | <span style={{ color: themeColor }}>{startDate} - {endDate}</span></b></p>
                                        <p style={{ ...paraStyleCSS, marginBottom: '3px' }}><b>{course}</b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                    </div>
                                )
                            })}
                        </div>}
                </div>
            </div>
        </div>
    )
}
