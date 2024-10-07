import React from "react";
import "./FThemeTemplate.css";
import { FThemeTemplateData } from "./FThemeTemplateData";

export const FThemeTemplate = () => {
  return (
    <div className="FThemeTemplate-Template">
      <div className="FThemeTemplate-for-bottom-border-only">
        {/* Section-A */}
        <div className="FThemeTemplate-Section-A">
          <div className="FThemeTemplate-sub-section-A">
            <h1>{FThemeTemplateData.userName}</h1>
            <p>{FThemeTemplateData.userJobRole}</p>
          </div>
          <div className="FThemeTemplate-sec-acc-FT">
            {FThemeTemplateData.AllSections[1].list.map((element) => {
              return (
                <div className="FThemeTemplate-account" key={element.contactName}>
                  <p>{element.contactName}</p>
                  <i className={element.iconName}></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="FThemeTemplate-padding">
        {/* Section-B */}
        <div className="FThemeTemplate-section-B">
          <div className="FThemeTemplate-for-heading FThemeTemplate-sub-section-B">
            <h2>{FThemeTemplateData.AllSections[0].sectionName}</h2>
          </div>
          <p>{FThemeTemplateData.AllSections[0].summary}</p>
        </div>
        {/* Section-C */}
        <div className="FThemeTemplate-section-C">
          <div className="FThemeTemplate-sub-section-c-left">
            {/* experience | Job */}
            <div className="FThemeTemplate-for-heading FThemeTemplate-sub-section-c-job">
              <h2>{FThemeTemplateData.AllSections[4].sectionName}</h2>
              <div className='FThemeTemplate-job-secction-details'>
                {FThemeTemplateData.AllSections[4].list.map((element, index) => {
                  const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                  return (
                    <div key={index}>
                      <h3>{companyName} | {startDate} - {endDate}</h3>
                      <p className='FThemeTemplate-sub-heading'>{jobRole}</p>
                      <p>{aboutJob}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* projects */}
            <div className="FThemeTemplate-for-heading FThemeTemplate-projects">
              <h2>{FThemeTemplateData.AllSections[2].sectionName}</h2>
              <div className="FThemeTemplate-projeccts-details">
                {FThemeTemplateData.AllSections[2].list.map((element, index) => {
                  const { projectName, startDate, endDate, aboutProject } = element;
                  return (
                    <div key={index}>
                      <h3>{projectName} | {startDate} - {endDate}</h3>
                      <p>{aboutProject}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="FThemeTemplate-sub-section-c-right">
            {/* Skills */}
            <div className="FThemeTemplate-for-heading FThemeTemplate-skils">
              <h2>{FThemeTemplateData.AllSections[3].sectionName}</h2>
              <div className='FThemeTemplate-skills-list'>
                {FThemeTemplateData.AllSections[3].list.map((element, index) => (
                  <li key={index}>{element.skillName}</li>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className='FThemeTemplate-for-heading FThemeTemplate-education'>
              <h2>{FThemeTemplateData.AllSections[5].sectionName}</h2>
              <div className='FThemeTemplate-education-details'>
                {FThemeTemplateData.AllSections[5].list.map((element, index) => {
                  const { collegeName, course, startDate, endDate, aboutEducation } = element;
                  return (
                    <React.Fragment key={index}>
                      <h3>{collegeName} | {startDate} - {endDate}</h3>
                      <p className='FThemeTemplate-sub-heading'>{course}</p>
                      <p>{aboutEducation}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
