import React, { useContext } from 'react';
import './Professional_Resume_Presentation_Template.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Professional_Resume_Presentation_Template({ resumeData }) {


    const { AllSections, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);

    const { backgroundPattern } = resumeStyle;

    return (
        <div className="Professional_Resume_Presentation_Template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            {/* {/ HEADER SECTION /} */}

            <div className="header">
                <div className="img-module">
                    <img src={resumeData.profileImage} alt="" />
                </div>
                <div className="personal-details-module personal-edit">
                    <h1>{resumeData.userName}</h1>
                    <h2>{resumeData.userJobRole}</h2>

                </div>
                {/* {/ CONTACT SECTION /} */}
                {
                    resumeData.AllSections[1].isSection &&
                    <div>

                        <ul className="icon-contact contact-edit">
                            {AllSections[1].list.map(element => {
                                const { listId, iconName, contactName } = element;
                                return (
                                    <li key={listId}>
                                        <i className={iconName}></i>
                                        <p>{contactName}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
            </div>


            <div className="row">
                <div className=" column left-column">
                    {/* {/ SKILLS SECTION /} */}
                    <div className='skill-edit'>
                        <h4>{AllSections[3].sectionName}</h4>
                        <ul className="skill-sec">
                            {AllSections[3].list.map(element => {
                                const { listId, skillName } = element;
                                return <li key={listId}>{skillName}</li>
                            })}
                        </ul>
                    </div>

                    {/* {/ PROJECT SECTION /} */}

                    {
                        resumeData.AllSections[2].isSection &&

                        <>
                            <div className='project-edit'>
                                <h4>{AllSections[2].sectionName}</h4>
                                {AllSections[2].list.map(element => {
                                    const { listId, projectName, startDate, endDate, aboutProject } = element;
                                    return (
                                        <div className="project-sec common-sec" key={listId}>
                                            <div className="name-date">
                                                <div style={{ marginBottom: '5px' }}>
                                                    <p><b>{projectName}</b></p>
                                                    <p style={{ fontStyle: 'italic' }}>{startDate} / {endDate}</p>
                                                </div>
                                            </div>
                                            <span>{aboutProject}</span>
                                        </div>
                                    )
                                })}</div></>
                    }
                </div>

                <div className="column right-column">

                    {/* SUMMARY SECTION  */}
                    <div className='summary-edit'>
                        resumeData.AllSections[0].isSection &&
                        <><h4>{AllSections[0].sectionName}</h4>
                            <p>{AllSections[0].summary}</p></>
                    </div>

                    {/* {/ JOB EXPERIENCE SECTION /} */}
                    <div className='job-exp-edit'>

                        {

                            resumeData.AllSections[4].isSection &&
                            <>
                                <h4>{AllSections[4].sectionName}</h4>
                                {AllSections[4].list.map(element => {
                                    const { listId, companyName, jobRole, startDate, endDate, aboutJob } = element;
                                    return (
                                        <div className="job-sec common-sec" key={listId}>
                                            <div className="name-date">
                                                <div style={{ marginBottom: '5px' }}>
                                                    <p><b>{companyName}</b></p>
                                                    <p style={{ fontStyle: 'italic' }}>{jobRole}</p>
                                                </div>
                                                <p>{startDate} / {endDate}</p>
                                            </div>
                                            <span>{aboutJob}</span>
                                        </div>
                                    )
                                })}</>}

                    </div>

                    {/* {/ EDUCATION SECTION /} */}
                    <div className='education-edit'>
                        {
                            resumeData.AllSections[5].isSection &&
                            <>
                                <h4>{AllSections[5].sectionName}</h4>
                                {AllSections[5].list.map(element => {
                                    const { listId, collegeName, course, startDate, endDate, aboutEducation } = element;
                                    return (
                                        <div className="education-sec common-sec" key={listId}>
                                            <div className="name-date">
                                                <div style={{ marginBottom: '5px' }}>
                                                    <p><b>{collegeName}</b></p>
                                                    <p style={{ fontStyle: 'italic' }}>{course}</p>
                                                </div>
                                                <p>{startDate} / {endDate}</p>
                                            </div>
                                            <p style={{ paddingBottom: '8px', fontSize: '14px' }}>{aboutEducation}</p>
                                        </div>
                                    )
                                })}</>}
                    </div>

                </div>
            </div></div>
    )
}
