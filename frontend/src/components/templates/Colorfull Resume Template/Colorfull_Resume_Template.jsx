import React, { useContext } from 'react';
import './Colorfull_Resume_Template.css'
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Colorfull_Resume_Template({ resumeData }) {
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
        <div className='colorfull-resume-template' style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
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

                {AllSections[1].isSection && <div className='contact-details contact-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                    <ul>
                        {AllSections[1].list.map(element => {
                            const { listId, iconName, contactName, additionalLink } = element
                            return (
                                <a href={additionalLink} key={listId}>
                                    <li style={{ cursor: 'pointer' }}>
                                        <i className={iconName} />
                                        <p style={paraStyleCSS}> {contactName}</p>
                                    </li>
                                </a>
                            )
                        })}
                    </ul>
                </div>}

                {AllSections[5].isSection && <div className='education-information education-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                    {AllSections[5].list.map(Education => {
                        const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                        return (
                            <div className='education-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{course}</b></p>
                                <p><b style={boldParaStyleCss}><i>{startDate} - {endDate}</i> |{collegeName}</b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                            </div>
                        )
                    })}
                </div>}


                {AllSections[7].isSection && <div className='hobbies-information interest-edit'>
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

                {AllSections[3].isSection && <div className='skills-information skill-edit'>
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
            </div>
            <div className='right-column'>
                <div className='personal-edit '>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                {AllSections[0].isSection && <div className='summary-information summary-edit'>
                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                </div>}

                {AllSections[4].isSection && <div className='experience-information job-exp-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                    {AllSections[4].list.map(Experience => {
                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                        return (
                            <div className='experience-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                <p><b style={boldParaStyleCss}>{companyName} | <i>{startDate} - {endDate}</i></b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
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
                                <p><b style={boldParaStyleCss}>{projectName} | <i>{startDate} - {endDate}</i></b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                            </div>
                        )
                    })}
                </div>}

                {AllSections[8].isSection && <div className='certification-information certification-edit'>
                    <h2 style={combineHeadingStyle}>{AllSections[8].sectionName}</h2>
                    {AllSections[8].list.map(Project => {
                        const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                        return (
                            <div className='certification-details' key={listId}>
                                <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                                <p><b style={boldParaStyleCss}>{instituteName} | <i>{startDate} - {endDate}</i></b></p>
                                <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                            </div>
                        )
                    })}
                </div>}

                {AllSections[6].isSection && <div className='languages-information language-edit'>
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

        </div>
    )
}
