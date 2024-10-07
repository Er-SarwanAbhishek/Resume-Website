import React, { useState } from "react";
import "./contactForm.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordian">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-title ${activeIndex === index ? "active" : ""
              }`}
            onClick={() => onTitleClick(index)}
          >
            <h4>{item.title}</h4>
            <span className="icon">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"currentColor"}
                >
                  <path
                    d="M20 12L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="currentColor"
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? "open" : ""
              }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
