import React, { useContext, useEffect, useRef, useState } from "react";
import "./MonthYearPicker.css";
import GlobalContext from "../context/GlobalContext";

const MonthYearPicker = ({ startingDate, listId, sectionIndex, name, cancel }) => {
  const currentYear = new Date().getFullYear();
  const monthYearRef = useRef();
  const [year, setYear] = useState(currentYear);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { ChangeListValue } = useContext(GlobalContext);

  const incrementYear = () => {
    if (year < currentYear) {
      setYear((prevYear) => prevYear + 1);
    }
  };

  const decrementYear = () => {
    if (year > 1970) {
      setYear((prevYear) => prevYear - 1);
    }
  };

  const [isToggled, setIsToggled] = useState(false);
  const [text, setText] = useState("Present");
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    ChangeListValue({ target: { name, value: text } }, sectionIndex, listId);
    if (!isToggled) setIsEditing(true);
    else setIsEditing(false);
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setText(value);
    ChangeListValue({ target: { name, value } }, sectionIndex, listId);
  };

  //CLOSE POPUP BY REF
  const ClosePopup = (e) => {
    if (monthYearRef.current.contains(e.target)) {
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

  return (
    <div className="month-year-picker common-pop-box" ref={monthYearRef}>
      <div className="year-controls">
        <i onClick={decrementYear} className="fa-regular fa-chevron-left"></i>
        <span className="year-display">{year}</span>
        <i onClick={incrementYear} className="fa-regular fa-chevron-right"></i>
      </div>
      {!startingDate &&
        <div className="toggle-editable-container">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            disabled={!isEditing}
            className="editable-text"
            placeholder="Choose date"
          />

          <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
        </div>}

      <div className="month-grid">
        {months.map((month, index) => (
          <div
            key={index}
            className={`month ${isToggled && "block-cursor"}`}
            onClick={
              () => {
                if (isToggled)
                  return;
                ChangeListValue({ target: { name, value: `${month}, ${year}` } }, sectionIndex, listId);
                cancel();
              }
            }
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthYearPicker;
