import React, { useContext } from 'react'
import './Applicant_Tracking_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Applicant_Tracking_Resume_Template({ resumeData }) {
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
        <div className='applicant-tracking-resume-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode && <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div>
            }

            <div className='personal-details personal-edit'>
                <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                <h4 style={{...headingStyleCSS, fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}</h4>
            </div>

            {AllSections[0].isSection && <div className='summary-information summary-edit'>
                {/* <h2>Summary</h2> */}
                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }}></p>
            </div>}

            {AllSections[1].isSection && <div className='contact-information contact-edit' style={{backgroundColor: themeColor}}>
                <ul>
                    {AllSections[1].list.map(element => {
                        const { listId, iconName, contactName, additionalLink } = element
                        return (
                            <a href={additionalLink} key={listId}>
                                <li style={{ cursor: 'pointer' }}>
                                    <i style={{ color: resumeData.bodyTextColor }} className={iconName} />
                                    <p style={paraStyleCSS}>{contactName}</p>
                                </li>
                            </a>
                        )
                    })}
                </ul>
            </div>}

            {AllSections[4].isSection && <div className='job-exp-edit common-section'>
                <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                {AllSections[4].list.map(Experience => {
                    const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                    return (
                        <div className='common-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                            <p><b style={boldParaStyleCss}>{companyName}</b></p>
                            <p style={paraStyleCSS}><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                            <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                        </div>
                    )
                })}
            </div>}

            {AllSections[3].isSection && <div className='skills-information skill-edit' >
                <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                <ul>
                    {AllSections[3].list.map(skill => {
                        const { listId, skillName } = skill;
                        return (
                            <li key={listId} style={{backgroundColor: themeColor}}>
                                <p style={paraStyleCSS}>{skillName}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {AllSections[2].isSection && <div className='project-edit common-section'>
                <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                {AllSections[2].list.map(Project => {
                    const { listId, projectName, startDate, endDate, aboutProject } = Project;
                    return (
                        <div className='common-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{projectName}</b></p>
                            <p style={paraStyleCSS}><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                            <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                        </div>
                    )
                })}
            </div>}

            {AllSections[8].isSection && <div className='certification-edit common-section'>
                <h2 style={combineHeadingStyle}>{AllSections[8].sectionName}</h2>
                {AllSections[8].list.map(Project => {
                    const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                    return (
                        <div className='common-details' key={listId}>    
                            <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                            <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                            <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                        </div>
                    )
                })}
            </div>}

            {AllSections[5].isSection && <div className='education-edit common-section'>
                <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                {AllSections[5].list.map(Education => {
                    const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                    return (
                        <div className='common-details' key={listId}>
                            <p><b style={boldParaStyleCss}>{course}</b></p>
                            <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                            <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                            <div style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                        </div>
                    )
                })}
            </div>}

            {AllSections[7].isSection && <div className='hobbies-information interest-edit' >
                <h2 style={combineHeadingStyle}>{AllSections[7].sectionName}</h2>
                <ul>
                    {AllSections[7].list.map(hobbies => {
                        const { listId, interest } = hobbies;
                        return (
                            <li key={listId} style={{backgroundColor: themeColor}}>
                                <p style={paraStyleCSS}>{interest}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            {AllSections[6].isSection && <div className='languages-information language-edit' >
                <h2 style={combineHeadingStyle}>{AllSections[6].sectionName}</h2>
                <ul>
                    {AllSections[6].list.map(languages => {
                        const { listId, languageName, languageProfiency } = languages;
                        return (
                            <li key={listId} style={{backgroundColor: themeColor}}>
                                <p style={paraStyleCSS}> {languageName} - {languageProfiency}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}
