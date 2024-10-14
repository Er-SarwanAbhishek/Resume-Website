import React, { useContext } from 'react';
import './Elegant_Resume_Template.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Elegant_Resume_Template({ resumeData }) {

    const { AllSections, isQRCode } = resumeData;
    const { liveTemplateURL } = useContext(GlobalContext);

    const headingStyleCSS = {
        fontFamily: resumeData.headingTextFont,
        color: resumeData.headingTextColor
    }
    const { backgroundPattern } = resumeData.resumeStyle;

    const paraStyleCSS = {
        fontFamily: resumeData.bodyTextFont,
        color: resumeData.bodyTextColor,
        fontSize: `${resumeData.bodyTextSize}px`
    }

    const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

    return (
        <div className="elegant-resume-template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
            {
                isQRCode ? <div className="resume-qr-code">
                    <QRCodeCanvas value={liveTemplateURL} size={"50"} />
                </div> : <></>
            }
            {/* *** HEADER SECTION *** */}
            <div className='personal-edit'>
                <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
                <h4 style={headingStyleCSS} className="job-role">{resumeData.userJobRole}</h4>
            </div>


            {/* *** LEFT-RIGHT SECTIONS *** */}
            <div className="left-right-body">
                {/* ** LEFT SECTION ** */}
                <div className="left-section">

                    {/* * SUMMARY * */}
                    {
                        resumeData.AllSections[0].isSection &&
                        <>
                            <div className='summary-edit'>
                                <h2 style={combineHeadingStyle} className="section-name">
                                    <i className="fa-regular fa-user" />
                                    {AllSections[0].sectionName}
                                </h2>
                                <p style={paraStyleCSS} className="m-bottom" dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
                            </div></>

                    }
                    {/* * CONTACT SECTION * */}
                    <div className='contact-edit'>
                        {

                            resumeData.AllSections[1].isSection &&

                            <><h2 style={combineHeadingStyle} className="section-name">
                                <i className="fa-regular fa-address-book" />
                                {AllSections[1].sectionName}
                            </h2>
                                <ul className="contact">
                                    {AllSections[1].list.map(element => {
                                        const { listId, iconName, contactName } = element;
                                        return <li style={paraStyleCSS} key={listId}><i className={iconName} /> {contactName}</li>;
                                    })}
                                </ul>
                            </>
                        }
                    </div>

                    {/* * SKILLS SECTION * */}
                    <div className='skill-edit'>
                        {
                            resumeData.AllSections[3].isSection &&
                            <>
                                <h2 style={combineHeadingStyle} className="section-name">
                                    <i className="fa-solid fa-list-check" />
                                    {AllSections[3].sectionName}
                                </h2>
                                <ul className="skills">
                                    {AllSections[3].list.map(element => {
                                        const { listId, skillName } = element;
                                        return <li style={paraStyleCSS} key={listId}>{skillName}</li>;
                                    })}
                                </ul> </>}
                    </div>
                    {/* * PROJECT SECTION * */}
                    <div className='project-edit'>
                        {
                            resumeData.AllSections[2].isSection &&
                            <>
                                <h2 style={combineHeadingStyle} className="section-name">
                                    <i className="fa-regular fa-folder" />
                                    {AllSections[2].sectionName}
                                </h2>
                                <div className="project-section">
                                    {AllSections[2].list.map(element => {
                                        const { listId, projectName, startDate, endDate, aboutProject } = element;
                                        return (
                                            <div className="common-sec" key={listId}>
                                                <div style={{ width: "40%" }}>
                                                    <p style={paraStyleCSS}>{startDate} - {endDate}</p>
                                                    <p style={paraStyleCSS} className="uppercase">
                                                        <b>{projectName}</b>
                                                    </p>
                                                </div>
                                                <div style={{ width: "55%" }}>
                                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div> </>}
                    </div>
                </div>
                {/* ** RIGHT SECTION ** */}
                <div className="right-section">
                    {/* * WORK EXP SECTION * */}
                    <div className='job-exp-edit'>
                        {
                            resumeData.AllSections[4].isSection &&
                            <>
                                <h2 style={combineHeadingStyle} className="section-name">
                                    <i className="fa-regular fa-compass" />
                                    {AllSections[4].sectionName}
                                </h2>
                                <div className="exp-section">
                                    {AllSections[4].list.map(element => {
                                        const { listId, companyName, jobRole, startDate, endDate, aboutJob } = element;
                                        return (
                                            <div className="common-sec" key={listId}>
                                                <div style={{ width: "40%" }}>
                                                    <p style={paraStyleCSS}>{startDate} - {endDate}</p>
                                                    <p style={paraStyleCSS} className="uppercase"><b>{companyName}</b></p>
                                                </div>
                                                <div style={{ width: "55%" }}>
                                                    <p style={paraStyleCSS} className="uppercase">
                                                        <b>{jobRole}</b>
                                                    </p>
                                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div></>}
                    </div>
                    {/* * EDUCATION SECTION * */}
                    <div className='education-edit'>
                        {
                            resumeData.AllSections[5].isSection &&
                            <>
                                <h2 style={combineHeadingStyle} className="section-name">
                                    <i className="fa-regular fa-pen-to-square" />
                                    {AllSections[5].sectionName}
                                </h2>
                                <div className="edu-section">
                                    {AllSections[5].list.map(element => {
                                        const { listId, collegaName, course, startDate, endDate, aboutEducation } = element;
                                        return (
                                            <div className="common-sec" key={listId}>
                                                <div style={{ width: "40%" }}>
                                                    <p style={paraStyleCSS}>{startDate} - {endDate}</p>
                                                    <p style={paraStyleCSS} className="uppercase"><b>{course}</b></p>
                                                </div>
                                                <div style={{ width: "55%" }}>
                                                    <p style={paraStyleCSS} className="uppercase">
                                                        <b>{collegaName}</b>
                                                    </p>
                                                    <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div> </>}
                    </div>
                </div>
            </div>
        </div >

    )
}
