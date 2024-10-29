import React, { useContext } from 'react'
import './GrayThemetemplate.css';
import { QRCodeCanvas } from 'qrcode.react';
import GlobalContext from '../../context/GlobalContext';


export const GrayThemeTemplate = ({ resumeData }) => {
  const { AllSections, isQRCode, themeColor } = resumeData;
  const { liveTemplateURL } = useContext(GlobalContext);
  const headingStyleCSS = {
    fontFamily: resumeData.headingTextFont,
    color: resumeData.headingTextColor,
  }

  const { backgroundPattern } = resumeData.resumeStyle;

  const paraStyleCSS = {
    fontFamily: resumeData.bodyTextFont,
    color: resumeData.bodyTextColor,
    fontSize: `${resumeData.bodyTextSize}px`
  }

  const combineHeadingStyle = { ...headingStyleCSS, fontSize: `${resumeData.headingTextSize}px` }

  return (

    <div className="GTT-resume-template" style={{ backgroundImage: `url("/background-pattern/${backgroundPattern}")` }}>
      {
        isQRCode ? <div className="resume-qr-code">
          <QRCodeCanvas value={liveTemplateURL} size={"50"} />
        </div> : <></>
      }

      {/*Name SO-1 */}
      <div className="GTT-template  name-sec-so-1 personal-edit">
        <img style={{ borderColor: themeColor, width: '120px', height: '120px' }} src={resumeData.profileImage} alt="" />
        <div className='name-sec-so-1-details' style={{ borderColor: themeColor }}>
          <h1 style={headingStyleCSS}>{resumeData.userName}</h1>
          <h4 style={headingStyleCSS}>{resumeData.userJobRole}</h4>
        </div>
      </div>

      {/*Contact SO-2 */}
      {
        resumeData.AllSections[1].isSection &&
        <div className='contact-sec-so2 contact-edit' style={{ background: themeColor }}>
          {resumeData.AllSections[1].list.map((element) => {
                  const { listId, iconName, contactName, additionalLink } =
                    element;
                  return (
                    <a href={additionalLink} key={listId}>
              <div  style={{ ...paraStyleCSS, cursor: 'pointer' }}className="account-so-2-details" >
                <i className={element.iconName}></i>
                <p>{element.contactName}</p>
              </div>
              </a>
            );
          })}
        </div>}

      {/* Profile SO-3 */}
      {
        resumeData.AllSections[0].isSection &&
        <div className="gtt-for-heading profile-so-3 summary-edit">
          <div className='gtt-for-heading profile-so-3-a'>
            <h2 style={combineHeadingStyle}>{resumeData.AllSections[0].sectionName}</h2>
          </div>
          <p style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: AllSections[0].summary }} />
        </div>}


      {/* GROUP SO-4 */}
      <div className="grp-so-4" style={{ borderColor: themeColor }}>
        <div className="so-4-left" style={{ borderColor: themeColor }}>

          {/* experience | Job */}
          {
            resumeData.AllSections[4].isSection &&
            <div className=" gtt-for-heading gtt-job-section job-exp-edit">

              <h2 style={combineHeadingStyle}>{resumeData.AllSections[4].sectionName}</h2>
              <div className='gtt-job-secction-details'>
                {/* <hr className='gtt-forhr' /> */}
                {resumeData.AllSections[4].list.map((element, index) => {
                  const { companyName, jobRole, startDate, endDate, aboutJob } =
                    element;
                  return (
                    <div key={index}>
                      <p style={{ ...paraStyleCSS, fontWeight: 700 }}>{companyName} | {startDate} - {endDate} </p>
                      <p id='for-bottom-spacing' style={{ ...paraStyleCSS, fontWeight: 700 }} className='gtt-sub-heading'>{jobRole}</p>
                      <p className='fa-description' style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutJob }} />
                    </div>
                  );
                })}
              </div>
            </div>}

          {/* projects */}
          {
            resumeData.AllSections[2].isSection &&
            <div className="gtt-for-heading gtt-projects project-edit">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[2].sectionName}</h2>
              <div className="gtt-projeccts-details">
                {resumeData.AllSections[2].list.map((element, index) => {
                  const { projectName, startDate, endDate, aboutProject } =
                    element;
                  return (
                    <div key={index}>
                      <p id='for-bottom-spacing' style={{ ...paraStyleCSS, fontWeight: 700 }}>{projectName} |  {startDate} - {endDate}</p>
                      <p className='fa-description' style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutProject }} />
                    </div>
                  );
                })}
              </div>
            </div>}
        </div>


        <div className="so-4-right">
          {/* Education */}
          {
            resumeData.AllSections[5].isSection &&
            <div className='gtt-for-heading gtt-education education-edit'>
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[5].sectionName} </h2>
              <div className='gtt-education-details'>
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
                        <p style={{ ...paraStyleCSS, fontWeight: 700 }}>{collegeName} |  {startDate} - {endDate}</p>
                        <p id='for-bottom-spacing' style={{ ...paraStyleCSS, fontWeight: 700 }} className='gtt-sub-heading'>{course}</p>
                        <p className='fa-description' style={paraStyleCSS} dangerouslySetInnerHTML={{ __html: aboutEducation }} />
                      </React.Fragment>
                    );
                  }
                )}
              </div>
            </div>}

          {/* Skills */}
          {
            resumeData.AllSections[3].isSection &&
            <div className="gtt-for-heading gtt-skils skill-edit
            ">
              <h2 style={combineHeadingStyle}>{resumeData.AllSections[3].sectionName}</h2>
              <div className='gtt-skills-list'>
                {resumeData.AllSections[3].list.map((element) => {
                  return <li style={paraStyleCSS} key={element.listId}>{element.skillName}</li>

                })}
              </div>
            </div>}


        </div>
      </div>
    </div>
  );
}

