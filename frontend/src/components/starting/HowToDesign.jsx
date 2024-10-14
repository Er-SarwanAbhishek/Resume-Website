import React from 'react';
import './HowToDesign.css';

export default function HowToDesign() {
    return (
        <div className="htd-section">

            <div className="htd-row">
                {/* ARROW */}
                <img className="arrow" src="./images/arrow.svg" alt="arrow" />
                <div className="column">
                    <h2>Customize Your Resume: <span style={{ fontWeight: '600' }}>Stand Out and Get Hired</span> </h2>
                   <ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Customize the theme color
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Change font style
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Change font size
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Select from multiple backgrounds to enhance your resume
                    </li>
                    </ul>
                    <button onClick={() => window.location.href = "#chooseTemplateSection"}>Build Your Resume</button>
                </div>


                <div className="column">

                    <video className='htd-video-container' width="900" autoPlay muted loop>
                        <source src="htd-section-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="htd-row-mobile">
                <h2>Customize your resume by <span style={{ fontWeight: '600' }}>including our unique features</span> </h2>
                <div className="rm-feature">
                    <ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Customize the theme color
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Change font style
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Change font size
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Select from multiple backgrounds to enhance your resume
                    </li>
                    </ul>
                </div>
                <div className="rm-video">
                    <video className='htd-video-container' width="900" autoPlay muted loop>
                        <source src="htd-section-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={() => window.location.href = "#chooseTemplateSection"}>Build Your Resume</button>
                </div>
            </div>


        </div>
    )
}
