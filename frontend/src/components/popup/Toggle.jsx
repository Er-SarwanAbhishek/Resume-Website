import React from "react";
import "./Toggle.css";

const Toggle = ({ toggle, handleToggleChange }) => {
  return (
    <div className='toggle-container' onClick={handleToggleChange}>
      <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
        {toggle ? <i className="fa-solid fa-qrcode"></i> : <i className="fa-solid fa-qrcode"></i>}
      </div>
    </div>
  );
};

export default Toggle;