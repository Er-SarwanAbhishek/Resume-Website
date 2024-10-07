import React from 'react';
import './DownloaderPopup.css';

export const DownloaderPopup = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="spinner"></div>
                <span>Downloading...</span>
                <div class="loader"></div>
            </div>
        </div>
    )
}
