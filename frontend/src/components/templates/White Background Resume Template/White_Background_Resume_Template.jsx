import React, { useContext } from 'react'
import './White_Background_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function White_Background_Resume_Template({ resumeData }) {
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
        fontSize: `${resumeData.bodyTextSize}px`,
        lineHeight: `${resumeData.bodyTextSize + 8}px`
    }

    const boldParaStyleCss = {
        ...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 2}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
    return (
        <div className='white-background-resume-template' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='header' style={{ borderColor: themeColor }}>
                <div className='personal-details personal-edit'>
                    <div className='profile-img'
                        style={{
                            backgroundImage: `url(${resumeData.profileImage})`,
                        }}>
                    </div>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                </div>
                {AllSections[0].isSection && <div className='summary-information'>
                    <div className="summary-edit">
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[0].sectionName}</h2>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>
                    <h4 className="personal-edit" style={{ ...headingStyleCSS, borderColor: themeColor,fontSize: `${resumeData.bodyTextSize + 4}px` }}>{resumeData.userJobRole}</h4>
                </div>}
            </div>
            <div className='main-section'>
                <div className='left-column'>
                    {AllSections[1].isSection && <div className='contact-details contact-edit'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[1].sectionName}</h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName, additionalLink } = element
                                return (
                                    <a href={additionalLink} key={listId}>
                                        <li style={{ cursor: 'pointer' }}>
                                            <i style={{ backgroundColor: themeColor, color: resumeData.bodyTextColor }} className={iconName} />
                                            <p style={paraStyleCSS}> {contactName}</p>
                                        </li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>}
                    {AllSections[3].isSection && <div className='skills-information skill-edit'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[3].sectionName}</h2>
                        <ul>
                            {AllSections[3].list.map(skill => {
                                const { listId, skillName } = skill;
                                return (
                                    <li style={{ backgroundColor: themeColor }} key={listId}>
                                        <p style={paraStyleCSS}>{skillName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[2].isSection && <div className='project-information project-edit'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className='project-details' key={listId}>
                                    <p className="project-datime"><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <div className='project-level'>
                                        <p><b style={boldParaStyleCss}>{projectName}</b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[8].isSection && <div className='certification-information certification-edit' style={{ borderColor: themeColor }}>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[8].sectionName}</h2>
                        {AllSections[8].list.map(Project => {
                            const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                            return (
                                <div className='certification-details' key={listId}>
                                    <p className="certification-datime"><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <div className='certification-level'>
                                        <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                                        <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[7].isSection && <div className='hobbies-information interest-edit'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[7].sectionName}</h2>
                        <ul>
                            {AllSections[7].list.map(hobbies => {
                                const { listId, interest } = hobbies;
                                return (
                                    <li style={{ backgroundColor: themeColor }} key={listId}>
                                        <p style={paraStyleCSS}>{interest}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                </div>
                <div className='right-column' style={{ borderColor: themeColor }}>
                    {AllSections[4].isSection && <div className='job-exp-edit common-sec'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className='common-details' key={listId}>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                    <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            )
                        })}
                    </div>}
                    {AllSections[5].isSection && <div className='education-edit common-sec'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='common-details' key={listId}>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                    <p><b style={boldParaStyleCss}>{course}</b></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[6].isSection && <div className='languages-information language-edit'>
                        <h2 style={{ ...combineHeadingStyle, borderColor: themeColor }}>{AllSections[6].sectionName}</h2>
                        <ul>
                            {AllSections[6].list.map(languages => {
                                const { listId, languageName, languageProfiency } = languages;
                                return (
                                    <li style={{ backgroundColor: themeColor }} key={listId}>
                                       <p style={paraStyleCSS}> {languageName} - {languageProfiency}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                </div>
            </div>
        </div>
    )
}