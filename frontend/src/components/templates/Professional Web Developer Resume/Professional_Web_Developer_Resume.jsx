import React, { useContext } from 'react'
import './Professional_Web_Developer_Resume.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Professional_Web_Developer_Resume({ resumeData }) {
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
        <div className='professional-web-developer-resume' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }
            <div className='header'>
                <div className='sub-left-column'>
                    <div className='personal-details personal-edit' style={{ backgroundColor: themeColor }}>
                        <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                        <h4 style={{...headingStyleCSS, fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}</h4>
                    </div>
                </div>
                <div className='sub-right-column'>
                    <div
                        className='profile-img personal-edit'
                        style={{
                            backgroundImage: `url(${resumeData.profileImage})`,
                        }}
                    ></div>
                </div>
            </div>
            <div className='main-section'>
                <div className='left-column'  style={{ borderColor: themeColor }}>
                    {AllSections[1].isSection && <div className='contact-information contact-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                        <ul>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName, additionalLink } = element
                                return (
                                    <a href={additionalLink} key={listId}>
                                        <li style={{ ...paraStyleCSS, cursor: 'pointer' }}>
                                            <i style={{ color: resumeData.bodyTextColor }} className={iconName} />
                                            <p style={paraStyleCSS}>{contactName}</p>
                                        </li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>}
                    {AllSections[3].isSection && <div className='skills-information skill-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
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

                    {AllSections[5].isSection && <div className='education-edit common-section' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{course}</b></p>
                                    <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                </div>
                            )
                        })}
                    </div>}
                    {AllSections[7].isSection &&   <div className='hobbies-information interest-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[7].sectionName}</h2>
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

                    {AllSections[6].isSection &&   <div className='languages-information language-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[6].sectionName}</h2>
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
                <div className='right-column' style={{ borderColor: themeColor }}>
                    {AllSections[0].isSection && <div className='summary-information summary-edit' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                    </div>}
                    {AllSections[4].isSection && <div className='job-exp-edit common-section' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                    <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                </div>
                            )
                        })}
                    </div>}

                    {AllSections[2].isSection && <div className='project-edit common-section' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{projectName}</b></p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                </div>
                            )
                        })}
                    </div>}
                    {AllSections[8].isSection &&  <div className='certification-edit common-section' style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[8].sectionName}</h2>
                        {AllSections[8].list.map(Project => {
                            const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                            return (
                                <div className='common-details' key={listId}>
                                    <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                                    <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate}} />
                                </div>
                            )
                        })}
                    </div>}

                    
                </div>
            </div>
        </div>
    )
}
