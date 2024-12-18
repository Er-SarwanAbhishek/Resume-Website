import React, { useContext } from "react";
import "./BeigeTemplate.css";
import { QRCodeCanvas } from "qrcode.react";
import GlobalContext from "../../context/GlobalContext";

const BeigeTemplate = ({ resumeData }) => {
  const { AllSections, isQRCode } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);

  const themeStyle = { backgroundColor: resumeData.themeColor }

  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    // color: resumeData.headingTextColor,
  }
  const { backgroundPattern } = resumeData.resumeStyle;

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    // color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }
  const boldParaStyleCss = {
    ...paraStyleCSS, fontSize: `${resumeData.bodyTextSize + 2}px`,  fontWeight: '600'
  
}

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

  return (
    <div className="Beige-resume-template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}.png")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className="Beige-a-Template">
        <div className="Beige-section Beige-name">
          <div className="Beige-name-data personal-edit">
            <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
            <h4 style={{...headingStyleCSS, fontSize: `${resumeData.bodyTextSize + 6}px`}}>{resumeData.userJobRole}</h4>
          </div>
        </div>
        {/* <img className="design2" src={design2} alt="" style={{width:"50px" ,height:"50px"}} /> */}


        {/* <!--CONTACT SECTION--> */}

        <div className="Beige-section Beige-contact-me">
          {
            resumeData.AllSections[1].isSection &&
            <div className="Beige-contact-sec forHeading-beige contact-edit">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[1].sectionName}</h2>
              {resumeData.AllSections[1].list.map((element) => {
                  const { listId, iconName, contactName, additionalLink } =
                    element;
                  return (
                    <a href={additionalLink} key={listId}>
                    <div className="Beige-contact" style={{ cursor: 'pointer' }}>
                        <i className={iconName}></i>
                        <p style={paraStyleCSS }>{contactName}</p>
                    </div>
                </a>
                );
              })}
            </div>
          }
        </div>
      </div>
      {/* <!--ABOUT SECTION--> */}


      {
        resumeData.AllSections[0].isSection &&
        <div className="Beige-about-blank-div">
          <div className="Beige-section Beige-about-me" style={themeStyle}>
            <div className=" summary-edit" style={{ paddingLeft: '1rem' }}>
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[0].sectionName}</h2>
              <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
            </div>
            <div className="Beige-profile-image">
              <img src={resumeData.profileImage} alt="" />
            </div>
          </div>
         
        </div>
      }



      <div className="Beige-b-Template">
        <div className="Beige-lower-left">
          {/* <!--JOB SECTION--> */}
          {
            resumeData.AllSections[4].isSection &&
            <div className="Beige-section-job job-exp-edit">
              <div className="Beinge-sec-job-exp">
                <div className="Beige-sec-job-heading forHeading-beige">
                  <h2 style={combineHeadingStyle}>{resumeData.AllSections[4].sectionName}</h2>
                </div>
                <div className="Beige-sec-job-detail">
                  {resumeData.AllSections[4].list.map((element, index) => {
                    const { companyName, jobRole, startDate, endDate, aboutJob } =
                      element;
                    return (
                      <div className="Beige-job-position" key={index}>
                        <div className="Beige-edu-grp">
                          <p style={boldParaStyleCss}>{companyName} </p>
                          <p style={boldParaStyleCss} className="Beige-job-period">
                            {startDate} - {endDate}
                          </p>
                        </div>
                        <p style={boldParaStyleCss} className="beige-role-name">{jobRole}</p>
                        <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} className="beige-about-job" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          }
          {/* <!--PROJECT SECTION--> */}

          {
            resumeData.AllSections[2].isSection &&
            <div className="Beige-section Beige-project forHeading-beige project-edit" >
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[2].sectionName}</h2>
              <div className="Beige-projects ">
                {resumeData.AllSections[2].list.map((element, index) => {
                  const { projectName, startDate, endDate, aboutProject } =
                    element;
                  return (
                    <div className="Beige-section-position" key={index}>
                      <div className="Beige-edu-grp">
                        <p style={boldParaStyleCss}>{projectName} </p>
                        <p style={boldParaStyleCss} className="Beige-job-period">
                          {startDate} - {endDate}
                        </p>
                      </div>
                      <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} className="beige-about-job" />

                    </div>
                  );
                })}
              </div>
            </div>}
        </div>
        {/* <!--EDUCATION SECTION--> */}
        <div className="new-section-edu">
          <div className="Beige-section-education">
            {
              resumeData.AllSections[5].isSection &&
              <div className="Beige-section-edu education-edit">
                <div className="Beige-section-edu-heading forHeading-beige">
                  <h2 style={combineHeadingStyle}>{resumeData.AllSections[5].sectionName}</h2>
                </div>
                <div className="Beige-section-edu-grp">
                  {resumeData.AllSections[5].list.map(
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
                            <p style={boldParaStyleCss}>{collegeName} </p>
                            <p style={boldParaStyleCss}>
                              {startDate} - {endDate}
                            </p>
                          </div>
                          <p style={boldParaStyleCss} className="beige-course-name">{course}</p>
                          <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} className="beige-about-edu" />
                        </React.Fragment>
                      );
                    }
                  )}
                </div>
              </div>
            }
            {/* <!--SKILL SECTION--> */}

            {
              resumeData.AllSections[3].isSection &&
              <div className="Beige-skill-sec forHeading-beige skill-edit">
                <h2 style={combineHeadingStyle}>{resumeData.AllSections[3].sectionName}</h2>
                <ul className="Beige-skills-sec">
                  {resumeData.AllSections[3].list.map((element) => {
                    return <li style={paraStyleCSS}>{element.skillName}</li>;
                  })}
                </ul>
              </div>
            }
          </div>
        </div>
      </div>


    </div>
  );
};


export default BeigeTemplate; 