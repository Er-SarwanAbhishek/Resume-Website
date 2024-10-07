import React from 'react'
import './Cta.css'

const Cta = () => {
  return (
    <div className="cv-cta">
        <div className="cta-box">
        <h2>3 click Resume </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, error.</p>
        <img src="portfolio.png" alt="" srcset="" className='image1'/>
        <img src="choose.png" alt="" srcset="" className='image3'/>
        <img src="download.png" alt="" srcset="" className='image4'/>
        <img src="resume-writing.png" alt="" srcset="" className='image6'/>
        <img src="document.png" alt="" srcset="" className='image7'/>
        <img src="layout.png" alt="" srcset="" className='image8'/>
        <img src="cursor.png" alt="" srcset="" className='image9'/>
        <button onClick={() => window.location.href = "#chooseTemplateSection"}>Let's Build Your Resume</button>
        </div>
    </div>
  )
}

export default Cta; 