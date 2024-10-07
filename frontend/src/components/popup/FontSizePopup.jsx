import React, { useContext, useEffect, useRef } from 'react';
import './FontSizePopup.css';
import GlobalContext from '../context/GlobalContext';

const FontSizePopup = ({ cancel }) => {
  const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
  const { headingTextSize, bodyTextSize } = currentTemplateData;
  const fontSizeRef = useRef();


  const handleFontSizeChange = (e) => {
    const { value, name } = e.target;
    setCurrentTemplateData({ ...currentTemplateData, [name]: parseInt(value) })
  };
  // Maximum font size limit
  const increaseFontSize = (name, value, max) => {
    if (value < max) {
      setCurrentTemplateData({ ...currentTemplateData, [name]: value + 1 });
    }
  };

  // Minimum font size limit
  const decreaseFontSize = (name, value, min) => {
    if (value > min) {
      setCurrentTemplateData({ ...currentTemplateData, [name]: value - 1 });
    }
  };

  // CLOSE FONT POPUP BY USEREF

  const ClosePopup = (e) => {
    if (fontSizeRef.current.contains(e.target)) {
      return;
    }
    cancel();
  };


  useEffect(() => {
    document.addEventListener("click", ClosePopup, true);
    return () => {
      document.removeEventListener("click", ClosePopup, true);
    };
  });

  return (
    <div className="font-size-slider common-pop-box" ref={fontSizeRef}>
      {/* CANCEL BUTTON */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <h2>Font Size</h2>
      <div className="font-pixel">
        <h4>Heading Font Size</h4>
      </div>
      <div className="slider-icon">

        <i className="fa-solid fa-minus" style={headingTextSize <= 12 ? { cursor: "not-allowed" } : {}} onClick={() => decreaseFontSize("headingTextSize", headingTextSize, 12)}></i>

        <input
          type="range"
          name='headingTextSize'
          id="font-slider"
          min="12"
          max="25"
          value={headingTextSize}
          onChange={handleFontSizeChange}
        />
        <i className="fa-solid fa-plus" style={headingTextSize >= 25 ? { cursor: "not-allowed" } : {}} onClick={() => increaseFontSize("headingTextSize", headingTextSize, 25)}></i>
      </div>
      <div className="font-size-pixel">
        <span className='fixed'>12px</span>
        <span id="fontsize" > {headingTextSize}px</span>
        <span className='fixed'>25px</span>
      </div>
      <div className="font-pixel">
        <h4 style={{ marginTop: "15px" }}>Paragraph Font Size</h4>
      </div>
      <div className="slider-icon">

        <i className="fa-solid fa-minus" style={bodyTextSize <= 10 ? { cursor: "not-allowed" } : {}} onClick={() => decreaseFontSize("bodyTextSize", bodyTextSize, 10)}></i>

        <input
          type="range"
          id="font-slider"
          name='bodyTextSize'
          min="10"
          max="20"
          value={bodyTextSize}
          onChange={handleFontSizeChange}
        />
        <i className="fa-solid fa-plus" style={bodyTextSize >= 20 ? { cursor: "not-allowed" } : {}} onClick={() => increaseFontSize("bodyTextSize", bodyTextSize, 20)}></i>
      </div>
      <div className="font-size-pixel">
        <span className='fixed'>10px</span>
        <span id="fontsize" > {bodyTextSize}px</span>
        <span className='fixed'>20px</span>
      </div>


    </div>
  );
}

export default FontSizePopup;