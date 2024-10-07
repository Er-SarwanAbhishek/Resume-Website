import React, { useContext, useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./NavbarMenuPopup.css";
import GlobalContext from '../context/GlobalContext';
import UserSidebarPopup from './UserSidebarPopup';
const NavbarMenuPopup = ({ cancel, name, image }) => {

  const { authtoken } = useContext(GlobalContext);
  const [isSidebarPop, setIsSidebarPop] = useState(false);
  const navbarRef = useRef();
  const navigate = useNavigate();

  // CLOSE NAVBAR MENU POPUP BY USEREF

  const ClosePopup = (e) => {
    if (navbarRef.current.contains(e.target)) {
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

  return (
    <>
      <div className="header-hamburger-section">
        <div className="hamburger-menu" ref={navbarRef}>
          <ul className="hamburger-menu-items">
            <li onClick={
              () => {
                navigate("/templates");
                cancel();
              }
            }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/clipboard-stroke-rounded.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
              >
                <path
                  d="M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p>Resume Templates</p>
            </li>

            <li onClick={
              () => {
                navigate("/about");
                cancel();
              }
            }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/mentoring-stroke-rounded.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
              >
                <path
                  d="M12 22L10 16H2L4 22H12ZM12 22H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p>About</p>
            </li>
            
            <li onClick={
              () => {
                navigate("/blog");
                cancel();
              }
            }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/blogger-stroke-rounded.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9577 11.4622V10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04341C13.5821 5.79972 11.833 6.01409 10.4788 6.01409C9.12474 6.01409 7.37562 5.79972 6.47521 7.04341C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Blog</p>
            </li>
            <li onClick={
              () => {
                navigate("/contact");
                cancel();
              }
            }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/contact-02-stroke-rounded.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
              >
                <path
                  d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.79993 11.9741C9.37332 11.2302 9.16733 10.6228 9.04313 10.007C8.85943 9.09641 9.27981 8.20686 9.97622 7.63926C10.2706 7.39937 10.608 7.48133 10.782 7.79358L11.1749 8.49851C11.4864 9.05725 11.6421 9.33663 11.6112 9.63282C11.5803 9.929 11.3703 10.1702 10.9503 10.6527L9.79993 11.9741ZM9.79993 11.9741C10.6634 13.4797 12.0185 14.8356 13.5259 15.7001M13.5259 15.7001C14.2698 16.1267 14.8772 16.3327 15.493 16.4569C16.4036 16.6406 17.2931 16.2202 17.8607 15.5238C18.1006 15.2294 18.0187 14.892 17.7064 14.718L17.0015 14.3251C16.4427 14.0136 16.1634 13.8579 15.8672 13.8888C15.571 13.9197 15.3298 14.1297 14.8473 14.5497L13.5259 15.7001Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Contact</p>
            </li>

            {
              authtoken ?
                <li onClick={() => setIsSidebarPop(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/user-square-stroke-rounded.svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    role="img"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p>Your profile</p>
                </li> : <></>
            }

          </ul>
        </div>
        <div className='login-signin-section' ref={navbarRef}>
          <button className="login-btn" onClick={
            () => {
              navigate("/login");
              cancel();
            }
          }>
            Login
          </button>
          <button className="signup-btn" onClick={
            () => {
              navigate("/sign-up");
              cancel();
            }
          }>
            Sign up
          </button>
        </div>

      </div >

      {isSidebarPop ? <UserSidebarPopup name={name} image={image} cancel={() => setIsSidebarPop(false)} /> : <></>
      }
    </>

  )
}

export default NavbarMenuPopup
