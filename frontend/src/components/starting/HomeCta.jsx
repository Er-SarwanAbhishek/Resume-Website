import React from 'react'
import './HomeCta.css'

export const HomeCta = () => {

  return (
    <div className="home-cta-sec">
      <div className="hcta-box">
        <h2>Ready to Jump- <span>Start Your Career</span></h2>
        <p>Career Gennie creates standout resumes that highlight your unique skills and achievements, helping you advance your career with professional impact.</p>
        <button className="hcta-cv-btn" onClick={() => window.location.href = "/templates"}>Create CV</button>
        <div className="image-sections">
          <section className="section section-up">
            <img src="cta-template-images/cta-template-a.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-b.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-e.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-a.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-b.png" alt="Image 1" draggable="false"/>
          </section>

          <section className="section section-down">
            <img src="cta-template-images/cta-template-f.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-c.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-d.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-f.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-c.png" alt="Image 1" draggable="false"/>
          </section>
          <section className="section section-up">
            <img src="cta-template-images/cta-template-e.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-h.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-a.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-h.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-c.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-e.png" alt="Image 1" draggable="false"/>
            <img src="cta-template-images/cta-template-f.png" alt="Image 1" draggable="false"/>
          </section>
        </div>
      </div>
    </div>
  )
}
