import React from 'react'
import './Creative_Image_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';


export default function Creative_Image_Resume_Template({ resumeData }) {
    const { AllSections, themeColor, isQRCode, liveTempId, resumeStyle } = resumeData;
    const liveTemplateURL = `http://localhost:3000/${liveTempId}`;

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
    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

    return (
        <div className='creative-image-template' style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}.png")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='left-column'>
                <div className='profile-img'
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}>
                </div>
                <div className='sub-left'>
                    {AllSections[1].isSection && <div className='contact-details contact-edit'>
                        <h2 style={{ ...combineHeadingStyle, color: '#fff' }}><i style={{ color: themeColor }} class="fa-solid fa-phone-volume"></i>{AllSections[1].sectionName}</h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName } = element
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        <i className={iconName} />
                                        <p style={{ ...paraStyleCSS, color: '#fff' }}>{contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[5].isSection && <div className='education-information education-edit'>
                        <h2 style={{ ...combineHeadingStyle, color: '#fff' }}><i style={{ color: themeColor }} class="fa-solid fa-graduation-cap"></i>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='education-details' key={listId}>
                                    <p style={{ ...paraStyleCSS, color: '#fff' }}><b>{collegeName}</b></p>
                                    <p style={{ ...paraStyleCSS, color: '#fff' }}><b>{course} | <i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                                    <p style={{ ...paraStyleCSS, color: '#fff' }}>{aboutEducation}</p>
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[3].isSection && <div className='skills-information skill-edit'>
                        <h2 style={{ ...combineHeadingStyle, color: '#fff' }}><i style={{ color: themeColor }} class="fa-solid fa-puzzle-piece-simple"></i>{AllSections[3].sectionName}</h2>
                        <ul>
                            {AllSections[3].list.map(skill => {
                                const { listId, skillName } = skill;
                                return (
                                    <li key={listId}>
                                        <span className='list-dots' style={{ backgroundColor: themeColor }}></span>
                                        <p style={{ ...paraStyleCSS, color: '#fff' }}>{skillName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                </div>
            </div>

            <div className='right-column'>
                <div className='personal-details personal-edit'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>

                {AllSections[0].isSection && <div className='summary-information summary-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS}>{AllSections[0].summary}</p>
                </div>}

                {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' key={listId}>
                                <p style={paraStyleCSS}><b><i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                                <p style={paraStyleCSS}><b>{companyName}</b></p>
                                <p style={paraStyleCSS}><b>{jobRole}</b></p>
                                <p style={paraStyleCSS}>{aboutJob} </p>
                            </div>
                        )
                    })}
                </div>}

                {AllSections[2].isSection && <div className='project-information project-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                    {AllSections[2].list.map(Project => {
                        const { listId, projectName, startDate, endDate, aboutProject } = Project;
                        return (
                            <div className='project-details' key={listId}>
                                <p style={paraStyleCSS}><b><i style={{ color: themeColor }}>{startDate} - {endDate}</i></b></p>
                                <p style={paraStyleCSS}><b>{projectName}</b></p>
                                <p style={paraStyleCSS}>{aboutProject}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}
