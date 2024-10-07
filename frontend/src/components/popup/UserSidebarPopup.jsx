import React, { useEffect, useRef } from 'react';
import "./UserSidebarPopup.css";
import { useNavigate } from 'react-router-dom';

export default function UserSidebarPopup({ name, image, cancel }) {

    const sidebarRef = useRef();
    const navigate = useNavigate();

    // CLOSE USERSIDEBAR POPUP BY USEREF

    const ClosePopup = (e) => {
        if (sidebarRef.current.contains(e.target)) {
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

    //LOGOUT

    const LogOut = () => {
        localStorage.removeItem('authtoken');
        window.location.href = "/";
    }

    return (
        <div className="user-sidebar-body">


            <div className="sidebar-box" ref={sidebarRef}>

                {/* CANCEL POPUP */}
                <i onClick={cancel} className="fa-solid fa-xmark cancel-btn"></i>

                <img src={image} alt="Logo" />
                <h2>{name}</h2>

                <ul className="options">
                    <li onClick={() => navigate("/my-templates")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="injected-svg"
                            data-src="https://cdn.hugeicons.com/icons/document-validation-stroke-standard.svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            role="img"
                        >
                            <path
                                d="M7 13H11"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7 17H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.5 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033L14.5303 6.46967ZM15.5 8.5L14.9697 9.03033C15.1187 9.17933 15.3235 9.25878 15.534 9.24923C15.7445 9.23968 15.9413 9.14202 16.0762 8.98014L15.5 8.5ZM18.5762 5.98014C18.8413 5.66193 18.7983 5.18901 18.4801 4.92383C18.1619 4.65866 17.689 4.70165 17.4238 5.01986L18.5762 5.98014ZM21.75 7C21.75 3.82436 19.1756 1.25 16 1.25V2.75C18.3472 2.75 20.25 4.65279 20.25 7H21.75ZM16 1.25C12.8244 1.25 10.25 3.82436 10.25 7H11.75C11.75 4.65279 13.6528 2.75 16 2.75V1.25ZM10.25 7C10.25 10.1756 12.8244 12.75 16 12.75V11.25C13.6528 11.25 11.75 9.34721 11.75 7H10.25ZM16 12.75C19.1756 12.75 21.75 10.1756 21.75 7H20.25C20.25 9.34721 18.3472 11.25 16 11.25V12.75ZM13.4697 7.53033L14.9697 9.03033L16.0303 7.96967L14.5303 6.46967L13.4697 7.53033ZM16.0762 8.98014L18.5762 5.98014L17.4238 5.01986L14.9238 8.01986L16.0762 8.98014Z"
                                fill="currentColor"
                            />
                        </svg>
                        My templates
                    </li>
                    <li onClick={LogOut}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="injected-svg"
                            data-src="https://cdn.hugeicons.com/icons/logout-02-stroke-standard.svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            role="img"
                        >
                            <path
                                d="M10 3L5.10557 5.44721C4.428 5.786 4 6.47852 4 7.23607L4 16.7639C4 17.5215 4.428 18.214 5.10557 18.5528L10 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.5 9.5L20 12L17.5 14.5M10 12L19.3912 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    )
}
