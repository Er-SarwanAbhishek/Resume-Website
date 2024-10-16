import React, { useContext } from 'react';
import './Border_Chain_Resume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Border_Chain_Resume({ resumeData }) {

    const { AllSections, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const themeColor = { borderColor: resumeData.themeColor }
    const { backgroundPattern } = resumeData.resumeStyle;

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor,
    }

    const paraStyleCSS = {
        fontFamily: resumeData.bodyTextFont,
        color: resumeData.bodyTextColor,
        fontSize: `${resumeData.bodyTextSize}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

    return (
        <div className="Border-Style-Resume-Template" style={{ ...themeColor, backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            <div className="Header">
                <div className="P-details personal-edit" style={themeColor}>
                    <h1 style={headingStyleCSS}>
                        {resumeData.userName}
                    </h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>
                <div
                    className="Profile_Image"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                        ...themeColor
                    }}
                ></div>
            </div>
            <div className="Container">
                <div className="Left-Column">

                    {/* CONTACT */}
                    {
                        resumeData.AllSections[1].isSection &&
                        <div className="Contact-info contact-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                            <ul>
                                {AllSections[1].list.map(element => {
                                    const { listId, iconName, contactName,additionalLink } = element
                                    return (
                                        <li onClick={() => window.location.href = additionalLink} style={{ ...paraStyleCSS, cursor: 'pointer' }} key={listId}>
                                            <i className={iconName} />
                                            {contactName}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}

                    {/* SKILLS */}

                    {
                        resumeData.AllSections[3].isSection &&
                        <div className="Skills-info skill-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                            <ul style={themeColor}>
                                {AllSections[3].list.map(element => {
                                    const { listId, skillName } = element
                                    return (
                                        <li style={paraStyleCSS} key={listId}>
                                            <span style={{ backgroundColor: resumeData.themeColor }}></span>
                                            {skillName}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }


                    {/* PROJECTS */}
                    {
                        resumeData.AllSections[2].isSection &&
                        <div className="Project-info project-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                            {AllSections[2].list.map(element => {
                                const { listId, projectName, startDate, endDate, aboutProject } = element
                                return (
                                    <div key={listId}
                                        className="Project-details">
                                        <p style={paraStyleCSS}><b>{projectName}</b></p>
                                        <p style={paraStyleCSS}>
                                            <i>{startDate} - {endDate}</i>
                                        </p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                    </div>
                                )
                            })}
                        </div>}
                </div>

                <div className="Right-Column" style={themeColor}>
                    {/* SUMMARY */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <div key={AllSections[0].listId} className="Summary-info summary-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                        </div>}

                    {/* EDUCATION */}

                    {
                        resumeData.AllSections[5].isSection &&
                        <div className="Education-Field education-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                            {AllSections[5].list.map(element => {
                                const { listId, collegeName, course, startDate, endDate, aboutEducation } = element
                                return (
                                    <div key={listId}
                                        className="Each-Edu">
                                        <p style={paraStyleCSS}><b>{course}</b></p>
                                        <p style={paraStyleCSS}>{collegeName}</p>
                                        <p style={paraStyleCSS}>
                                            <i>{startDate} - {endDate}</i>
                                        </p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                    </div>
                                )
                            })}
                        </div>}

                    {/* EXPERIENCE */}
                    {
                        resumeData.AllSections[4].isSection &&
                        <div className="Experience-info job-exp-edit" style={themeColor}>
                            <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                            {AllSections[4].list.map(element => {
                                const { listId, companyName, jobRole, startDate, endDate, aboutJob } = element
                                return (
                                    <div key={listId}
                                        className="Exp-details">
                                        <p style={paraStyleCSS}><b>{companyName}</b></p>
                                        <p style={paraStyleCSS}>{jobRole}</p>
                                        <p style={paraStyleCSS}>
                                            <i>{startDate} - {endDate}</i></p>
                                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                    </div>
                                )
                            })}
                        </div>}
                </div>
            </div>
        </div>

    )
}
