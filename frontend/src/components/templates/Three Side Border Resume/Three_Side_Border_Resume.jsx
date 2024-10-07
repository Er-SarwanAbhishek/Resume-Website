import React, { useContext } from 'react';
import './Three_Side_Border_Resume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Three_Side_Border_Resume({ resumeData }) {

    const hexToRgba = (hex, opacity) => {
        hex = hex.replace(/^#/, '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    const { AllSections, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);
    const { themeColor } = resumeData;
    const downColor = hexToRgba(themeColor, 0.4);
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
        <div className="Three_Side_Border_Resume" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>

            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            <div className="Left_Column" style={{ borderColor: themeColor }}>
                <div
                    className="Profile_Image"
                    style={{
                        backgroundImage: `url(${resumeData.profileImage})`,
                        outlineColor: themeColor
                    }}
                ></div>

                {/* CONTACT */}
                {
                    resumeData.AllSections[1].isSection &&
                    <div className="Contact_info contact-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[1].sectionName}</h2>
                        <ul style={{ borderColor: themeColor }}>
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName } = element;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        <i style={{ backgroundColor: themeColor }} className={iconName} />
                                        <p style={paraStyleCSS}>{contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                {/* SKILLS */}
                {
                    resumeData.AllSections[3].isSection &&
                    <div className="Skills_Information skill-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                        <ul style={{ borderColor: themeColor }}>
                            {AllSections[3].list.map(skill => {
                                const { listId, skillName } = skill;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        <span className="dot" style={{ backgroundColor: resumeData.themeColor }}></span>
                                        <p style={paraStyleCSS}>{skillName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}

                {/* PROJECT */}
                {
                    resumeData.AllSections[2].isSection &&
                    <div className="Project_Information project-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(Project => {
                            const { listId, projectName, startDate, endDate, aboutProject } = Project;
                            return (
                                <div className="Project_Type" key={listId} style={{ borderColor: themeColor }}>
                                    <span style={{ backgroundColor: themeColor }} className="dot" />
                                    <p style={{ ...paraStyleCSS, marginBottom: 0 }}>
                                        <b>{projectName}</b>
                                    </p>
                                    <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    <p style={paraStyleCSS}>{aboutProject}</p>
                                </div>
                            )
                        })}
                    </div>}
            </div>
            <div className="Right_Column ">
                <div className="Personal_Information personal-edit personal-edit" style={{ backgroundColor: "" }}>
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
                </div>

                {/* SUMMARY */}
                {
                    resumeData.AllSections[0].isSection &&
                    <div className="Summary_Information summary-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                        <p style={{ ...paraStyleCSS, borderColor: themeColor }}>{AllSections[0].summary}</p>
                    </div>}


                {/* EDUCATION */}
                {
                    resumeData.AllSections[5].isSection &&
                    <div className="Education_Information education-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(Education => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
                            return (
                                <div className="Education_Type" key={listId} style={{ borderColor: themeColor }}>
                                    <span style={{ backgroundColor: themeColor }} className="dot" />
                                    <p style={{ ...paraStyleCSS, marginBottom: 0 }}><b>{course}</b></p>
                                    <div className="Education_Field">
                                        <p style={{ ...paraStyleCSS, marginBottom: 0 }}>{collegeName}</p>
                                        <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    </div>
                                    <p style={{ ...paraStyleCSS, marginBottom: 0 }}>{aboutEducation}</p>
                                </div>
                            )
                        })}
                    </div>}

                {/* JOB EXP */}
                {
                    resumeData.AllSections[4].isSection &&
                    <div className="Experience_Information job-exp-edit" style={{ borderColor: themeColor }}>
                        <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(Experience => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
                            return (
                                <div className="Experience_Details" key={listId} style={{ borderColor: themeColor }}>
                                    <span className="dot" style={{ backgroundColor: themeColor }}></span>
                                    <p style={{ ...paraStyleCSS, marginBottom: 0 }}><b>{companyName}</b></p>
                                    <div className="Experience_Level">
                                        <p style={{ ...paraStyleCSS, marginBottom: 0 }}>{jobRole}</p>
                                        <p style={paraStyleCSS}><i>{startDate} - {endDate}</i></p>
                                    </div>
                                    <p style={{ ...paraStyleCSS, marginBottom: 0 }}>{aboutJob}</p>
                                </div>
                            )
                        })}
                    </div>}
            </div>
            <div className="Border_Gradient" style={{ background: `linear-gradient(90deg, ${themeColor} 68%, rgba(255, 255, 255, 1) 68%)` }} />
            <div className="Border_Gradient_R" style={{ backgroundColor: themeColor }}></div>
        </div>

    )
}
