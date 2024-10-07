import React, { useContext, useEffect, useRef, useState } from 'react';
import './ResumePreviewPopup.css';
import html2pdf from 'html2pdf.js';
import { DownloaderPopup } from './DownloaderPopup';
import GlobalContext from '../context/GlobalContext';

export default function ResumePreviewPopup({ cancel, element, useTemp, funcUseTemp }) {
    const FinalResumeRef = useRef();
    const NotCloseDownload = useRef();
    const [loading, setLoading] = useState(false);
    const { currentTemplateData } = useContext(GlobalContext);

    const ClosePopup = (e) => {
        if (FinalResumeRef.current.contains(e.target) || NotCloseDownload.current.contains(e.target)) {
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

    const DownloadResume = () => {
        setLoading(true);
        const element = FinalResumeRef.current;
        const options = {
            filename: `${currentTemplateData.userName}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 10, useCORS: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait', margin: 1 }
        };

        html2pdf()
            .from(element)
            .set(options)
            .save()
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="resume-prev-popup-body">
            {loading ? (
                <DownloaderPopup /> // Show the loader
            ) : (
                <>
                    <div className="prev-final-resume">
                        <div className="final-resume" ref={FinalResumeRef}>
                            {element}
                        </div>
                        <i className='fa-solid fa-xmark cancel-popup' onClick={cancel}></i>
                    </div>
                    {useTemp ? (
                        <button className='d-btn' ref={NotCloseDownload} onClick={funcUseTemp}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                                <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 20H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                            <span>Use Template</span>
                        </button>
                    ) : (
                        <button className='d-btn' ref={NotCloseDownload} onClick={DownloadResume}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                                <path d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Download</span>
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
