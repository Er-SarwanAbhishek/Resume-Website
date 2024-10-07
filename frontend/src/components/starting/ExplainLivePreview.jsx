import React from 'react';
import './ExplainLivePreview.css';

export default function ExplainLivePreview({ authtoken }) {
    return (
        <div className="exp-live-prev">
            <div className='tblt-heading'>
                <h2 id='hide-heading-ls' > Easy to fill you Details <span style={{ fontWeight: '600', color: "#5A4ABD" }}>and see live updates</span> </h2>
            </div>

            <div className="elp-row">
                <div className="column">
                    <video className='sub-dashboard-form' autoPlay muted loop>
                        <source src="data-intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="column">
                    <h2 id='column-hide-heading-tblt'> Easy to fill Details <span style={{ fontWeight: '600', color: "#5A4ABD" }}>and see live updates</span> </h2>
<ul>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Select the section you want to update
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Add or delete data as you needed
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        Update your details like a simple form
                    </li>
                    <li>
                        <i className="fa-solid fa-check"></i>
                        < span > Save your data upon<b style={{ backgroundColor: "#ccd2f9", padding: "10px", borderRadius: "3px", cursor: "pointer" }} onClick={
                            () => {
                                if(!authtoken)
                                    window.location.href = "/sign-up"
                            }
                        }>Signing Up</b> </span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
