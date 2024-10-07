import React, { useContext, useEffect, useRef } from "react";
import "./QRPopup.css";
import GlobalContext from "../context/GlobalContext";
import Toggle from "./Toggle";

export default function QRPopup({ cancel }) {

    const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
    const liveTemplateURL = `http://localhost:3000/${currentTemplateData.liveTempId}`;
    const qrPopRef = useRef();

    const toggle = currentTemplateData.isQRCode;
    const handleToggleChange = () => {
        setCurrentTemplateData({ ...currentTemplateData, isQRCode: !currentTemplateData.isQRCode });
    };

    const CopyURL = () => {
        navigator.clipboard.writeText(liveTemplateURL)
            .then(() => {
                console.log("Text copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    }

    // CLOSE QR POPUP BY USEREF

    const ClosePopup = (e) => {
        if (qrPopRef.current.contains(e.target)) {
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
        <div className="common-pop-box qr-code-popup" ref={qrPopRef}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <h2>QR Code </h2>
            <h4>Add a QR code to your resume for easy access anywhere</h4>
            <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />

            <h4>Live URL</h4>
            <div className="copy-button">
                <a href={liveTemplateURL} target='_blank'>{liveTemplateURL}</a>
                <i onClick={CopyURL} title='Copy URL' style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#5a4abd"} fill={"none"}>
                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </i>
            </div>
        </div>
    )
}