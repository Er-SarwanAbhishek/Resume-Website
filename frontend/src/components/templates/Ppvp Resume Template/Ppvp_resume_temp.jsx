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
        fontSize: `${resumeData.bodyTextSize}px`,
        lineHeight: `${resumeData.bodyTextSize + 8}px`
    }

    const boldParaStyleCss = {
        ...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 2}px`
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
                    <div className='psc-section' style={{ borderColor: themeColor }}>
                        <div className="Pic"
                            style={{
                                backgroundImage: `url(${resumeData.profileImage})`, borderColor: themeColor
                            }}>
                        </div>

                        {/* CONTACT */}
                        {
                            resumeData.AllSections[1].isSection &&
                            <div className="contact-section contact-edit">
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[1].sectionName} <span className='designing-line' style={{ backgroundColor: themeColor }}> </span></h2>
                                <ul>
                                    {AllSections[1].list.map(element => {
                                        const { listId, iconName, contactName, additionalLink } = element;
                                        return (
                                            <a href={additionalLink} key={listId}>
                                                <li style={{ ...paraStyleCSS, cursor: 'pointer' }} >
                                                    <i style={{ color: '#fff' }} className={iconName} />
                                                    <p style={{ ...paraStyleCSS, color: '#fff' }}>{contactName}</p>
                                                </li>
                                            </a>
                                        )
                                    })}
                                </ul>
                            </div>}

                        {/* SKILLS */}
                        {
                            resumeData.AllSections[3].isSection &&
                            <div className="skills-section skill-edit">
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[3].sectionName} <span className='designing-line' style={{ backgroundColor: themeColor }}> </span></h2>
                                <ul className='skill-section'>
                                    {AllSections[3].list.map(skill => {
                                        const { listId, skillName } = skill;
                                        return (
                                            <li key={listId}>
                                                <span className='list-dots'></span>
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
                                <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[2].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}> </span></h2>
                                {AllSections[2].list.map(Project => {
                                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                                    return (
                                        <div className="project-details" key={listId}>
                                            <p><b style={{ ...boldParaStyleCss, color: '#fff' }}>{projectName}</b></p>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }}><i>{startDate} - {endDate}</i> </p>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                        </div>
                                    )
                                })}
                            </div>}

                        {AllSections[7].isSection && <div className='hobbies-information interest-edit'>
                            <h2 style={{ ...combineHeadingStyle, color: '#fff' }}>{AllSections[7].sectionName}<span className='designing-line' style={{ backgroundColor: themeColor }}> </span></h2>
                            <ul>
                                {AllSections[7].list.map(hobbies => {
                                    const { listId, interest } = hobbies;
                                    return (
                                        <li key={listId}>
                                            <span className='list-dots'></span>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }}>{interest}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                    </div>
                </div>

                <div className='ppvp-right-section'>
                    <div className="personal-details personal-edit">
                        <h1 style={{ ...headingStyleCSS, color: '#000' }}>
                            {resumeData.userName}
                        </h1>
                        <h4 style={{...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}
                        </h4>
                    </div>

                    {/* SUMMARY */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <div className="summary-section summary-edit">
                            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[0].sectionName}</h2>
                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                        </div>}

                    {/* EDUCATION */}
                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="education-section education-edit">
                            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(Education => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                                return (
                                    <div className="education-details" key={listId}>
                                        <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                        <p><b style={boldParaStyleCss}>{course}</b></p>
                                        <p style={paraStyleCSS}><i>{startDate} - {endDate}</i> </p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                    </div>
                                )
                            })}
                        </div>}

                    {/* JOB EXP */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="experience-section job-exp-edit">
                            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(Experience => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                                return (
                                    <div className="experience-details" key={listId}>
                                        <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                        <p><b style={boldParaStyleCss}>{jobRole}</b> </p>
                                        <p style={paraStyleCSS}> <i>{startDate} - {endDate}</i> </p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                    </div>
                                )
                            })}
                        </div>}


                    {AllSections[8].isSection && <div className='certification-information certification-edit'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[8].sectionName}</h2>
                        {AllSections[8].list.map(Project => {
                            const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                            return (
                                <div className="certification-details" key={listId}>
                                    <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                                    <p><b style={boldParaStyleCss}>{certificateName}</b> </p>
                                    <p style={paraStyleCSS}> <i>{startDate} - {endDate}</i> </p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[6].isSection && <div className='languages-information language-edit'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[6].sectionName}</h2>
                        <ul>
                            {AllSections[6].list.map(languages => {
                                const { listId, languageName, languageProfiency } = languages;
                                return (
                                    <li key={listId}>
                                        <span style={paraStyleCSS } className='list-dots'></span>
                                        <p style={paraStyleCSS }>{languageName} - {languageProfiency}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                </div>
            </div>

        </div >

    )
}
