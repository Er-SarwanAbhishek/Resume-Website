import React, { useContext } from "react";
import "./BlueModernTemplate.css";
import { QRCodeCanvas } from "qrcode.react";
import GlobalContext from "../../context/GlobalContext";


const BlueModernTemplate = ({ resumeData }) => {
  const { AllSections, isQRCode, resumeStyle } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);


  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor
  }

  const { backgroundPattern } = resumeStyle;

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }
  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }
  return (
    <div className="MRT-Template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={'50'} />
        </div> :
          <></>
      }
      <div className="MRT-Upper-section">
        <div className="MRT-Heading-Style MRT-Lower-section">
          <div className="MRT-Left">
            <div className="MRT-Sec-img" style={{
              backgroundImage: `url(${resumeData.profileImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
            </div>

            {/* EDUCATION */}

            {
              resumeData.AllSections[5].isSection &&
              <>
                <div className="education-edit">
                  <h2 style={combineHeadingStyle} className="hhh">{resumeData.AllSections[5].sectionName}</h2>
                  {resumeData.AllSections[5].list.map((element, index) => {
                    const {
                      collegeName,
                      course,
                      startDate,
                      endDate,
                      aboutEducation,
                    } = element;
                    return (
                      <div key={index}>
                        <h4 style={paraStyleCSS}>{startDate} - {endDate}<br />
                          {course}</h4>
                        <div className="MRT-mydiv MRT-Para-Size-Option">
                          <h4 style={paraStyleCSS}> {collegeName} </h4>
                          <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} className="para-font-size" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            }

            {/* SKILLS */}
            {
              resumeData.AllSections[3].isSection &&
              <div className="MRT-Heading-style MRT-skils skill-edit">
                <h2 style={combineHeadingStyle} className="hhh">{resumeData.AllSections[3].sectionName}</h2>
                <div className='MRT-skills-list'>
                  {resumeData.AllSections[3].list.map((element, index) => (
                    <li style={paraStyleCSS} key={index}>{element.skillName}</li>
                  ))}
                </div>
              </div>
            }

          </div>
          <div className="MRT-Right">
            <div className="first-sec personal-edit">
              <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
              <h4 style={{ ...headingStyleCSS }}>{resumeData.userJobRole}</h4>
            </div>

            {/* CONTACT */}
            {resumeData.AllSections[1].isSection &&
              <div className="MRT-contact-details contact-edit">
                {resumeData.AllSections[1].list.map((element, index) => (
                  <div key={index} className="MRT-sec-details MRT-Para-Size-Option">
                    <i className={element.iconName}></i>
                    <p style={paraStyleCSS} className="para-font-size">{element.contactName}</p>
                  </div>
                ))}
              </div>}


            {/* SUMMARY */}
            <div className="summary-edit">
              {
                resumeData.AllSections[0].isSection &&
                <div lang="MRT-sec-profile">
                  <h2 style={combineHeadingStyle} className="hhh custom-hhh">{resumeData.AllSections[0].sectionName}</h2>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} className="ppp para-font-size" />
                </div>
              }
            </div>
            {/* JOB EXPERIENCE */}
            {
              resumeData.AllSections[4].isSection &&
              <>
                <div className="job-exp-edit">
                  <h2 style={combineHeadingStyle} className="hhh">{resumeData.AllSections[4].sectionName}</h2>
                  {resumeData.AllSections[4].list.map((element, index) => {
                    const { companyName, jobRole, startDate, endDate, aboutJob } = element;
                    return (
                      <div key={index}>
                        <h4 style={paraStyleCSS}>{startDate} - {endDate}</h4>
                        <div className="MRT-mydiv MRT-Para-Size-Option">
                          <p style={paraStyleCSS}>{jobRole}-{companyName}</p>
                          <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} className="para-font-size" />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </>
            }


            {/* PROJECTS */}
            {
              resumeData.AllSections[2].isSection &&
              <>
                <div className="project-edit">
                  <h2 style={combineHeadingStyle} className="hhh">{resumeData.AllSections[2].sectionName}</h2>
                  {resumeData.AllSections[2].list.map((element, index) => {
                    const { projectName, startDate, endDate, aboutProject } = element;
                    return (
                      <div key={index}>
                        <h4 style={paraStyleCSS}>{startDate} - {endDate}</h4>
                        <div className="MRT-mydiv MRT-Para-Size-Option">
                          <h4 style={paraStyleCSS}>{projectName}</h4>
                          <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} className="para-font-size" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default BlueModernTemplate;