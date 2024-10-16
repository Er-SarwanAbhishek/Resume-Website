import React, { useEffect, useState } from "react";
import "./CvNestFooter.css";
import { Link, useLocation } from "react-router-dom";

function CvNestFooter() {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the footer on dashboard
    if (location.pathname.startsWith("/edit-resume")) setShowFooter(false);
    else setShowFooter(true);
  }, [location.pathname]);

  return (
    <div
      className="cvnest-social-media-icon"
      style={showFooter ? { display: "flex" } : { display: "none" }}
    >
      <div className="cvnest-footer-section">
        <div className="logo-cvnest">
          <img
            onClick={() => (window.location.href = "/")}
            src="/branding/Career Gennie Logo.png"
            alt="A Online CV Maker"
            className="career-logo"
            draggable="false"
          />
          <p>
            Career Gennie is the best partner that simplifies creating
            professional and personalized resume with a few clicks. It provides
            you templates, tools, and guidance to help users to craft tailored
            CVs that is aligned with your career goal.
          </p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ol>
            <li>
              <Link to={"/templates"}>Template</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ol>
        </div>
        <div className="contact-section">
          <h3>Contact Info</h3>
          <div className="contact-text-email-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="injected-svg"
              data-src="https://cdn.hugeicons.com/icons/mail-search-02-solid-standard.svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4.75C1 3.23122 2.23122 2 3.75 2H19.75C21.2688 2 22.5 3.23122 22.5 4.75V13.2688C21.4588 11.4644 19.5095 10.25 17.2765 10.25C13.9482 10.25 11.25 12.9482 11.25 16.2765C11.25 17.4621 11.5924 18.5678 12.1836 19.5H3.75C2.23122 19.5 1 18.2688 1 16.75V4.75ZM5.10229 6.37222C5.311 6.01443 5.77024 5.89358 6.12803 6.10229L11.1203 9.01444C11.5095 9.24147 11.9908 9.24147 12.38 9.01444L17.3722 6.10229C17.73 5.89358 18.1892 6.01443 18.398 6.37222C18.6067 6.73001 18.4858 7.18925 18.128 7.39796L13.1358 10.3101C12.2795 10.8096 11.2207 10.8096 10.3645 10.3101L5.37222 7.39796C5.01443 7.18925 4.89358 6.73001 5.10229 6.37222Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.75 16.2765C12.75 13.7766 14.7766 11.75 17.2765 11.75C19.7765 11.75 21.8031 13.7766 21.8031 16.2765C21.8031 17.1656 21.5468 17.9947 21.104 18.6942L22.456 20.0418C22.8471 20.4317 22.8481 21.0648 22.4582 21.456C22.0683 21.8471 21.4352 21.8481 21.044 21.4582L19.6888 20.1074C18.9905 20.5481 18.1633 20.8031 17.2765 20.8031C14.7766 20.8031 12.75 18.7765 12.75 16.2765ZM17.2765 13.75C15.8812 13.75 14.75 14.8812 14.75 16.2765C14.75 17.6719 15.8812 18.8031 17.2765 18.8031C18.6719 18.8031 19.8031 17.6719 19.8031 16.2765C19.8031 14.8812 18.6719 13.75 17.2765 13.75Z"
                fill="currentColor"
              />
            </svg>

            <div className="email-text">
              <p>Email</p>
              <span>support@careergennie.com</span>
            </div>
          </div>
          <div className="Subscribe_Bar">
            <input type="text" placeholder="your@gmail.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="copyright-section">
          <p>© CareerGennie All rights reserved.</p>
          <div className="policy">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <div className="fb-insta-tele-section">
          <div className="developed-by">
            <p>
              Developed By{" "}
              <a href="https://upbstechnology.com" style={{ color: "#de4e26" }}>
                UpbsTechnology
              </a>
            </p>
          </div>
          <p>|</p>
          {/* <i class="fa-brands fa-facebook-f"></i> */}
          {/* <i class="fa-brands fa-instagram"></i> */}
          {/* <i class="fa-brands fa-linkedin-in"></i> */}
          <div className="social-media-connection">
            <a href = "https://www.facebook.com/profile.php?id=61566339015908" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                fill="#3F51B5"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
              ></path>
            </svg>
            </a>
            <a href = "https://www.instagram.com/careergennie/?" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 64 64"
            >
              <radialGradient
                id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
                cx="32"
                cy="32.5"
                r="31.259"
                gradientTransform="matrix(1 0 0 -1 0 64)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#efdcb1"></stop>
                <stop offset="0" stopColor="#f2e0bb"></stop>
                <stop offset=".011" stopColor="#f2e0bc"></stop>
                <stop offset=".362" stopColor="#f9edd2"></stop>
                <stop offset=".699" stopColor="#fef4df"></stop>
                <stop offset="1" stopColor="#fff7e4"></stop>
              </radialGradient>
              <radialGradient
                id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
                cx="18.51"
                cy="66.293"
                r="69.648"
                gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".073" stopColor="#eacc7b"></stop>
                <stop offset=".184" stopColor="#ecaa59"></stop>
                <stop offset=".307" stopColor="#ef802e"></stop>
                <stop offset=".358" stopColor="#ef6d3a"></stop>
                <stop offset=".46" stopColor="#f04b50"></stop>
                <stop offset=".516" stopColor="#f03e58"></stop>
                <stop offset=".689" stopColor="#db359e"></stop>
                <stop offset=".724" stopColor="#ce37a4"></stop>
                <stop offset=".789" stopColor="#ac3cb4"></stop>
                <stop offset=".877" stopColor="#7544cf"></stop>
                <stop offset=".98" stopColor="#2b4ff2"></stop>
              </radialGradient>
              <path
                fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
                d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
              ></path>
              <path
                fill="#fff"
                d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
              ></path>
              <path
                fill="#fff"
                d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
              ></path>
              <circle cx="41" cy="25" r="2" fill="#fff"></circle>
            </svg>
            </a>
            <a href = "https://www.linkedin.com/company/career-gennie" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvNestFooter;
