import React, { useContext, useEffect, useRef } from "react";
import "./SignupFormPopup.css";
import "../login-process/Signup.css";
import { Link } from "react-router-dom";
import Google_Logo from '../../assets/resume-images/Google Logo.png';
import GlobalContext from "../context/GlobalContext";

const SignupFormPopup = ({ cancel }) => {

  const { GoogleLogin, errorDetails, SaveUserDetails } = useContext(GlobalContext);
  const signupFormPopRef = useRef();

  // CLOSE FONT POPUP BY USEREF

  const ClosePopup = (e) => {
    if (signupFormPopRef.current.contains(e.target)) {
      return;
    }
    cancel();
  };


  useEffect(() => {
    document.addEventListener("click", ClosePopup, true);
    return () => {
      document.removeEventListener("click", ClosePopup, true);
    };
  });
  return (
    <div className="signup-main-container signup-body">
      <div className="signup-container" ref={signupFormPopRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
          <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="signup-plans">
          <h2>CAREER <span style={{ fontWeight: '700' }}>Gennie</span></h2>
          <ul>
            <li> <i class="fa-solid fa-check"></i>Save your resume.</li>
            <li> <i class="fa-solid fa-check"></i>Add QR code in resume.</li>
            <li> <i class="fa-solid fa-check"></i>Change the template while editing.</li>
            <li> <i class="fa-solid fa-check"></i>View your resume from anywhere using a single URL.</li>
          </ul>
        </div>
        <div className="signup-steps signup-column">
          <div className="pop-signup-box signup-box">
            <h2>SignUp</h2>
            <form>
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
              <input type="password" placeholder="Enter your password" required />
              <button type="submit">Sign Up</button>
            </form>

            <div className="or-sec">
              <hr />
              <p>OR</p>
              <hr />
            </div>

            <button className="signup-google" onClick={() => GoogleLogin()}>
              <img src={Google_Logo} alt="" />
              Continue with google
            </button>

            <div className="login-signup-link">
              <p>
                Already member of CareerGennie?
                <Link to="/login">&nbsp;<b>Login</b> </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFormPopup;
