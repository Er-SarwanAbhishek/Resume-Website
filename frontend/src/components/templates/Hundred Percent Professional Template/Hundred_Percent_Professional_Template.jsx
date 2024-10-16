import React, { useContext } from 'react'
import './Hundred_Percent_Professional_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Hundred_Percent_Professional_Template({ resumeData }) {
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
        <div className='hundred-percent-professional-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='header'>
                <div className='personal-details personal-edit'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[1].isSection && <div className='contact-details contact-edit'>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName, additionalLink } = element
                            return (
                                <li onClick={() => window.location.href = additionalLink} style={{ ...paraStyleCSS, cursor: 'pointer' }} key={listId}>
                                    <i style={{ color: resumeData.bodyTextColor }} className={iconName} />
                                    <p style={paraStyleCSS}>  {contactName}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            <div className='main-section' style={{ borderColor: themeColor }}>
                <div className='left-column'>
                    <div
                        className="profile-img personal-edit"
                        style={{
                            backgroundImage: `url(${resumeData.profileImage})`,
                        }}
                    ></div>
                    {AllSections[5].isSection && <div className='education-information education-edit'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='education-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                    <p><b style={boldParaStyleCss}>{course}</b></p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[3].isSection && <div className='skill-information skill-edit'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[3].sectionName}</h2>
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
                <div className='right-column'>
                    {AllSections[0].isSection && <div className='summary-information summary-edit'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[0].sectionName}</h2>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>}

                    {AllSections[4].isSection && <div className='job-exp-edit common-section'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                    <p className='common-level'><span><b style={boldParaStyleCss}>{companyName} </b></span><span><i style={paraStyleCSS}>{startDate} - {endDate}</i></span></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[2].isSection && <div className='project-edit common-section'>
                        <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className='common-details' key={listId}>
                                    <p className='common-level'><span><b style={boldParaStyleCss}>{projectName} </b></span><span><i style={paraStyleCSS}>{startDate} - {endDate}</i></span></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                </div>
                            )
                        })}
                    </div>}

                </div>
            </div >
        </div >
    )
}