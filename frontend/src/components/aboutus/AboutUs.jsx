import React from 'react'
import './AboutUs.css'
import DownloadSteps from './DownloadSteps'
import WhyChoose from './Whychoose'
import CtaAbout from './CtaAbout'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

    const navigate = useNavigate();

    return (
        <div>
            <CtaAbout />
            <div className="cv-about-us-sec">
                <div className="cva-row">
                    <div className="cva-column cloumn-mobile">
                        <img src="about-us.png" alt="" />
                    </div>
                    <div className="cva-column column-a">
                        <h2>Elevate Your <span style={{ fontWeight: '600', color: '#5a4abd' }}>Job Application </span>
                            with <span style={{ fontWeight: '600', color: '#5a4abd' }}>Career Gennie</span> </h2>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Proven CV Templates to increase Hiring Chance
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Creative and Clean Templates Design
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Easy and Intuitive Online CV Builder
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Free to use. Developed by hiring professionals.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Fast Easy CV and Resume Formatting
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Recruiter Approved Phrases.
                            </li>
                        </ul>
                        <button onClick={() => navigate("/templates")}>Let's Build Your Resume</button>
                    </div>
                    <div className="cva-column cloumn-b">
                        <img src="about-us.png" alt="" />
                    </div>
                </div>
            </div>
            <DownloadSteps />
            <WhyChoose />
        </div>
    )
}

export default AboutUs;

