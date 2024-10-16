import React from 'react';
import './WhyChoose.css'
import { useNavigate } from 'react-router-dom';

const Whychoose = () => {
    const navigate = useNavigate();
    return (
        <div className="cv-why-choose">
            <div className="wh-row">
                <div className="wh-column column-a">
                    <img id='wcu-img' src="wcu.png" alt="" />
                </div>
                <div className="wh-column column-b">
                    <h2>Reasons why to use<span style={{ fontWeight: '600', color: "#5a4abd" }}> Career Gennie?</span> </h2>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        User-Friendly Interface
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Real-Time Preview
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Professional Formatting
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Keyword Optimization
                    </li>

                    <button onClick={() => navigate("/templates")}>Let's Build Your Resume</button>
                </div>

            </div>

        </div>
    )
}

export default Whychoose;
