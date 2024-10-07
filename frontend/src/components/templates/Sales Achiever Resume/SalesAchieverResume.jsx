import React, { useContext } from 'react'
import './SalesAchieverResume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export const SalesAchieverResume = ({ resumeData }) => {

    const { isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const themStyle = { backgroundColor: resumeData.themeColor }
    const { backgroundPattern } = resumeData.resumeStyle;

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor
    }

    const paraStyleCSS = {
        fontFamily: resumeData.bodyTextFont,
        color: resumeData.bodyTextColor,
        fontSize: `${resumeData.bodyTextSize}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

    return (
        <div className="SalesAchieverRT" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>

            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            {/* Shapes */}
            <div className="tiangle-shapes"></div>
            {/* Shapes */}
            <div className="parent-sec">
                <div className="left-sec" style={themStyle}>
                    <div className='for-img' style={{ backgroundImage: `url(${resumeData.profileImage})` }}></div>

                    {/* CONTACT */}
                    {
                        resumeData.AllSections[1].isSection &&
                        <div className="contact custom-heading-space contact-edit">
                            <h2 style={combineHeadingStyle} >{resumeData.AllSections[1].sectionName}</h2>
                            {resumeData.AllSections[1].list.map((element, index) => (
                                <div className='contact-list' key={index} style={paraStyleCSS}>
                                    <i className={element.iconName}></i>
                                    <p style={paraStyleCSS} className="para-font-size">{element.contactName}</p>
                                </div>
                            ))}
                        </div>}

                    {/* SKILLS */}
                    {
                        resumeData.AllSections[3].isSection &&
                        <div className="skills custom-heading-space skill-edit">
                            <h2 style={combineHeadingStyle} >{resumeData.AllSections[3].sectionName}</h2>
                            {resumeData.AllSections[3].list.map((element, index) => (
                                <li style={paraStyleCSS} key={index}>{element.skillName}</li>
                            ))}
                        </div>}

                    {/* EDUCATION */}
                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="education custom-heading-space education-edit">
                            <h2 style={combineHeadingStyle}>{resumeData.AllSections[5].sectionName}</h2>
                            {resumeData.AllSections[5].list.map((element, index) => {
                                const {
                                    collegeName,
                                    course, startDate, endDate, aboutEducation
                                } = element;
                                return (
                                    <div key={index}>
                                        <p style={paraStyleCSS}><b>{course}</b></p>
                                        <p style={paraStyleCSS}><b>{collegeName} | {startDate} | {endDate}</b></p>
                                        <p style={paraStyleCSS}>{aboutEducation}</p>
                                    </div>
                                )
                            })}
                        </div>}
                </div>

                <div className="right-sec">
                    <div className="profile-details personal-edit">
                        <h1 style={headingStyleCSS} >{resumeData.userName}</h1>
                        <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                    </div>
                    <div className="gradient-section" style={{ background: `linear-gradient(130deg, rgba(255,255,255,1) 30%, ${resumeData.themeColor} 30%)` }}>
                    </div>
                    <div className='for-spacing'>

                        {/* SUMMARY */}
                        {
                            resumeData.AllSections[0].isSection &&
                            <div className="summary custom-heading-space summary-edit">
                                <h2 style={combineHeadingStyle} >{resumeData.AllSections[0].sectionName}</h2>
                                <p style={paraStyleCSS}>{resumeData.AllSections[0].summary}</p>
                            </div>}

                        {/* JOB EXP */}
                        {
                            resumeData.AllSections[4].isSection &&
                            <div className="experience custom-heading-space job-exp-edit">
                                <h2 style={combineHeadingStyle} >{resumeData.AllSections[4].sectionName}</h2>
                                {resumeData.AllSections[4].list.map((element, index) => {
                                    const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                                    return (
                                        <div key={index}>
                                            <p style={paraStyleCSS}><b>{jobRole}</b></p>
                                            <p style={paraStyleCSS}><b>{companyName} | {startDate} - {endDate}</b></p>
                                            <p style={paraStyleCSS}>{aboutJob}</p>
                                        </div>
                                    );
                                })}
                            </div>}

                        {/* PROJECTS */}
                        {

                            resumeData.AllSections[2].isSection &&
                            <div className="projects custom-heading-space project-edit">
                                <h2 style={combineHeadingStyle} >{resumeData.AllSections[2].sectionName}</h2>
                                {resumeData.AllSections[2].list.map((element, index) => {
                                    const { projectName, startDate, endDate, aboutProject } = element;
                                    return (
                                        <div key={index}>
                                            <p style={paraStyleCSS}><b>{projectName}  |  {startDate}-{endDate}</b></p>
                                            <p style={paraStyleCSS}>{aboutProject}</p>
                                        </div>
                                    )
                                })}
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
