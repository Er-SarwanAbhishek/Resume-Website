import React from 'react'
import './GrayThemetemplate.css'
import { GrayThemetemplateData } from './GrayThemetemplateData';


 export const GrayThemeTemplate = () => {
    return (
        
        <div className="GTT-resume-template">
            {/*Name SO-1 */}
            <div className="GTT-template  name-sec-so-1">
            <img src={GrayThemetemplateData.profileImage} alt="" style={{width: '100px', height: '100px'  }} />
            <div className='name-sec-so-1-details'>
            <h1>{GrayThemetemplateData.userName}</h1>
            <p>{GrayThemetemplateData.userJobRole}</p>
            </div>
            </div>

            {/*Contact SO-2 */}
            <div className='contact-sec-so2'>
            {GrayThemetemplateData.AllSections[1].list.map((element) => {
                  return (
                    <div class="account-so-2-details">
                      <i class={element.iconName}></i>
                      <p>{element.contactName}</p>
                    </div>
                  );
                })}
            </div>

            {/* Profile SO-3 */}
            <div className="gtt-for-heading profile-so-3">
                <div className='gtt-for-heading profile-so-3-a'>
                <h2>{GrayThemetemplateData.AllSections[0].sectionName}</h2> 
                </div>
                <p>{GrayThemetemplateData.AllSections[0].summary}</p>
            </div>
           

            {/* GROUP SO-4 */}
            <div className="grp-so-4">
                <div className="so-4-left">
                    
                    {/* experience | Job */}
                    <div className=" gtt-for-heading gtt-job-section">
                        
                    <h2>{GrayThemetemplateData.AllSections[4].sectionName}</h2>
                        <div className='gtt-job-secction-details'>
                        {/* <hr className='gtt-forhr' /> */}
                    {GrayThemetemplateData.AllSections[4].list.map((element, index) => {
                    const { companyName, jobRole, startDate, endDate, aboutJob } =
                      element;
                    return (
                      <div key={index}>
                          <h3>{companyName} | {startDate} - {endDate}</h3>
                        <p className='gtt-sub-heading'>{jobRole}</p>
                        <p>{aboutJob}</p>
                      </div>
                    );
                  })}
                  </div>
                    </div>

                    {/* projects */}
                    <div className="gtt-for-heading gtt-projects">
                    <h2>{GrayThemetemplateData.AllSections[2].sectionName}</h2>
                    <div className="gtt-projeccts-details">
                    {GrayThemetemplateData.AllSections[2].list.map((element, index) => {
                    const { projectName, startDate, endDate, aboutProject } =
                      element;
                    return (
                      <div  key={index}>
                        <h3>{projectName} |  {startDate} - {endDate}</h3>
                        <p>{aboutProject}</p>
                      </div>
                    );
                  })}
                    </div>
                    </div>
                </div>


                <div className="so-4-right">
                    {/* Education */}
                    <div className='gtt-for-heading gtt-education'>
                    <h2>{GrayThemetemplateData.AllSections[5].sectionName} </h2>
                    <div className='gtt-education-details'>
                    {GrayThemetemplateData.AllSections[5].list.map(
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
                           <h3>{collegeName} |  {startDate} - {endDate}</h3>
                            <p className='gtt-sub-heading'>{course}</p>
                            <p>{aboutEducation}</p>
                          </React.Fragment>
                        );
                      }
                    )}
                    </div>
                    </div>

                    {/* Skills */}
                    <div className="gtt-for-heading gtt-skils">
                    <h2>{GrayThemetemplateData.AllSections[3].sectionName}</h2>
                    <div className='gtt-skills-list'>
                    {GrayThemetemplateData.AllSections[3].list.map((element) => {
                                    return <li>{element.skillName}</li>
                 
                                })}
                    </div>
                    </div>


                </div>
            </div>
        </div>
      );
}

