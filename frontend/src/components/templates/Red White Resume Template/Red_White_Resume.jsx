import React, { useContext } from "react";
import "./Red_White_Resume.css";
import GlobalContext from "../../context/GlobalContext";
import Top_Shape from "./bg-img-up.svg";
import Bottom_Shape from "./bg-img-bottom.svg";


export const Red_White_Resume = () => {
  const { currentTemplateData } = useContext(GlobalContext)
  const { AllSections } = currentTemplateData;

  return (
    // <div>Red_White_Resume</div>
    <div className="red-white-resume">
      <img src={Top_Shape} className="img-up" alt="up image" />
      <img src={Bottom_Shape} className="img-bottom" alt="bottom image" />
      {/* HEADER SECTION */}

      <div className="header">
        <div className="personal-details-module personal-edit">
          <h1>{currentTemplateData.userName}</h1>
          {/* <h2>{currentTemplateData.userJobRole}</h2> */}
        </div>
        <div className="img-module" style={{ backgroundImage: `url(${currentTemplateData.profileImage})` }}>
        </div>
      </div>
      {/* CONTACT SECTION */}

      <div className="contact contact-edit">
        {/* <h2>{currentTemplateData.AllSections[1].sectionName}</h2> */}
        {currentTemplateData.AllSections[1].list.map((element) => {
          return (
            <div class="contact-imgs">
              <i class={element.iconName}></i>
              <p>{element.contactName}</p>
            </div>
          );
        })}
      </div>
      <div className="bottom-details">
        <div className="left-section">
          {/* SUMMARY SECTION */}

          <div className="about-me summary-edit">
            <h2>{AllSections[0].sectionName}</h2>
            <div style={{ marginBottom: "25px" }} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
          </div>

          {/* JOB EXPERIENCE SECTION */}
          <div className="joc-exp-edit">
            <h2>{AllSections[4].sectionName}</h2>
            {AllSections[4].list.map((element) => {
              const {
                listId,
                companyName,
                jobRole,
                startDate,
                endDate,
                aboutJob,
              } = element;
              return (
                <div className="job-sec common-sec" key={listId}>
                  <div className="name-date">
                    <div style={{ marginBottom: "5px" }}>
                      <p>
                        <b>{companyName}</b>
                      </p>
                      <p style={{ marginBottom: "0px" }}>{jobRole}</p>
                    </div>
                    <div>
                      {" "}
                      <p style={{ marginRight: "15px" }}>
                        {startDate} / {endDate}
                      </p>
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: aboutJob }} />
                </div>
              );
            })}
          </div>

          {/* PROJECT SECTION */}
          <div className="project-edit">
            <h2>{AllSections[2].sectionName}</h2>
            {AllSections[2].list.map((element) => {
              const { listId, projectName, startDate, endDate, aboutProject } =
                element;
              return (
                <div className="project-sec common-sec">
                  <div className="name-date">
                    <p style={{ marginBottom: "0px" }}>
                      <b>{projectName}</b>
                    </p>
                    <p>
                      {startDate} / {endDate}
                    </p>
                  </div>
                  <div style={{ marginTop: "0px" }} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                </div>
              );
            })}
          </div>

        </div>
        <div className="right-section">
          {/* SKILLS SECTION */}

          <div className="skills skill-edit">
            <h2>{currentTemplateData.AllSections[3].sectionName}</h2>
            {currentTemplateData.AllSections[3].list.map((element, index) => {
              const { skillName } = element;
              return (
                <React.Fragment key={index}>
                  <li>{skillName}</li>
                  {/* <p>{skillName}</p> */}
                </React.Fragment>
              );
            })}
          </div>
          {/* EDUCATION SECTION */}
          <div className="education-edit">
            <h2>{AllSections[5].sectionName}</h2>
            {AllSections[5].list.map((element) => {
              const {
                listId,
                collegeName,
                course,
                startDate,
                endDate,
                aboutEducation,
              } = element;
              return (
                <div className="education-sec common-sec">
                  <div className="name-date">
                    <div style={{ marginBottom: "5px" }}>
                      <p style={{ marginBottom: "0px" }}>
                        <b>{collegeName}</b>
                      </p>
                      <p style={{ marginBottom: "0px" }}>{course}</p>
                    </div>
                    <p style={{ marginRight: "15px" }}>
                      {startDate} / {endDate}
                    </p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div >
  );
};
