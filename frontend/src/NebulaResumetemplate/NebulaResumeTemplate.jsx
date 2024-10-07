import React from 'react';
import { NebulaResumeTemplateData } from './NebulaResumeTemplateData';
import newImage from '../assets/PatternImage.svg'
import '../NebulaResumetemplate/NebulaResumeTemplate.css';

export const NebulaResumeTemplate = () => {
    return (
        <div className="Nebula-Template">
    
            <div className="Nebula-Upper-section-content">
              <div className="Nebula-U-Left">
              <div className='Nebula-img-box'>
                <img src={NebulaResumeTemplateData.profileImage} alt="" />
                </div>
                <div className='Nebula-img-shadow' style={{ backgroundImage: `url(${newImage})` }}></div>
              </div>
              <div className="Nebula-U-Right">
  
                {NebulaResumeTemplateData.AllSections[1].list.map((element, index) => (
                    <div key={index} className="Nebula-sec-details Nebula-Para-Size-Option">
                      <i className={element.iconName}></i>
                      <p className="para-font-size">{element.contactName}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className='Nebula-Name-sec'>
              <div className='Nebula-U-Left'></div>
              <div className='Nebula-U-Right'>
                  <h1>{NebulaResumeTemplateData.userName}</h1>
                  <p>{NebulaResumeTemplateData.userJobRole}</p>
                </div>
                </div>

                <div className='Nebula-About-sec'>
                  <div className='Nebula-About-Left'>
                    <h1></h1>
                  </div>
                  <div className='Nebula-About-Right Nebula-Heading-Style'>
                  <h2 className="hhh custom-hhh">{NebulaResumeTemplateData.AllSections[0].sectionName}</h2>
                  <p className="ppp para-font-size">{NebulaResumeTemplateData.AllSections[0].summary}</p>
                  </div>
        
                 </div>
                
            <div className="Nebula-Heading-Style Nebula-Lower-section">
              <div className="Nebula-Left">
                {/* Education */}
                <h2 className="hhh">{NebulaResumeTemplateData.AllSections[5].sectionName}</h2>
                {NebulaResumeTemplateData.AllSections[5].list.map((element, index) => {
                  const {
                    collegeName,
                    course,
                    startDate,
                    endDate,
                    aboutEducation,
                  } = element;
                  return (
                    <div key={index}>
                      <h4 className='Nebula-subheading-weight'>{startDate} - {endDate}<br />
                     {collegeName}</h4>
                      <div className="Nebula-mydiv Nebula-Para-Size-Option">
                        <h4>{course}</h4>
                        <p className="para-font-size pfs">{aboutEducation}</p>
                      </div>
                    </div>
                  );
                })}
                {/* Skills */}
                <div className="Nebula-Heading-style Nebula-skils">
                  <h2 className="hhh">{NebulaResumeTemplateData.AllSections[3].sectionName}</h2>
                  <div className='Nebula-skills-list'>
                    {NebulaResumeTemplateData.AllSections[3].list.map((element, index) => (
                      <li key={index}>{element.skillName}</li>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Nebula-Right">
                {/* Experience */}
                <h2 className="hhh">{NebulaResumeTemplateData.AllSections[4].sectionName}</h2>
                {NebulaResumeTemplateData.AllSections[4].list.map((element, index) => {
                  const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                  return (
                    <div key={index}>
                      <h4 className='Nebula-subheading-weight'>From {startDate} - {endDate}</h4>
                      <div className="Nebula-mydiv Nebula-Para-Size-Option">
                        <h4><p>{jobRole}-{companyName}</p></h4>
                        <p className="para-font-size pfs">{aboutJob}</p>
                      </div>
                    </div>
                  );
                })}
                {/* Project */}
                <h2 className="hhh">{NebulaResumeTemplateData.AllSections[2].sectionName}</h2>
                {NebulaResumeTemplateData.AllSections[2].list.map((element, index) => {
                  const { projectName, startDate, endDate, aboutProject } = element;
                  return (
                    <div key={index}>
                      <h4 className='Nebula-subheading-weight'>{startDate} - {endDate}</h4>
                      <div className="Nebula-mydiv Nebula-Para-Size-Option">
                        <h4>{projectName}</h4>
                        <p className="para-font-size pfs">{aboutProject}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
      );
}
