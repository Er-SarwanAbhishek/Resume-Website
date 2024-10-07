import React, { useContext, useEffect, useRef } from 'react';
import './ChangeTemplatePopup.css';
import { TemplateData } from '../templates/TemplateData';
import GlobalContext from '../context/GlobalContext';

export default function ChangeTemplatePopup({ cancel }) {

    const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
    const templatePopRef = useRef();

    const ChangeTemplate = async (newTempData) => {
        try {
            const { id, templateName, element, headingTextColor, bodyTextColor, themeColor, AllSections, profileImage } = newTempData;

            setCurrentTemplateData(prevState => {
                const newData = { ...prevState, id, templateName, element, headingTextColor, bodyTextColor, themeColor, profileImage };
                newData.AllSections[1] = { ...newData.AllSections[1], sectionVisible: AllSections[1].sectionVisible };
                return newData;
            });
        } catch (error) {
            console.log("Change Template! ", error);
        }
    }

    // CLOSE TEMPLATE POPUP BY USEREF

    const ClosePopup = (e) => {
        if (templatePopRef.current.contains(e.target)) {
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

    //SAVE DATA IN LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
    }, [currentTemplateData])

    return (
        <div className="change-template-box common-pop-box" ref={templatePopRef}>
            <h2>Change Template</h2>
            {/* CANCEL BUTTON */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="all-templates">
                {
                    TemplateData.map((element, index) => {
                        const { id } = element;
                        return (
                            <div onClick={() => ChangeTemplate(element)} className={currentTemplateData.id === id ? "each-template active-temp" : "each-template"} key={index}>
                                {currentTemplateData.id === id ? <i class="fa-solid fa-check active-icon"></i> : <></>}
                                <element.element resumeData={element} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
