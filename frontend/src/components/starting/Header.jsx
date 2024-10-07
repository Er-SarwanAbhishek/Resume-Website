import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import UserSidebarPopup from "../popup/UserSidebarPopup";
import GlobalContext from "../context/GlobalContext";
import NavbarMenuPopup from '../popup/NavbarMenuPopup'


export default function Header() {
  const [userDetails, setUserDetails] = useState("");
  const [isSidebarPop, setIsSidebarPop] = useState(false);
  const { authtoken, backServer, HideOverflowOnPop } = useContext(GlobalContext);
  const [isNavbarPop, setIsNavbarPop] = useState(false)

  // LOGGEDIN USER DETAILS
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!authtoken) return;

        const response = await fetch(`${backServer}/user/user-data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authtoken,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const fetchedData = await response.json();
        console.log(fetchedData);
        
        setUserDetails(fetchedData);
      } catch (err) {
        console.error("There was an error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [authtoken]);

  return (
    <div className="header-section">

      <div className="header-row" >
        <h2 className="logo" onClick={() => window.location.href = "/"}>
          CAREER <span style={{ fontWeight: "700" }}>Gennie</span>
        </h2>

        <ul className="menu">
          <li>
            <Link to="/templates">
              Resume Templates
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>

        </ul>
        {authtoken ? (
          userDetails ? <>
            <div
              onClick={() => { setIsSidebarPop(true); HideOverflowOnPop(true) }}
              className="profile"
              style={{ backgroundImage: `url(${userDetails.profilePicture})` }}
            ></div>
            <div className="header-btn resp-btns">
              {
                !isNavbarPop ?
                  <svg
                    onClick={() => { setIsNavbarPop(true); HideOverflowOnPop(true) }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg"
                    data-src="https://cdn.hugeicons.com/icons/menu-01-solid-rounded.svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    role="img"
                    color="#ffffff"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z"
                      fill="currentColor"
                    />
                  </svg> : <i onClick={() => { setIsNavbarPop(false); HideOverflowOnPop(false) }} style={{ color: '#fff', fontSize: '20px' }} className="fa-solid fa-xmark"></i>
              }
            </div>
          </> : <>Loading...</>
        ) : (
          <div className="header-btn">
            <button className="login-btn">
              <Link to="/login">Login</Link>
            </button>
            <button className="signup-btn">
              <Link to="/sign-up">Sign up</Link>
            </button>
            {
              !isNavbarPop ?
                <svg
                  onClick={() => { setIsNavbarPop(true); HideOverflowOnPop(true) }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="injected-svg resp-btns"
                  data-src="https://cdn.hugeicons.com/icons/menu-01-solid-rounded.svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  role="img"
                  color="#ffffff"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z"
                    fill="currentColor"
                  />
                </svg> : <i onClick={() => { setIsNavbarPop(false); HideOverflowOnPop(false) }} style={{ color: '#fff', fontSize: '20px' }} className="fa-solid fa-xmark resp-btns"></i>
            }
          </div>
        )}
      </div>
      {isSidebarPop ? (
        <UserSidebarPopup
          name={userDetails.name}
          image={userDetails.profilePicture}
          cancel={() => { setIsSidebarPop(false); HideOverflowOnPop(false) }}
        />
      ) : (
        <></>
      )}
      {isNavbarPop ? <NavbarMenuPopup name={userDetails.name} setIsNavbarPop = {setIsNavbarPop} image={userDetails.profilePicture} cancel={() => { setIsNavbarPop(false); HideOverflowOnPop(false) } } /> : <></>}
    </div>
  );
}
