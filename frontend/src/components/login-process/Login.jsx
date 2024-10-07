import React, { useContext, useEffect, useState } from 'react';
import './Signup.css';
import { useGoogleLogin } from '@react-oauth/google';
import Google_Logo from '../../assets/resume-images/Google Logo.png'
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function Login() {

    const [userCredential, setUserCredential] = useState({ email: "", password: "" });
    const [iconDisplay, setIconDisplay] = useState("none");
    const [passType, setPassType] = useState("password");
    const [eyeClass, setEyeClass] = useState("fa-solid fa-eye");
    const [errorDetails, setErrorDetails] = useState({ display: "none", message: "" });
    const { backServer } = useContext(GlobalContext);

    const getUserData = async (accessToken) => {
        const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
        const options = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();

            // REACT -> NODE -> MONGODB
            const fetchingData = await fetch(`${backServer}/auth/google-signup`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

            const dataStatus = await fetchingData.json();
            localStorage.setItem('authtoken', JSON.stringify(dataStatus.authtoken))
            window.location.href = "/";
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorDetails({ display: "block", message: "Server error." });
        }

    };

    const login = useGoogleLogin({
        onSuccess: (tokenResponse => {
            getUserData(tokenResponse.access_token);
        }),
        onError: err => console.log("Google login error: ", err)
    });


    // USER CREDENTIAL

    useEffect(() => {
        if (userCredential.password)
            setIconDisplay("")

        else
            setIconDisplay("none")

    }, [userCredential])

    const ShowPassword = () => {
        if (passType === "password") {
            setPassType("text");
            setEyeClass("fa-solid fa-eye-slash");
        }
        else {
            setPassType("password");
            setEyeClass("fa-solid fa-eye");
        }
    }

    const GetUserValue = (e) => {
        const { name, value } = e.target;
        setUserCredential({ ...userCredential, [name]: value });
    }

    const SaveUserDetails = async (e) => {
        e.preventDefault();
        try {

            // REACT -> NODE -> MONGODB
            const fetchingData = await fetch(`${backServer}/auth/email-login`, {
                method: 'POST',
                body: JSON.stringify(userCredential),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

            const dataStatus = await fetchingData.json();
            if (!dataStatus.success) {
                setErrorDetails({ display: "block", message: dataStatus.message });
                return;
            }

            setErrorDetails({ display: "none" });
            localStorage.setItem('authtoken', JSON.stringify(dataStatus.authtoken));
            window.location.href = "/";
        } catch (error) {
            console.log("There are some errors during submit: ", error);
            setErrorDetails({ display: "block", message: "Server error." });
        }
    }

    return (
        <div className="signup-body">

            {/* IMAGE SECTION */}

            <div className="image-sec"></div>

            {/* SIGN UP SECTION */}

            <div className="signup-column">
                <div className="signup-box">
                    <h2>Login</h2>
                    <p className='ls-desc'>You will retrieve all your saved templates and their data upon logging in.</p>

                    <form action="" onSubmit={SaveUserDetails}>
                        <input type="email" name="email" value={userCredential.email} onChange={GetUserValue} placeholder="- your@email.com" required />
                        <div className="pass-eye">
                            <input type={passType} name="password" value={userCredential.password} onChange={GetUserValue} placeholder="- Your password" required />
                            <i style={{ display: iconDisplay }} onClick={ShowPassword} className={eyeClass}></i>
                        </div>
                        <p className="error-msg" style={{ display: errorDetails.display }}><i class="fa-solid fa-circle-exclamation"></i> {errorDetails.message}</p>
                        <button type='submit'>Login</button>
                    </form>

                    <div className="or-sec">
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>

                    {/* GOOGLE LOGIN */}

                    <button className="signup-google" onClick={() => login()}>
                        {/* <i className="fa-brands fa-google"></i> */}
                        <img src={Google_Logo} alt="" />
                        Continue with google
                    </button>
                    <div className="login-signup-link">
                        <p>
                            Don't have an account?
                            <Link to="/sign-up">&nbsp;<b>Signup</b></Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}
