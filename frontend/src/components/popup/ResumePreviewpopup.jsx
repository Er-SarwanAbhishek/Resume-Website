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
                            <span>Use Template</span>
                        </button>
                    ) : (
                        <button className='d-btn' ref={NotCloseDownload} onClick={DownloadResume}>
                            <span>Download</span>
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
