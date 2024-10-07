import React, { useContext } from 'react';
import './Blue_and_White_Clean_and_Professional_Resume.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Blue_and_White_Clean_and_Professional_Resume({ resumeData }) {

    const { AllSections, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor,
    }
    const { backgroundPattern } = resumeData.resumeStyle;

    const paraStyleCSS = {
        fontFamily: resumeData.bodyTextFont,
        color: resumeData.bodyTextColor,
        fontSize: `${resumeData.bodyTextSize}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

    return (
        <div className="blue-and-white-clean-resume" style={{ backgroundImage: `url("./background-pattern/${backgroundPattern}.png")` }}>

            {/* HEADER SECTION */}

            <div className="header">

                {
                    isQRCode ? <div className="resume-qr-code">
                        <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                    </div> : <></>
                }

                <div className="img-module">
                    <img src={resumeData.profileImage} alt="" />
                </div>
                <div className="personal-details-module personal-edit">
                    <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                    <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>

                    {/* CONTACT SECTION */}

                    {
                        resumeData.AllSections[1].isSection &&
                        <ul className="icon-contact contact-edit">
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName } = element;
                                return (
                                    <li style={paraStyleCSS} key={listId}>
                                        <i className={iconName}></i>
                                        <p style={paraStyleCSS}>{contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>}
                </div>
            </div>

            {/* SUMMARY SECTION */}

            {
                resumeData.AllSections[0].isSection &&
                <div className='summary-edit'>
                    <><h2 style={combineHeadingStyle}>{AllSections[0].sectionName}</h2>
                        <p className="summary-para" style={paraStyleCSS}>{AllSections[0].summary}</p></>
                </div>
            }
            {/* PROJECT SECTION */}

            {
                resumeData.AllSections[2].isSection &&
                <>
                    <div className='project-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[2].sectionName}</h2>
                        {AllSections[2].list.map(element => {
                            const { listId, projectName, startDate, endDate, aboutProject } = element;
                            return (
                                <div className="project-sec common-sec" key={listId}>
                                    <div className="name-date" style={{ marginBottom: '5px' }}>
                                        <p style={paraStyleCSS}><b>{projectName}</b></p>
                                        <p style={paraStyleCSS}>{startDate} / {endDate}</p>
                                    </div>
                                    <p style={paraStyleCSS}>{aboutProject}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            }



            {/* JOB EXPERIENCE SECTION */}

            {resumeData.AllSections[4].isSection &&
                <div className='job-exp-edit'>
                    <> <h2 style={combineHeadingStyle}>{AllSections[4].sectionName}</h2>
                        {AllSections[4].list.map(element => {
                            const { listId, companyName, jobRole, startDate, endDate, aboutJob } = element;
                            return (
                                <div className="job-sec common-sec" key={listId}>
                                    <div className="name-date">
                                        <div style={{ marginBottom: '8px' }}>
                                            <p style={{ ...paraStyleCSS, marginBottom: '5px' }}><b>{companyName}</b></p>
                                            <p style={paraStyleCSS}>{jobRole}</p>
                                        </div>
                                        <p style={paraStyleCSS}>{startDate} / {endDate}</p>
                                    </div>
                                    <p style={paraStyleCSS}>{aboutJob}</p>
                                </div>
                            )
                        })}</>
                </div>}


            {/* SKILLS SECTION */}
            <div className='skill-edit'>

                {resumeData.AllSections[3].isSection &&
                    <><h2 style={combineHeadingStyle}>{AllSections[3].sectionName}</h2>
                        <ul className="skill-sec">
                            {AllSections[3].list.map(element => {
                                const { listId, skillName } = element;
                                return <li style={paraStyleCSS} key={listId}>{skillName}</li>
                            })}
                        </ul></>}
            </div>

            {/* EDUCATION SECTION */}

            {
                resumeData.AllSections[5].isSection &&
                <>
                    <div className='education education-edit'>
                        <h2 style={combineHeadingStyle}>{AllSections[5].sectionName}</h2>
                        {AllSections[5].list.map(element => {
                            const { listId, collegeName, course, startDate, endDate, aboutEducation } = element;
                            return (
                                <div className="education-sec common-sec" key={listId}>
                                    <div className="name-date">
                                        <div style={{ marginBottom: '8px' }}>
                                            <p style={{ ...paraStyleCSS, marginBottom: '5px' }}><b>{collegeName}</b></p>
                                            <p style={paraStyleCSS}>{course}</p>
                                        </div>
                                        <p style={paraStyleCSS}>{startDate} / {endDate}</p>
                                    </div>
                                    <p style={paraStyleCSS}>{aboutEducation}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
}