import React from 'react'
import './SalesAchieverResume.css'
import { SalesAchieverResumeData } from './SalesAchieverResumeData'

export const SalesAchieverResume = () => {
  return (
    <div className="SalesAchieverRT">
        {/* Shapes */}
        <div className="tiangle-shapes">

        </div>
        {/* Shapes */}
        <div className="parent-sec">
            <div className="left-sec">
                <div className='for-img'>
                <img src={SalesAchieverResumeData.profileImage} alt="" />
                </div>
                <div className="contact">
                <h2>{SalesAchieverResumeData.AllSections[1].sectionName}</h2>
                {SalesAchieverResumeData.AllSections[1].list.map((element, index) => (
                    <div key={index} >
                      <p className="para-font-size">{element.contactName}</p>
                    </div>
                  ))}
                </div>
                <div className="skills">
                    <h2>{SalesAchieverResumeData.AllSections[3].sectionName}</h2>
                    {SalesAchieverResumeData.AllSections[3].list.map((element,index)=>(
                        <li key={index}>{element.skillName}</li>
                    ))}
                </div>
                <div className="education">
                    <h2>{SalesAchieverResumeData.AllSections[5].sectionName}</h2>
                    {SalesAchieverResumeData.AllSections[5].list.map((element,index)=>{
                        const {
                            collegeName,
                            course,startDate,endDate,aboutEducation
                        } =element;
                        return(
                            <div key={index}>
                                <h3>{course}</h3>
                                <h4>{collegeName} | {startDate} | {endDate}</h4>
                                <p>{aboutEducation}</p>
                            </div>
                        )
                    })}
                </div>
            </div>



            <div className="right-sec">
                <div className="profile-details">
                    <h1>{SalesAchieverResumeData.userName}</h1>
                    <p>{SalesAchieverResumeData.userJobRole}</p>
                </div>
                <div className="gradient-section">     
                </div>
                <div className="summary">
                    <h2>{SalesAchieverResumeData.AllSections[0].sectionName}</h2>
                    <p>{SalesAchieverResumeData.AllSections[0].summary}</p>
                </div>
                <div className="experience">
                    <h2>{SalesAchieverResumeData.AllSections[4].sectionName}</h2>
                    {SalesAchieverResumeData.AllSections[4].list.map((element, index) => {
                  const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                  return (
                    <div key={index}>
                      <h3> {jobRole}</h3>
                        <h4>{companyName} | {startDate} - {endDate}</h4>
                        <p>{aboutJob}</p>
                      </div>
                  );
                })}
                </div>
                <div className="projects">
                    <h2>{SalesAchieverResumeData.AllSections[2].sectionName}</h2>
                    {SalesAchieverResumeData.AllSections[2].list.map((element,index)=>{
                        const {projectName,startDate,endDate,aboutProject}=element;
                        return(
                            <div key={index}>
                                <h3>{projectName}</h3>
                                <h4>{startDate}-{endDate}</h4>
                                <p>{aboutProject}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
