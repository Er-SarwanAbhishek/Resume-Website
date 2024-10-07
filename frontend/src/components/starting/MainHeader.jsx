import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { useLocation, Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import UserSidebarPopup from '../popup/UserSidebarPopup';

export default function Header() {

    const [showHeader, setShowHeader] = useState(true);
    const location = useLocation();

    const [userDetails, setUserDetails] = useState("");
    const [isSidebarPop, setIsSidebarPop] = useState(false);
    const { authtoken, backServer } = useContext(GlobalContext);

    // LOGGEDIN USER DETAILS
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (!authtoken) return;

                const response = await fetch(`${backServer}/user/user-data`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': authtoken
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const fetchedData = await response.json();
                setUserDetails(fetchedData);
                console.log(fetchedData);
            } catch (err) {
                console.error('There was an error fetching user data:', err);
            }
        };

        fetchUserData();
    }, [authtoken]);

    useEffect(() => {
        // Hide the header on pages other than the home page
        setShowHeader(location.pathname === "/");
    }, [location.pathname]);

    return (
        <div className="header-section main-header" style={{ display: showHeader ? 'none' : 'flex' }}>
            <div className="header-row">
                <h2 className="logo" onClick={() => window.location.href = "/"}>CAREER <span style={{ fontWeight: '700' }}>Gennie</span></h2>
                <div className="header-btn">
                    <a href="/contact" className="contact-us">Contact Us</a>
                    {
                        authtoken && userDetails ?
                            <>
                                <div onClick={() => setIsSidebarPop(true)} className="profile" style={{ backgroundImage: `url(${userDetails.profilePicture})` }}></div>
                            </>
                            :
                            <div className="header-btn">
                                <button className="login-btn"><Link to="/login">Login</Link></button>
                                <button className="signup-btn"><Link to="/sign-up">Sign up</Link></button>
                            </div>
                    }
                </div>
            </div>
            {isSidebarPop ? <UserSidebarPopup name={userDetails.name} image={userDetails.profilePicture} cancel={() => setIsSidebarPop(false)} /> : <></>}
        </div>
    )
}
