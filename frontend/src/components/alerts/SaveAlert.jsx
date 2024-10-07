import React from 'react'
import './SaveAlert.css';

export default function SaveAlert({alertMsg, status}) {
    return (
        <div className={`save-alert ${status}`}>
            <i className="fa-solid fa-circle-check"></i>
            <p>{alertMsg}</p>
        </div>
    )
}
