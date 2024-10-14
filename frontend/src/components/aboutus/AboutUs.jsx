import React from 'react'
import './AboutUs.css'
import DownloadSteps from './DownloadSteps'
import WhyChoose from './Whychoose'
import CtaAbout from './CtaAbout'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

    const navigate = useNavigate();

    return (
        <div>
            <CtaAbout />
            <div className="cv-about-us-sec">
                <div className="cva-row">
                    <div className="cva-column cloumn-mobile">
                        <img src="about-us.png" alt="" />
                    </div>
                    <div className="cva-column column-a">
                        <h2>Elevate Your <span style={{ fontWeight: '600' }}>Job Application </span>
                            with <span style={{ fontWeight: '600' }}>Career Gennie</span> </h2>
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Proven CV Templates to increase Hiring Chance
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Creative and Clean Templates Design
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Easy and Intuitive Online CV Builder
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Free to use. Developed by hiring professionals.
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Fast Easy CV and Resume Formatting
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="injected-svg"
                                    data-src="https://cdn.hugeicons.com/icons/checkmark-circle-02-solid-standard.svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    role="img"
                                    color="#5A4ABD"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C17.6871 1 22.5 5.81294 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5ZM16.5182 9.39018C16.8718 8.9659 16.8145 8.33534 16.3902 7.98177C15.9659 7.62821 15.3353 7.68553 14.9818 8.10981L10.6828 13.2686L8.45711 11.0429C8.06658 10.6524 7.43342 10.6524 7.04289 11.0429C6.65237 11.4334 6.65237 12.0666 7.04289 12.4571L10.0429 15.4571C10.2416 15.6558 10.5146 15.7617 10.7953 15.749C11.076 15.7362 11.3384 15.606 11.5182 15.3902L16.5182 9.39018Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.7372 9.67573C17.1103 9.26861 17.0828 8.63604 16.6757 8.26285C16.2686 7.88966 15.636 7.91716 15.2628 8.32428L10.4686 13.5544L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L9.79289 15.7071C9.98576 15.9 10.249 16.0057 10.5217 15.9998C10.7944 15.9938 11.0528 15.8768 11.2372 15.6757L16.7372 9.67573Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Recruiter Approved Phrases.
                            </li>
                        </ul>
                        <button onClick={() => navigate("/templates")}>Let's Build Your Resume</button>
                    </div>
                    <div className="cva-column cloumn-b">
                        <img src="about-us.png" alt="" />
                    </div>
                </div>
            </div>
            <DownloadSteps />
            <WhyChoose />
        </div>
    )
}

export default AboutUs;

