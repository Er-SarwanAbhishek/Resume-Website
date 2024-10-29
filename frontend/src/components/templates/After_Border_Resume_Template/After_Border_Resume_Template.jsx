import React, { useContext } from 'react'
import './After_Border_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function After_Border_Resume_Template({ resumeData }) {
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
        <div className='after-border-resume-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='personal-details personal-edit' style={{ borderColor: themeColor }}>
                <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                <h4 style={{...headingStyleCSS, fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}</h4>
            </div>

            <div className='main'>
                <div className='left-column'>
                    {AllSections[0].isSection && <div className='summary-information summary-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'> {AllSections[0].sectionName}</span> <span className='theme-design' style={{ backgroundColor: themeColor }}></span></h2>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>}

                    {AllSections[5].isSection && <div className='education-edit common-sec' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[5].sectionName}</span> <span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{course}</b> , <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[4].isSection && <div className='job-exp-edit common-sec' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[4].sectionName} </span> <span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{jobRole}</b> , <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[2].isSection && <div className='project-edit common-sec' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[2].sectionName} </span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{projectName}</b> , <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[8].isSection && <div className='certification-edit common-sec' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[8].sectionName}</span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        {AllSections[8].list.map(Project => {
                            const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{certificateName}</b> , <i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                    <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                                </div>
                            )
                        })}
                    </div>}
                </div>
                <div className='right-column'>
                    {AllSections[1].isSection && <div className='contact-details contact-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[1].sectionName} </span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName, additionalLink } = element
                                return (
                                    <a href={additionalLink} key={listId}>
                                        <li style={{ cursor: 'pointer' }}>
                                            <i style={{ color: resumeData.bodyTextColor }} className={iconName}></i>
                                            <p style={paraStyleCSS}>{contactName}</p>
                                        </li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>}
                    {AllSections[3].isSection && <div className='skills-information skill-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[3].sectionName}</span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        <ul>
                            {AllSections[3].list.map(skill => {
                                const { listId, skillName } = skill;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        {skillName}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[7].isSection && <div className='hobbies-information interest-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[7].sectionName}</span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        <ul>
                            {AllSections[7].list.map(hobbies => {
                                const { listId, interest } = hobbies;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        {interest}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[6].isSection && <div className='languages-information language-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span className='theme-design-heading'>{AllSections[6].sectionName}</span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        <ul>
                            {AllSections[6].list.map(languages => {
                                const { listId, languageName, languageProfiency } = languages;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        {languageName} - {languageProfiency}
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
