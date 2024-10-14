import React from "react";
import "./DownloadSteps.css";

const DownloadSteps = () => {
  return (
    <div className="download-steps-sec">
      <div className="dwnld-sec-intro">
        <h2>
          {" "}
          Just three Simple Steps To
          <span style={{ fontWeight: "600" }}> Download </span>
          Your Resume{" "}
        </h2>

        <p>You’re three steps away to get your resume</p>
      </div>
      <div className="dwnld-steps">
        <div className="dstep-first">
          <div className="dstep-row">
            <div className="dstep-column dcolumn-a">
              <h3>Choose Your Template</h3>
              <p>
                The right resume template is crucial steps in creating a
                professional and impactful resume. At Career Gennie, you can
                find a wide range of modern, elegant, and industry-specific
                templates that suit your style and standards.
              </p>
            </div>
            <div className="dstep-column">
              <img id="dstep-img-a" src="dcolumn-a.png" alt="here the image" />
            </div>
          </div>
          <div className="dstep-row">
            <div className="dstep-column">
              <img
                className="fliped"
                src="dcolumn-b.svg"
                alt="here the image"
              />
            </div>
            <div className="dstep-column dcolumn-a">
              <h3>Update Your Details</h3>
              <p>
              Updating a resume is an essential part of staying ahead in the competitive field. 
Our Updated details features allow you to refresh your resume with new 
experiences, skills, and accomplishments. It always ensures to reflect your 
latest details.
              </p>
            </div>
          </div>
          <div className="dstep-row">
            <div className="dstep-column dcolumn-a">
              <h3>Download Your Resume
              </h3>
              <p>
              Once your resume is complete, you can download it in multiple formats that suit
your requirements and desires. The download option allows you to easily access
your professional and high-quality resume in just one single click.
              </p>
            </div>
            <div className="dstep-column">
              <img
                className="fliped"
                src="dcolumn-c.svg"
                alt="here the image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btn-style-res">
        <button onClick={() => window.location.href = "#chooseTemplateSection"}>Style Your Resume in 3 Steps</button>
        </div> */}
    </div>
  );
};

export default DownloadSteps;

// choose template update details Downlaod resume
