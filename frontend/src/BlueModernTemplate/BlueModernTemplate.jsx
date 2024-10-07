import React from "react";
import "./BlueModernTemplate.css";
import { BlueModernTemplateData } from "./BlueModernTemplateData";

export const BlueModernTemplate = () => {
  return (
    <div className="MRT-Template">
      <div className="MRT-Upper-section">
        <div className="MRT-Upper-section-content">
          <div className="MRT-Sec-img" style={{
            backgroundImage: `url(${BlueModernTemplateData.profileImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="MRT-sec-upper">
            <div className="MRT-sec-heading">
              <h1>{BlueModernTemplateData.userName}</h1>
              <p>{BlueModernTemplateData.userJobRole}</p>
            </div>
          </div>
<div className="MRT-ul-details-sec">
          <div className="MRT-contact-details">
            {BlueModernTemplateData.AllSections[1].list.map((element, index) => (
              <div key={index} className="MRT-sec-details MRT-Para-Size-Option">
                <i className={element.iconName}></i>
                <p className="para-font-size">{element.contactName}</p>
              </div>
            ))}
          </div>
          <div className="MRT-Heading-Style MRT-sec-lower MRT-Para-Size-Option">
            <div lang="MRT-sec-profile">
              <h2 className="hhh custom-hhh">{BlueModernTemplateData.AllSections[0].sectionName}</h2>
              <p className="ppp para-font-size">{BlueModernTemplateData.AllSections[0].summary}</p>
            </div>
          </div>
 </div>
        </div>

        <div className="MRT-Heading-Style MRT-Lower-section">
          <div className="MRT-Left">
            {/* Education */}
            <h2 className="hhh">{BlueModernTemplateData.AllSections[5].sectionName}</h2>
            {BlueModernTemplateData.AllSections[5].list.map((element, index) => {
              const {
                collegeName,
                course,
                startDate,
                endDate,
                aboutEducation,
              } = element;
              return (
                <div key={index}>
                  <h4>{startDate} - {endDate}<br />
                    {course}</h4>
                  <div className="MRT-mydiv MRT-Para-Size-Option">
                    <h4> {collegeName} </h4>
                    <p className="para-font-size">{aboutEducation}</p>
                  </div>
                </div>
              );
            })}
            {/* Skills */}
            <div className="MRT-Heading-style MRT-skils">
              <h2 className="hhh">{BlueModernTemplateData.AllSections[3].sectionName}</h2>
              <div className='MRT-skills-list'>
                {BlueModernTemplateData.AllSections[3].list.map((element, index) => (
                  <li key={index}>{element.skillName}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="MRT-Right">
            {/* Experience */}
            <h2 className="hhh">{BlueModernTemplateData.AllSections[4].sectionName}</h2>
            {BlueModernTemplateData.AllSections[4].list.map((element, index) => {
              const { companyName, jobRole, startDate, endDate, aboutJob } = element;
              return (
                <div key={index}>
                  <h4>{startDate} - {endDate}</h4>
                  <div className="MRT-mydiv MRT-Para-Size-Option">
                    <h4><p>{jobRole}-{companyName}</p></h4>
                    <p className="para-font-size">{aboutJob}</p>
                  </div>
                </div>
              );
            })}
            {/* Project */}
            <h2 className="hhh">{BlueModernTemplateData.AllSections[2].sectionName}</h2>
            {BlueModernTemplateData.AllSections[2].list.map((element, index) => {
              const { projectName, startDate, endDate, aboutProject } = element;
              return (
                <div key={index}>
                  <h4>{startDate} - {endDate}</h4>
                  <div className="MRT-mydiv MRT-Para-Size-Option">
                    <h4>{projectName}</h4>
                    <p className="para-font-size">{aboutProject}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
