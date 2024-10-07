import React, { useContext, useEffect, useState } from 'react';
import './Signup.css';
import Google_Logo from '../../assets/resume-images/Google Logo.png'
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [userCredential, setUserCredential] = useState({ fullName: "", email: "", createPassword: "", confirmPassword: "" });
    const [iconDisplay, setIconDisplay] = useState("none");
    const [passType, setPassType] = useState("password");
    const [eyeClass, setEyeClass] = useState("fa-solid fa-eye");
    const { GoogleLogin, errorDetails, SaveUserDetails } = useContext(GlobalContext);

    // USER CREDENTIAL
    useEffect(() => {
        if (userCredential.confirmPassword)
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

    return (
        <div className="signup-body">

            {/* IMAGE SECTION */}

            <div className="image-sec"></div>

            {/* SIGN UP SECTION */}

            <div className="signup-column">
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <p className="ls-desc">You can save all your work in your profile by signing up.</p>
                    <form action="" onSubmit={(e) => SaveUserDetails(e, userCredential)}>
                        <input type="text" name="fullName" value={userCredential.fullName} onChange={GetUserValue} placeholder="- Full name" required />
                        <input type="email" name="email" value={userCredential.email} onChange={GetUserValue} placeholder="- your@email.com" required />
                        <input type="password" name="createPassword" value={userCredential.createPassword} onChange={GetUserValue} placeholder="- Create password" required />
                        <div className="pass-eye">
                            <input type={passType} name="confirmPassword" value={userCredential.confirmPassword} onChange={GetUserValue} placeholder="- Confirm password" required />
                            <i style={{ display: iconDisplay }} onClick={ShowPassword} className={eyeClass}></i>
                        </div>
                        <p className="error-msg" style={{ display: errorDetails.display }}><i class="fa-solid fa-circle-exclamation"></i> {errorDetails.message}</p>
                        <button type='submit'>Sign up</button>
                    </form>

                    <div className="or-sec">
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>

                    {/* GOOGLE LOGIN */}

                    <button className="signup-google" onClick={() => GoogleLogin()}>
                        {/* <i className="fa-brands fa-google"></i> */}
                        <img src={Google_Logo} alt="" />
                        Continue with google
                    </button>

                    <div className="login-signup-link">
                        <p>
                            Already have an account?
                            <Link to="/login">&nbsp;<b>Login</b> </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}
