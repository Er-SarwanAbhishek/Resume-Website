import React, { useContext, useEffect, useRef } from 'react';
import './ColorPopup.css';
import GlobalContext from '../context/GlobalContext';

export default function ColorPopup({ cancel }) {

    const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
    const { headingTextColor, bodyTextColor, themeColor } = currentTemplateData;
    const colorPopupRef = useRef();

    const ChangeCurColor = (e) => {
        setCurrentTemplateData({ ...currentTemplateData, [e.target.name]: e.target.value })
    }

    // CLOSE COLOR POPUP BY USEREF

    const ClosePopup = (e) => {
        if (colorPopupRef.current.contains(e.target)) {
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
        <div className="text-color-popup common-pop-box" ref={colorPopupRef}>
            <h2>Change Colors</h2>
            {/* CANCEL BUTTON */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* THEME COLOR CHANGE */}

            <h4>Theme Color</h4>
            <div className="color-input">
                <input type="text" value={themeColor} onChange={ChangeCurColor} name="themeColor" placeholder='#hash-code' />
                <label htmlFor="showThemeColor" style={{ backgroundColor: themeColor }}></label>
                <input type="color" id='showThemeColor' value={themeColor} onChange={ChangeCurColor} name="themeColor" />
            </div>

            {/* HEADING COLOR CHANGE */}

            <h4>Heading Color</h4>
            <div className="color-input">
                <input type="text" value={headingTextColor} onChange={ChangeCurColor} name="headingTextColor" placeholder='#hash-code' />
                <label htmlFor="showColor" style={{ backgroundColor: headingTextColor }}></label>
                <input type="color" id='showColor' value={headingTextColor} onChange={ChangeCurColor} name="headingTextColor" />
            </div>

            {/* BODY COLOR CHANGE */}

            <h4>Paragraph Color</h4>
            <div className="color-input">
                <input type="text" value={bodyTextColor} onChange={ChangeCurColor} name="bodyTextColor" placeholder='#hash-code' />
                <label htmlFor="showParaColor" style={{ backgroundColor: bodyTextColor }}></label>
                <input type="color" id='showParaColor' value={bodyTextColor} onChange={ChangeCurColor} name="bodyTextColor" />
            </div>
        </div>
    )
}
