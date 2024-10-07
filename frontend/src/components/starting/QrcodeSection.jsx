import React from 'react';
import { Link } from 'react-router-dom';
import './QrcodeSection.css';

const QrcodeSection = () => {
    return (
        <div className='qrcode-content-column'>
            {/* <img src="background-gradient.svg" alt="" className="gradient-3" draggable="false" /> */}

            <div className='qrcode-row'>
                <h2 className='qrc-h2'>Embedding <span style={{ fontWeight: '600', color: "#5A4ABD" }}>QR Codes</span> in Resumes</h2>
                <div className='image-content'>
                    <div className='video-section'>
                        <video className='video-qrcode' autoPlay muted loop>
                            <source src="./videos/qr-code-section.mp4" type='video/mp4' />
                        </video>
                    </div>
                    <div className='content'>
                        <h2 className='qrcc-h2'>Embedding <span style={{ fontWeight: '600', color: "#5A4ABD" }}>QR Codes</span> in Resumes</h2>
                        <div className='step'>
                            <div className='step1'>
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Quickly view your online profile
                                </li>
                            </div>
                            <div className='step2'>
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Easily share your contact information
                                </li>

                            </div>
                            <div className='step3'>
                                <li>
                                    <i class="fa-solid fa-check"></i>
                                    Makes your resume look modern
                                </li>
                            </div>
                        </div>
                        <Link to="/templates">
                            <button>Create CV</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='qrcode-row2'>
                <div className='qrcode-feature1'>
                    <i class="fa-duotone fa-solid fa-face-smile-plus"></i>
                    <span>Impress your interviewer by including a QR code linking to your resume.</span>
                </div>
                <div className='qrcode-feature2'>
                    <i class="fa-duotone fa-solid fa-clock-rotate-left"></i>
                    <span>The automation process saves time and reduces costs effectively.</span>
                </div>
                <div className='qrcode-feature3'>
                    <i class="fa-duotone fa-solid fa-link"></i>
                    <span>Share a link to your resume that can be accessed easily with a single click.</span>
                </div>
            </div>

        </div>

    )
}

export default QrcodeSection
