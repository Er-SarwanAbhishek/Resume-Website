import React, { useContext } from 'react'
import './Blue_Creative_Modern_Resume.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Blue_Creative_Modern_Resume({ resumeData }) {
    const { AllSections, themeColor, isQRCode, resumeStyle } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);

    const hexToRgba = (hex, opacity) => {
        hex = hex.replace(/^#/, '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor,
    }
    const { backgroundPattern } = resumeStyle;
    const downColor = hexToRgba(themeColor, 0.4);

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
        <div className='blue-creative-modern-resume' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='header personal-edit' style={{ backgroundColor: themeColor }}>
                <div className='profile-img'
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}>
                </div>
                <div className='personal-details'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
            </div>
            <div className='main-div'>
                <div className='left-column'>
                    {AllSections[1].isSection && <div className='contact-details contact-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName } = element
                                return (
                                    <li key={listId}>
                                        <i style={{ backgroundColor: themeColor }} className={iconName} />
                                        <p style={paraStyleCSS}> {contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[3].isSection && <div className='skills-information skill-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                        <ul>
                            {AllSections[3].list.map(skill => {
                                const { listId, skillName } = skill;
                                return (
                                    <li key={listId}>
                                        <span className='list-dots' style={{ backgroundColor: themeColor }}></span>
                                        <p style={paraStyleCSS}>{skillName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[2].isSection && <div className='project-information project-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className='project-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{projectName}</b></p>
                                    <p style={paraStyleCSS}><i style={{ ...paraStyleCSS, color: themeColor }}>{startDate} - {endDate}</i></p>
                                    <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                </div>
                            )
                        })}
                    </div>}
                </div>
                <div className='right-column'>
                    {AllSections[0].isSection && <div className='summary-information summary-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                        <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>}

                    {AllSections[5].isSection && <div className='education-information education-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='education-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{course}</b></p>
                                    <p><b style={boldParaStyleCss}>{collegeName}</b> | <i style={{ ...paraStyleCSS, color: themeColor }}>{startDate} - {endDate}</i></p>
                                    <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className='experience-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                    <p><b style={boldParaStyleCss}>{companyName}</b> | <i style={{ ...paraStyleCSS, color: themeColor }}>{startDate} - {endDate}</i></p>
                                    <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
            <div className='bottom-color-1' style={{ backgroundColor: downColor }}></div>
            <div className='bottom-color-2' style={{ backgroundColor: themeColor }}></div>
        </div>
    )
}
