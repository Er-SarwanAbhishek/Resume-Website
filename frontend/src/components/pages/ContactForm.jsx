import React, { useState } from "react";
import "./contactForm.css";
import Accordion from "./Accordion";
export default function ContactForm() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  // const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contactform/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        alert("Form data received successfully!")
        // const data = await response.Json()
        // setResponseMessage(data.message)
        setFormData({ name: '', email: '', message: '' })
      }
      else {
        // setResponseMessage("failed to send your message.")
        alert("not submiited")
      }
    } catch (error) {
      // setResponseMessage("An error has been occured. Please try again later.")
      alert("Server error!")
    }
  }

  //accordian logic
  const items = [
    {
      title: "How long should my resume be?",
      content: "Ideally, your resume should be one page if you have less than 10 years of experience. For those with more extensive experience or advanced positions, two pages may be appropriate. Ensure every section adds value and is relevant to the job you're applying for; avoid unnecessary details."
    },
    {
      title: "How often should I update my resume?",
      content: "You should update your resume regularly, ideally every 6 to 12 months, or whenever you acquire new skills, complete a significant project, or change jobs. Keeping your resume current ensures that you're always prepared for new opportunities and that your achievements are fresh in your mind."
    },
    {
      title: "Should I include a cover letter with my resume?",
      content: "Yes, a cover letter can enhance your application by providing context and explaining why you're a strong fit for the position. It allows you to highlight your enthusiasm for the role and the company, and to address specific qualifications or experiences that may not be fully detailed in your resume."
    },
    {
      title: "What should I include in my resume to make it stand out?",
      content: "To make your resume stand out, include a clear and professional format, a compelling summary or objective statement, relevant skills, and quantifiable achievements. Tailor your resume to the job you're applying for by highlighting experiences and skills that match the job description. Use action verbs and include metrics to demonstrate the impact of your work."
    },
  ]

  return (

    <>  <div className="cva-cta">
    <div className="cta-abox">
    <h1>Contact Us </h1>
    <p>Career Genniew creates standout resumes that highlight your unique skills and achievements, helping you advance your career with professional impact.</p>
    <img src="portfolio.png" alt="" srcset="" className='image1'/>
    <img src="choose.png" alt="" srcset="" className='image3'/>
    <img src="download.png" alt="" srcset="" className='image4'/>
    <img src="resume-writing.png" alt="" srcset="" className='image6'/>
    <img src="document.png" alt="" srcset="" className='image7'/>
    <img src="layout.png" alt="" srcset="" className='image8'/>
    </div>
</div>
    <div className="contact-form-main-container">
    
      <div className="contact-container">
        <div className="contact-form">
          <h2>We’re Here to Help</h2>
          <p>If you encounter any issues, please feel free to send us a message.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your email" value={formData.email} onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your query here!" value={formData.message} onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
            {/* {responseMessage && <p>{responseMessage}</p>} */}
          </form>
        </div>
        <div className="accordian"><Accordion items={items} /></div>
      </div>
    </div>
    </>
  );
}
