import React, { useContext } from 'react';
import "./Entry_Level_Tech_Professional_Resume.css";
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';

export default function Entry_Level_Tech_Professional_Resume({ resumeData }) {
  const { AllSections, isQRCode } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);
  const { themeColor } = resumeData;
  const { backgroundPattern } = resumeData.resumeStyle;

  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor,
  }

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

  return (
    <div className="Entry_Level_Tech_Professional_Resume" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }
      <div className="Header">
        <div className="Personal_Details personal-edit">
          <h1 style={headingStyleCSS}> {resumeData.userName} </h1>
          <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
        </div>
        {/* CONTACT */}
        {
          resumeData.AllSections[1].isSection &&

          <div className="Contact_Information contact-edit">
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[1].sectionName}</h2>
            <ul>
              {AllSections[1].list.map(element => {
                const { listId, iconName, contactName } = element
                return (
                  <li style={paraStyleCSS} key={listId}>
                    <i className={iconName} />
                    {contactName}
                  </li>
                )
              })}
            </ul>
          </div>}

        {/* //SUMMARY */}
        {
          resumeData.AllSections[0].isSection &&
          <div className="summary summary-edit">
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[0].sectionName}</h2>
            <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
          </div>}
        {/* SKILLS */}
        {
          resumeData.AllSections[3].isSection &&
          <div className="Skills_Information skill-edit">
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[3].sectionName}</h2>
            <ul>
              {AllSections[3].list.map(skill => {
                const { listId, skillName } = skill;
                return (
                  <li style={paraStyleCSS} key={listId}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      className="injected-svg"
                      data-src="https://cdn.hugeicons.com/icons/diamond-01-duotone-rounded.svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      role="img"
                      color="#000000"
                    >
                      <path
                        opacity="0.4"
                        d="M6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2C13.8583 2 14.8907 3.24268 16.9556 5.72803L18.041 7.03437C20.0137 9.4087 21 10.5959 21 12C21 13.4041 20.0137 14.5913 18.041 16.9656L16.9557 18.272C14.8907 20.7573 13.8583 22 12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438Z"
                        fill="#000000"
                      />
                      <path
                        d="M6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2C13.8583 2 14.8907 3.24268 16.9556 5.72803L18.041 7.03437C20.0137 9.4087 21 10.5959 21 12C21 13.4041 20.0137 14.5913 18.041 16.9656L16.9557 18.272C14.8907 20.7573 13.8583 22 12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                      />
                    </svg>{" "}
                    {skillName}
                  </li>
                )
              })}
            </ul>
          </div>}

        {/* EDUCATION */}
        {resumeData.AllSections[5].isSection &&
          <div className="Education_Information education-edit">
            {/* <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>Education</h2> */}
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[5].sectionName}</h2>
            {AllSections[5].list.map(Education => {
              const { listId, collegeName, course, startDate, endDate, aboutEducation } = Education;
              return (
                <div className="Each_Education" key={listId}>
                  <div className="Education_Field">
                    <p style={paraStyleCSS}><b>{course}</b></p>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                  </div>
                  <p style={paraStyleCSS}>
                    <b>{collegeName}</b>
                  </p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                </div>
              )
            })}
          </div>}

        {/* PROJECTS */}
        {
          resumeData.AllSections[2].isSection &&
          <div className="Project_Information project-edit">
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[2].sectionName}</h2>
            {AllSections[2].list.map(Project => {
              const { listId, projectName, startDate, endDate, aboutProject } = Project;
              return (
                <div className="Each_Project" key={listId}>
                  <div className="Project_Type">
                    <p style={paraStyleCSS}><b>{projectName}</b></p>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                  </div>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                </div>
              )
            })}
          </div>}

        {/* EXPERIENCE */}
        {

          resumeData.AllSections[4].isSection && <div className="Experience_Information job-exp-edit">
            <h2 style={{ ...combineHeadingStyle, backgroundColor: themeColor }}>{AllSections[4].sectionName}</h2>
            {AllSections[4].list.map(Experience => {
              const { listId, companyName, jobRole, startDate, endDate, aboutJob } = Experience;
              return (
                <div className="Each_Experience" key={listId}>
                  <div className="Experience_Level">
                    <p style={paraStyleCSS}><b>{companyName}</b></p>
                    <p style={paraStyleCSS}>
                      <i>{startDate} - {endDate}</i>
                    </p>
                  </div>
                  <p style={paraStyleCSS}>
                    <b>{jobRole}</b>
                  </p>
                  <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                </div>
              )
            })}
          </div>}
      </div>
    </div>
  )
}
