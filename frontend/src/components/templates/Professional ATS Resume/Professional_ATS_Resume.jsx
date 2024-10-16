import React, { useContext } from 'react';

import './Professional_ATS_Resume.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Professional_ATS_Resume({ resumeData }) {
    const { AllSections, themeColor, isQRCode, resumeStyle } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext)
        ;
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
        <div className='professional-ats-resume' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
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
                {AllSections[1].isSection && <div className='contact-information contact-edit'>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName,additionalLink } = element
                            return (
                                <li onClick={()=>window.location.href=additionalLink} key={listId}  style={{cursor:'pointer'}}>
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
                                <li key={listId} style={{ backgroundColor: themeColor }}>
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
                                <p><i>{startDate} - {endDate}</i></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                            </div>
                        )
                    })}
                </div>}
            </div>

            <div className='right-column'>
                <div className='personal-details personal-edit'>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[0].isSection && <div className='summary-information summary-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                </div>}

                {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                <p className='experience-level'><span><b style={boldParaStyleCss}>{companyName}</b></span><span><i>{startDate} - {endDate}</i></span></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                            </div>
                        )
                    })}
                </div>}
                {AllSections[5].isSection && <div className='education-information education-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                    {AllSections[5].list.map(Education => {
                        const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                        return (
                            <div className='education-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{course}</b></p>
                                <p className='education-level'><span><b style={boldParaStyleCss}>{collegeName}</b></span><span><i>{startDate} - {endDate}</i></span></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div >
    )
}
