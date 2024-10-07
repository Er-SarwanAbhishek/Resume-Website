import React from 'react';
import './SATSTemplate.css';
import { currentTemplateData } from '../Templates/TemplateData';

export default function SATSTemplate() {


    return (
            <div className="sata-resume-template">
                <div className="sata-section sata-name">
                    <img src={currentTemplateData.profileImage} alt="" style={{ width: '100px', height: '100px' }} />
                    <div className='sata-name-data'>
                        <h1>{currentTemplateData.userName}</h1>
                        <p>{currentTemplateData.userJobRole}</p>
                    </div>
                </div>
    
                {/* <!--ABOUT SECTION--> */}
    
                <div className="sata-section sata-about-me">
                    <h2>{currentTemplateData.AllSections[0].sectionName}</h2>
                    <p>{currentTemplateData.AllSections[0].summary}</p>
                </div>
                <div className='sata-parent-multiple-group'>
                    <div className='sata-multiple-group-section-left'>
                        {/* <!--CONTACT SECTION--> */}
    
                        <div className="sata-section sata-contact-me">
                            <h2>{currentTemplateData.AllSections[1].sectionName}</h2>
                            <div className="sata-contact">
                                {currentTemplateData.AllSections[1].list.map((element) => {
                                    return (
                                        <div class="sata-contact">
                                            <i class={element.iconName}></i>
                                            <p>{element.contactName}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
    
                        {/* <!--SKILL SECTION--> */}
    
                        <div className="sata-section sata-skill">
                            <h2>{currentTemplateData.AllSections[3].sectionName}</h2>
                            <ul className="sata-skills">
                                {currentTemplateData.AllSections[3].list.map((element) => {
                                    return <li>{element.skillName}</li>
                                })}
                            </ul>
                        </div>
    
                        {/* <!--EDUCATION SECTION--> */}
    
                        <div className="sata-section sata-education">
                            <h2>{currentTemplateData.AllSections[5].sectionName}</h2>
                            <div className="sata-educations">
                                {currentTemplateData.AllSections[5].list.map((element, index) => {
                                    const { collegeName, course, startDate, endDate, aboutEducation } = element;
                                    return (
                                        <React.Fragment key={index}>
                                            <h3>{collegeName}</h3>
                                            <p>{course}</p>
                                            <p>{startDate} - {endDate}</p>
                                            <p>{aboutEducation}</p>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* <!--JOB SECTION--> */}
    
                    <div className='sata-multiple-group-section-right'>
                        <div className="sata-section sata-job">
                            <h2>{currentTemplateData.AllSections[4].sectionName}</h2>
                            <div className="sata-job-experience">
                                {currentTemplateData.AllSections[4].list.map((element, index) => {
                                    const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                                    return (
                                        <div className='sata-job-position' key={index}>
                                            <h3>{companyName}</h3>
                                            <p>{jobRole}</p>
                                            <p className='sata-job-period'>{startDate} - {endDate}</p>
                                            <p>{aboutJob}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
    
                        {/* <!--PROJECT SECTION--> */}
    
                        <div className="sata-section sata-project">
                            <h2>{currentTemplateData.AllSections[2].sectionName}</h2>
                            <div className="sata-projects">
                                {currentTemplateData.AllSections[2].list.map((element, index) => {
                                    const { projectName, startDate, endDate, aboutProject } = element;
                                    return (
                                        <div className='sata-section-position' key={index}>
                                            <h3>{projectName}</h3>
                                            <p className='sata-project-period'>{startDate} - {endDate}</p>
                                            <p>{aboutProject}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }