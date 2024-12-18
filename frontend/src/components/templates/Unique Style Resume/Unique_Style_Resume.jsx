import React, { useContext } from 'react'
import './Unique_Style_Resume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';


export default function Unique_Style_Resume({ resumeData }) {

    const hexToRgba = (hex, opacity) => {
        hex = hex.replace(/^#/, '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    const { AllSections, themeColor, isQRCode, resumeStyle } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const downColor = hexToRgba(themeColor, 0.2);

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor,
    }

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
        <div className='unique-style-resume' >

            {
                isQRCode ? <div className="resume-qr-code" >
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }

            <div className='resume-header-section'>
                <div
                    className="profile-img"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                    }}
                ></div>
                <div className='personal-details'>
                    <div className='personal-edit'>
                        <h1 style={headingStyleCSS}>
                            Hi! I'm<br />
                            <span style={{ display: 'block' }}>{resumeData.userName}</span>
                        </h1>
                        <h4 style={{ ...headingStyleCSS, backgroundColor: themeColor, color: "#fff", fontSize: `${resumeData.bodyTextSize + 4}px`}}>{resumeData.userJobRole}</h4>
                    </div>

                    {/* SUMMARY */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <div className='summary-information summary-edit'>

                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                        </div>}
                </div>
            </div>
            <div className='final-section'>
                <div className='left-column' style={isQRCode ? { paddingBottom: '100px' } : { paddingBottom: '30px' }}>

                    {/* SKILLS */}
                    {
                        resumeData.AllSections[3].isSection &&
                        <div className='skills-information skill-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                            <ul style={{ borderColor: themeColor }}>
                                {AllSections[3].list.map(skill => {
                                    const { listId, skillName } = skill;
                                    return (
                                        <li style={{ backgroundColor: themeColor }} key={listId}>
                                            <p style={{ ...paraStyleCSS, color: '#fff' }}>{skillName}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}

                    {/* JOB EXP */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="job-exp-edit common-section">
                            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(Experience => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                                return (
                                    <div className="common-details" key={listId}>
                                        <div className="common-date-line">
                                            <p className='common-duration' style={{ ...paraStyleCSS, color: 'white', backgroundColor: themeColor }}>{startDate} - {endDate}</p>
                                        </div>
                                        <div>
                                            <p><b style={boldParaStyleCss}>{companyName}</b></p>
                                            <p><b style={boldParaStyleCss}>{jobRole}</b></p>
                                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}

                    {AllSections[8].isSection && <div className='certification-edit common-section'>
                        <h2 style={combineHeadingStyle}>{AllSections[8].sectionName}</h2>
                        {AllSections[8].list.map(Project => {
                            const { listId, instituteName, startDate, endDate, certificateName, aboutCertificate } = Project;
                            return (
                                <div className="common-details" key={listId}>
                                    <div className="common-date-line">
                                        <p className='common-duration' style={{ ...paraStyleCSS, color: 'white', backgroundColor: themeColor }}>{startDate} - {endDate}</p>
                                    </div>
                                    <div>
                                        <p><b style={boldParaStyleCss}>{instituteName}</b></p>
                                        <p><b style={boldParaStyleCss}>{certificateName}</b></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutCertificate }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>}

                    {/* CONTACT */}
                    {
                        resumeData.AllSections[1].isSection &&
                        <div className='contact-details ' style={{ backgroundColor: downColor }}>
                            {/* <h2>Contact</h2> */}
                            <ul className='contact-edit'>
                                {AllSections[1].list.map(element => {
                                    const { listId, iconName, contactName, additionalLink } = element
                                    return (
                                        <a href={additionalLink} key={listId}>
                                            <li style={{ ...paraStyleCSS, cursor: 'pointer' }}>
                                                <i style={{ backgroundColor: themeColor }} className={iconName} />
                                                <p>{contactName}</p>
                                            </li>
                                        </a>
                                    )
                                })}
                            </ul>
                        </div>}
                </div>
                <div className='right-column'>

                    {/* EDUCATION */}
                    {

                        resumeData.AllSections[5].isSection &&
                        <div className='education-information education-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(Education => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                                return (
                                    <div className='education-details' key={listId}>
                                        <p><b style={boldParaStyleCss}>{collegeName}</b></p>
                                        <p><b style={boldParaStyleCss}>{course} | </b><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                    </div>
                                )
                            })}
                        </div>}

                    {/* PROJECTS */}
                    {
                        resumeData.AllSections[2].isSection &&
                        <div className='project-information project-edit'>
                            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                            {AllSections[2].list.map(Project => {
                                const { listId, projectName, startDate, endDate, aboutProject } = Project;
                                return (
                                    <div className='project-details' key={listId}>
                                        <p><b style={boldParaStyleCss}>{projectName} | </b><i style={paraStyleCSS}>{startDate} - {endDate}</i></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
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
                                    <li style={{ backgroundColor: themeColor }} key={listId}>
                                        <p style={{ ...paraStyleCSS, color: '#fff' }}> {interest}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                    {AllSections[6].isSection && <div className='languages-information language-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[6].sectionName}</h2>
                        <ul>
                            {AllSections[6].list.map(languages => {
                                const { listId, languageName, languageProfiency } = languages;
                                return (
                                    <li style={{ backgroundColor: themeColor }} key={listId}>
                                        <p  style={{ ...paraStyleCSS, color: '#fff' }}> {languageName} - {languageProfiency}</p>
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
