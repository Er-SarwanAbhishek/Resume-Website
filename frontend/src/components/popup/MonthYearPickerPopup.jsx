import React, { useState, useEffect, useRef } from "react";
import "./MonthYearPickerPopup.css";

const MonthYearPickerPopup = ({ field, onDateSelect, closePopup }) => {
  const popupRef = useRef(null); // To reference the popup
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [isToggled, setIsToggled] = useState(false);
  const [text, setText] = useState("Present");
  const [isEditing, setIsEditing] = useState(false);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // Close the popup only if the click happens outside the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup(); // Close the popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);

  const incrementYear = () => {
    if (year < currentYear) setYear((prevYear) => prevYear + 1);
  };

  const decrementYear = () => {
    if (year > 1970) setYear((prevYear) => prevYear - 1);
  };

  const handleMonthClick = (monthIndex) => {
    const monthName = months[monthIndex];
    const formattedDate = `${monthName}, ${year}`;
    onDateSelect(formattedDate, field); // Pass the selected date back to the parent
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Only pass the text change to parent after completing the input (optional)
    // Optionally, we can pass text to the parent after the user is done editing
    // (e.g., after pressing Enter or losing focus)
  };

  const handleBlur = () => {
    // Optionally pass the text to the parent when the user is done editing
    onDateSelect(text, field);
  };

  return (
    <div className="month-year-picker" ref={popupRef}>
      <div className="year-controls">
     
          <i onClick={decrementYear} className="fa-regular fa-chevron-left"></i>
        
        <span className="year-display">{year}</span>
       
          <i onClick={incrementYear} className="fa-regular fa-chevron-right"></i>

      </div>
      <div className="toggle-editable-container">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur} // Only pass the text back when editing is done
          disabled={!isEditing}
          className="editable-text"
        />
        <label className="switch">
          <input type="checkbox" checked={isToggled} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="month-grid">
        {months.map((month, index) => (
          <div
            key={index}
            className="month"
            onClick={() => handleMonthClick(index)}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthYearPickerPopup;
      