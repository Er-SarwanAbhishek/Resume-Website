import React, { useContext, useEffect, useRef } from 'react';
import './BackgroundPatternPopup.css';
import GlobalContext from '../context/GlobalContext';

export default function BackgroundPatternPopup({ cancel }) {

    const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
    const { resumeStyle } = currentTemplateData;
    const { backgroundPattern } = resumeStyle;
    const backPopRef = useRef();

    const backgroundPatternList = [
        {
            id: "bckgrndp1",
            name: "Background_Pattern_1.png"
        },
        {
            id: "bckgrndp2",
            name: "Background_Pattern_2.png"
        },
        {
            id: "bckgrndp3",
            name: "Background_Pattern_3.png"
        },
        {
            id: "bckgrndp4",
            name: "Background_Pattern_4.png"
        },
        {
            id: "bckgrndp5",
            name: "Background_Pattern_5.png"
        },
        {
            id: "bckgrndp6",
            name: "Background_Pattern_6.png"
        },
        {
            id: "bckgrndp7",
            name: "Background_Pattern_7.png"
        },
        {
            id: "bckgrndp8",
            name: "Background_Pattern_8.png"
        },
        {
            id: "bckgrndp9",
            name: "Background_Pattern_9.png"
        },
        {
            id: "bckgrndp10",
            name: "Background_Pattern_10.png"
        },
        {
            id: "bckgrndp11",
            name: "Background_Pattern_11.png"
        },
    ]

    const ChangeBackground = (patternName) => {
        try {
            setCurrentTemplateData({
                ...currentTemplateData,
                resumeStyle: {
                    ...currentTemplateData.resumeStyle,
                    backgroundPattern: patternName
                }
            });
        } catch (error) {
            console.log("There are error on backgrounds", error);
        }
    }

    // CLOSE POPUP BY USEREF

    const ClosePopup = (e) => {
        if (backPopRef.current.contains(e.target)) {
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
        <div className="background-pop-body common-pop-box" ref={backPopRef}>
            <h2>Backgrounds</h2>
            {/* CANCEL BUTTON */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* BACKGROUND PATTERNS */}
            <div className="b-patterns">
                <div className="pattern" onClick={() => ChangeBackground(false)} style={!backgroundPattern ? { backgroundColor: "#5a4abd" } : {}}>
                    {
                        !backgroundPattern ? <i className="fa-solid fa-check"></i> : <></>
                    }
                </div>
                {backgroundPatternList.map(element => {
                    const { id, name } = element;
                    return (
                        <div className="pattern" onClick={() => ChangeBackground(name)} style={backgroundPattern === name ? { backgroundColor: "#5a4abd" } : { backgroundImage: `url("/background-pattern/${name}")` }} key={id}>
                            {
                                backgroundPattern === name ? <i className="fa-solid fa-check"></i> : <></>
                            }
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
