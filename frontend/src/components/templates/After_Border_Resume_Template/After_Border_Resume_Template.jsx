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
        fontSize: `${resumeData.bodyTextSize}px`
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
                <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
            </div>

            <div className='main'>
                <div className='left-column'>
                    {AllSections[0].isSection && <div className='summary-information summary-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span> {AllSections[0].sectionName}</span> <span className='theme-design' style={{ backgroundColor: themeColor }}></span></h2>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>}

                    {AllSections[5].isSection && <div className='education-edit common-sec' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span>{AllSections[5].sectionName}</span> <span className='theme-design' style={{
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
                        <h2 style={combineHeadingStyle}><span>{AllSections[4].sectionName} </span> <span className='theme-design' style={{
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
                        <h2 style={combineHeadingStyle}><span>{AllSections[2].sectionName} </span><span className='theme-design' style={{
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
                </div>
                <div className='right-column'>
                    {AllSections[1].isSection && <div className='contact-details contact-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span>{AllSections[1].sectionName} </span><span className='theme-design' style={{
                            backgroundColor: themeColor
                        }}></span></h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName,additionalLink } = element
                                return (
                                    <li onClick={()=> window.location.href = additionalLink} key={listId} style={{cursor:'pointer'}}>
                                        <i style={{ color: resumeData.bodyTextColor }} className={iconName}></i>
                                        <p style={paraStyleCSS}> {contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                    {AllSections[3].isSection && <div className='skills-information skill-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}><span>{AllSections[3].sectionName}</span><span className='theme-design' style={{
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
                </div>
            </div>
        </div >
    )
}
