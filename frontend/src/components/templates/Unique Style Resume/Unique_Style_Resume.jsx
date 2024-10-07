import React, { useContext } from 'react'
import './Unique_Style_Resume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';


export default function Unique_Style_Resume({ resumeData }) {

    const hexToRgba = (hex, opacity) => {
        hex = hex.replace(/^#/, '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    const { AllSections, themeColor, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const downColor = hexToRgba(themeColor, 0.2);

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
        <div className='unique-style-resume'>

            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }

            <div className='resume-header-section'>
                <div
                    className="profile-img"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}
                ></div>
                <div className='personal-detail'>
                    <div className='personal-edit'>
                        <h1 style={headingStyleCSS}>
                            Hi! I'm<br />
                            <span style={{ display: 'block' }}>{resumeData.userName}</span>
                        </h1>
                        <h4 style={{ ...headingStyleCSS, backgroundColor: themeColor, color: "#fff" }}>{resumeData.userJobRole}</h4>
                    </div>

                    {/* SUMMARY */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <div className='summary-information summary-edit'>

                            <p style={paraStyleCSS}>{AllSections[0].summary}</p>
                        </div>}
                </div>
            </div>
            <div className='final-section'>
                <div className='left-column' style={isQRCode ? { paddingBottom: '100px' } : { paddingBottom: '30px' }}>

                    {/* JOB EXP */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="experience-information job-exp-edit">
                            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(Experience => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                                return (
                                    <div className="experience-details" key={listId}>
                                        <div className="date-line">
                                            <p className='duration' style={{ ...paraStyleCSS, color: 'white', backgroundColor: themeColor }}>{startDate} - {endDate}</p>
                                            <hr />
                                        </div>
                                        <div>
                                            <p style={paraStyleCSS}><b>{companyName}</b></p>
                                            <p style={paraStyleCSS}><b>{jobRole}</b></p>
                                            <p style={paraStyleCSS}>{aboutJob}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}


                    {/* CONTACT */}
                    {
                        resumeData.AllSections[1].isSection &&
                        <div className='contact-details ' style={{ backgroundColor: downColor }}>
                            {/* <h2>Contact</h2> */}
                            <ul className='contact-edit'>
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
                </div>
                <div className='right-column'>

                    {/* SKILLS */}
                    {

                        resumeData.AllSections[3].isSection &&
                        <div className='skills-information skill-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                            <ul style={{ borderColor: themeColor }}>
                                {AllSections[3].list.map(skill => {
                                    const { listId, skillName } = skill;
                                    return (
                                        <li style={{ backgroundColor: themeColor }} key={listId}>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }}>{skillName}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}

                    {/* EDUCATION */}
                    {

                        resumeData.AllSections[5].isSection &&
                        <div className='education-information education-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(Education => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                                return (
                                    <div className='education-details' key={listId}>
                                        <p style={paraStyleCSS}><b>{collegeName}</b></p>
                                        <p style={paraStyleCSS}>{course} | <i>{startDate} - {endDate}</i></p>
                                        <p style={paraStyleCSS}>{aboutEducation}</p>
                                    </div>
                                )
                            })}
                        </div>}

                    {/* PROJECTS */}
                    {
                        resumeData.AllSections[2].isSection &&
                        <div className='project-information project-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                            {AllSections[2].list.map(Project => {
                                const { listId, projectName, startDate, endDate, aboutProject } = Project;
                                return (
                                    <div className='project-details' key={listId}>
                                        <p style={paraStyleCSS}><b>{projectName}</b> | <i>{startDate} - {endDate}</i></p>
                                        <p style={paraStyleCSS}>{aboutProject}</p>
                                    </div>
                                )
                            })}
                        </div>}
                </div>
            </div>
        </div>
    )
}
