import React, { useState, useEffect } from 'react';
import './AtsAnalzer.css';

const AtsAnalzer = ({ value }) => {
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
            setSliderValue(numericValue);
        }
    }, [value]);

    const handleChange = (event) => {
        const newValue = Number(event.target.value);
        setSliderValue(newValue);
    };

    // Determine the background color based on sliderValue
    const getBackgroundColor = () => {
        if (sliderValue > 75) {
            return '#2dc08d'; 
        } else if (sliderValue >= 65) {
            return '#ff9c07'; 
        } else {
            return '#E33B43'; 
        }
    };

    return (
        <div className="ats-analyzer-parent">
        <div className="circular-slider">
            <div
                className="circle"
                style={{
                    '--percentage': `${sliderValue}%`,
                    background: `conic-gradient(${getBackgroundColor()} 0%, ${getBackgroundColor()} var(--percentage), #beb7ec var(--percentage))`
                }}
            >
                <div className="output">
                    <h3>{sliderValue}/100</h3>
                </div>
            </div>
            <input
                type="range"
                className="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleChange}
            />
        </div>
        <div className='data-about-ats'>
                    <h4>Above 75: Excellent</h4>
                    <h4>65 to 75: Average</h4>
                    <h4>Below 65: Poor</h4>
                </div>
                </div>
    );
};

export default AtsAnalzer;
