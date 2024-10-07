import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./InstructionPopup.css";

export default function InstructionPopup({ cancel }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const instructionPopupRef = useRef();
  const ClosePopup = (e) => {
    if (instructionPopupRef.current.contains(e.target)) {
      return;
    }
    cancel();
  };

  useEffect(() => {
    document.addEventListener("click", ClosePopup, true);
    return () => {
      document.removeEventListener("click", ClosePopup, true);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="instruction-popup">
        <div className="for-custom-padding" ref={instructionPopupRef}>
          <i className="fa-solid fa-xmark cancel-btn" onClick={cancel}></i>
          <h1>
            Easy To Make Resume In{" "}
            <span style={{ fontWeight: "bold", color: "#5A4ABD" }}>
              Just 3 Steps.
            </span>
          </h1>
          <div className="row" ref={instructionPopupRef}>
            <div className="column">
              <span className="popup-lord-icon">
              <lord-icon
                  src="https://cdn.lordicon.com/yqiuuheo.json"
                  trigger="loop"
                  delay="800"
                  stroke="light"
                  colors="primary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </span>

              <h3>Choose Template</h3>
              <p>
                Choose your profile and get a template tailored to your needs.
              </p>
            </div>
            <div className="column">
              <span className="popup-lord-icon">
              <lord-icon
                    src="https://cdn.lordicon.com/vhyuhmbl.json"
                  trigger="loop"
                  delay="800"
                  speed="8000"
                  stroke="light"
                  colors="primary:#EBE6EF,secondary:#8d90ec,tertiary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </span>
              <h3>Update Details</h3>
              <p>Update details by simply filling out forms.</p>
            </div>
            <div className="column end-img">
              <span className="popup-lord-icon">
              {/* <lord-icon
                  src="https://media.lordicon.com/icons/wired/flat/93-document-download.json"
                  trigger="loop"
                  delay="800"
                  stroke="light"
                  colors="primary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon> */}
                 <video className='' autoPlay muted loop>
                            <source src="./videos/download-icon-vd.mp4" type='video/mp4' />
                        </video>
              </span>
              <h3>Download Resume</h3>
              <p>Download your custom-designed resume with just one click.</p>
            </div>
          </div>

          {/* SLIDER */}
          <div className="slider-mobile">
            <Slider{...settings}>
              <div className='column'>
                <span className='popup-lord-icon'>
                <lord-icon
                  src="https://cdn.lordicon.com/yqiuuheo.json"
                  trigger="loop"
                  delay="800"
                  stroke="light"
                  colors="primary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
                </span>
                <h3>Choose Template</h3>
              </div>
              <div className='column'>
                <span className='popup-lord-icon'>
                <lord-icon
                    src="https://cdn.lordicon.com/vhyuhmbl.json"
                  trigger="loop"
                  delay="800"
                  speed="8000"
                  stroke="light"
                  colors="primary:#EBE6EF,secondary:#8d90ec,tertiary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
                </span>
                <h3>Update Details</h3>
              </div>
              <div className='column'>
                <span className='popup-lord-icon'>
                {/* <lord-icon
                    src="https://cdn.lordicon.com/vhyuhmbl.json"
                  trigger="loop"
                  delay="800"
                  speed="8000"
                  stroke="light"
                  colors="primary:#EBE6EF,secondary:#8d90ec,tertiary:#5A4ABD"
                  style={{ width: 150, height: 150 }}
                ></lord-icon> */}
                <video className='download-icon-vd' autoPlay muted loop>
                            <source src="./videos/download-icon-vd-mobile.mp4" type='video/mp4' />
                        </video>
                </span>
                <h3>Download Resume</h3>
              </div>
            </Slider>
          </div>
          {/* ***** */}

          <button
            onClick={() => navigate("/templates")}
            className="create-cv-btn">
            Let's Get Started{" "}
          </button>
        </div>
      </div>
    </>
  );
}
