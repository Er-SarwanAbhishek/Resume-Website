import React, { useContext } from 'react'
import './HMATSTamplate.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

function HMATSTamplate({ resumeData }) {
    const { isQRCode } = resumeData;
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
        <div className="header-modern-template-format-resume-template">
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            <div className="header-modern-template-format-section header-modern-template-format-name">
                {/* <!--CONTACT SECTION--> */}

                <div className="header-modern-template-format-section header-modern-template-format-contact-me">
                    {
                        resumeData.AllSections[1].isSection &&
                        <div className="header-modern-template-format-contact contact-edit">
                            {resumeData.AllSections[1].list.map((element) => {
                                return (
                                    <div style={paraStyleCSS} className='header-modern-template-format-contact-grp'>
                                        <i className={element.iconName}></i>
                                        <p>{element.contactName}</p>
                                    </div>

                                )
                            })}
                        </div>
                    }
                    <div className='header-modern-template-format-name-data'>
                        <div className='header-modern-template-img-sec personal-edit'>
                            <img src={resumeData.profileImage} alt="" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                        <p style={paraStyleCSS}>{resumeData.userJobRole}</p>
                    </div>
                </div>

            </div>
            {/* <!--ABOUT SECTION--> */}
            {
                resumeData.AllSections[0].isSection &&
                <div className="header-modern-template-format-section header-modern-template-format-about-me summary-edit">
                    <h2 style={combineHeadingStyle}>{resumeData.AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS}>{resumeData.AllSections[0].summary}</p>
                </div>}
            {/* <!--PROJECT SECTION--> */}

            {
                resumeData.AllSections[2].isSection &&
                <div className="header-modern-template-format-section header-modern-template-format-project project-edit">
                    <div className='header-modern-template-format-line-heading-sec'>
                        <h2 style={combineHeadingStyle}>{resumeData.AllSections[2].sectionName}</h2>
                    </div>
                    <div className="header-modern-template-format-projects">
                        {resumeData.AllSections[2].list.map((element, index) => {
                            const { projectName, startDate, endDate, aboutProject } = element;
                            return (
                                <div className='header-modern-template-format-section-position' key={index}>
                                    <div className='header-modern-template-format-project-sec'>
                                        <b><p style={paraStyleCSS}>{projectName}</p></b>
                                        <p style={paraStyleCSS} className='header-modern-template-format-project-period'>{startDate} - {endDate}</p>
                                    </div>
                                    <p style={paraStyleCSS} className='temp-p-data'>{aboutProject}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            {/* <!--JOB SECTION--> */}
            {
                resumeData.AllSections[4].isSection &&
                <div className="header-modern-template-format-section header-modern-template-format-job job-exp-edit">
                    <div className='header-modern-template-format-line-heading-sec'>
                        <h2 style={combineHeadingStyle}>{resumeData.AllSections[4].sectionName}</h2>
                    </div>
                    <div className="header-modern-template-format-job-experience">
                        {resumeData.AllSections[4].list.map((element, index) => {
                            const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                            return (
                                <div className='header-modern-template-format-job-position' key={index}>
                                    <div className='header-modern-template-format-job-position-sec'>
                                        <b><p style={paraStyleCSS}>{companyName}</p></b>
                                        <p style={paraStyleCSS} className='header-modern-template-format-job-period'>{startDate} - {endDate}</p>
                                    </div>
                                    <p style={paraStyleCSS} className='custom-p'>{jobRole}</p>
                                    <p style={paraStyleCSS} className='custom-pb'>{aboutJob}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>}

            {/* <!--SKILL SECTION--> */}

            {
                resumeData.AllSections[3].isSection &&
                <div className="header-modern-template-format-section header-modern-template-format-skill skill-edit">
                    <h2 style={combineHeadingStyle}>{resumeData.AllSections[3].sectionName}</h2>
                    <ul className="header-modern-template-format-skills">
                        {resumeData.AllSections[3].list.map((element) => {
                            return <li style={paraStyleCSS}>{element.skillName}</li>
                        })}
                    </ul>
                </div>}
            {/* <!--EDUCATION SECTION--> */}
            {
                resumeData.AllSections[5].isSection &&
                <div className="header-modern-template-format-section header-modern-template-format-education education-edit">
                    <div className='header-modern-template-format-line-heading-sec'>
                        <h2 style={combineHeadingStyle}>{resumeData.AllSections[5].sectionName}</h2>
                    </div>
                    <div className="header-modern-template-format-educations">
                        {resumeData.AllSections[5].list.map((element, index) => {
                            const { collegeName, course, startDate, endDate, aboutEducation } = element;
                            return (
                                <React.Fragment key={index}>
                                    <div className='header-modern-template-format-edu-position-sec'>
                                        <b> <p style={paraStyleCSS}>{collegeName}</p></b>
                                        <p style={paraStyleCSS}>{startDate} - {endDate}</p>
                                    </div>
                                    <p className='course-section' style={paraStyleCSS}>{course}</p>
                                    <p style={paraStyleCSS} className='temp-p-data'>{aboutEducation}</p>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>}
        </div>
    )
}

export default HMATSTamplate