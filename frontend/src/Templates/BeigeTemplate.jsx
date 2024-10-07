import React from "react";
import "./BeigeTemplate.css";
import { currentTemplateData } from "./TemplateData";
import NewImage from '../assets/Semi-circle.png'
// import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'

export const BeigeTemplate = () => {
  return (
    <div className="Beige-resume-template">
      <div className="Beige-a-Template">
        <div className="Beige-section Beige-name">
          <div className="Beige-name-data">
            <h1>{currentTemplateData.userName}</h1>
            <p>{currentTemplateData.userJobRole}</p>
          </div>
        </div>
        {/* <img className="design2" src={design2} alt="" style={{width:"50px" ,height:"50px"}} /> */}
        {/* <!--CONTACT SECTION--> */}
        <div className="Beige-section Beige-contact-me">
          <div className="Beige-contact-sec forHeading-beige">
            <h2>{currentTemplateData.AllSections[1].sectionName}</h2>
            {currentTemplateData.AllSections[1].list.map((element) => {
              return (
                <div class="Beige-contact">
                  <i class={element.iconName}></i>
                  <p>{element.contactName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!--ABOUT SECTION--> */}
      <div className="Beige-about-blank-div">
        <div className="Beige-section Beige-about-me">
          <div>
            <h2>{currentTemplateData.AllSections[0].sectionName}</h2>
            <p>{currentTemplateData.AllSections[0].summary}</p>
          </div>
          <div className="Beige-profile-image">
            <img src={currentTemplateData.profileImage} alt="" />
          </div>
        </div>
        <img className="new-image" src={NewImage} alt=""  style={{ width: '100px', height: '100px' }}/>
      </div>
     

      {/* <!--EDUCATION SECTION--> */}
      <div className="Beige-b-Template">
        {/* <!--JOB SECTION--> */}
        <div className="Beige-section-job">
          <div className="Beinge-sec-job-exp">
            <div className="Beige-sec-job-heading forHeading-beige">
              <h2>{currentTemplateData.AllSections[4].sectionName}</h2>
            </div>
            <div className="Beige-sec-job-detail">
              {currentTemplateData.AllSections[4].list.map((element, index) => {
                const { companyName, jobRole, startDate, endDate, aboutJob } =
                  element;
                return (
                  <div className="Beige-job-position" key={index}>
                    <div className="Beige-edu-grp">
                      <h3>{companyName}</h3>
                      <p className="Beige-job-period">
                        {startDate} - {endDate}
                      </p>
                    </div>
                    <p className="beige-role-name">{jobRole}</p>
                    <p className="beige-about-job">{aboutJob}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="new-section-edu">
          <div className="Beige-section-education">
            <div className="Beige-section-edu">
              <div className="Beige-section-edu-heading forHeading-beige">
                <h2>{currentTemplateData.AllSections[5].sectionName}</h2>
              </div>
              <div className="Beige-section-edu-grp">
                {currentTemplateData.AllSections[5].list.map(
                  (element, index) => {
                    const {
                      collegeName,
                      course,
                      startDate,
                      endDate,
                      aboutEducation,
                    } = element;
                    return (
                      <React.Fragment key={index}>
                        <div className="Beige-edu-grp">
                          <h3>{collegeName}</h3>
                          <p>
                            {startDate} - {endDate}
                          </p>
                        </div>
                        <p className="beige-course-name">{course}</p>
                        <p className="beige-about-edu">{aboutEducation}</p>
                      </React.Fragment>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          {/* <!--SKILL SECTION--> */}

          <div className="Beige-skill-sec forHeading-beige">
            <h2>{currentTemplateData.AllSections[3].sectionName}</h2>
            <ul className="Beige-skills-sec">
              {currentTemplateData.AllSections[3].list.map((element) => {
                return  <li>{element.skillName}</li> ;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* <!--PROJECT SECTION--> */}

      {/* <div className="Beige-section Beige-project">
            <h2>{currentTemplateData.AllSections[2].sectionName}</h2>
            <div className="Beige-projects">
              {currentTemplateData.AllSections[2].list.map((element, index) => {
                const { projectName, startDate, endDate, aboutProject } =
                  element;
                return (
                  <div className="Beige-section-position" key={index}>
                    <h3>{projectName}</h3>
                    <p className="Beige-project-period">
                      {startDate} - {endDate}
                    </p>
                    <p>{aboutProject}</p>
                  </div>
                );
              })}
            </div>
          </div> */}
    </div>
  );
};
