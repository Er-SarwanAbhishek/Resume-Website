import React from 'react'
import './DownloadSteps.css'

 const DownloadSteps = () => {
  return (
    <div className="download-steps-sec">
        <div className='dwnld-sec-intro'>
 <h2>  Just three Simple Steps To<span style={{ fontWeight: '600' }}> Download </span> 
 Your Resume </h2>

 <p>You’re three steps away to get your resume</p>
        </div>
    <div className="dwnld-steps">
        <div className="dstep-first">
            <div className="dstep-row">
                <div className="dstep-column dcolumn-a">
                    <h3>Choose Template</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, reprehenderit.</p>
                </div>
                <div className="dstep-column">
                    <img id='dstep-img-a' src="dcolumn-a.png" alt="here the image" />
                </div>
            </div>
            <div className="dstep-row">
            <div className="dstep-column">
                    <img className='fliped' src="dcolumn-b.svg" alt="here the image" />
                </div>
                <div className="dstep-column dcolumn-a">
                    <h3>Update Detials</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, reprehenderit.</p>
                </div>
                
            </div>
            <div className="dstep-row">
                <div className="dstep-column dcolumn-a">
                    <h3>Download Resume</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, reprehenderit.</p>
                </div>
                <div className="dstep-column">
                    <img className='fliped' src="dcolumn-c.svg" alt="here the image" />
                </div>
            </div>
        </div>
    </div>
    {/* <div className="btn-style-res">
        <button onClick={() => window.location.href = "#chooseTemplateSection"}>Style Your Resume in 3 Steps</button>
        </div> */}
    </div>
  )
}


export default DownloadSteps;

// choose template update details Downlaod resume