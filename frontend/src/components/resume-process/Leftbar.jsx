import React, { useContext, useEffect, useState } from 'react';
import '../Resume-process-css/leftbar.css';
import FontPopup from '../popup/FontPopup';
import ColorPopup from '../popup/ColorPopup';
import FontSizePopup from "../popup/FontSizePopup";
import GlobalContext from '../context/GlobalContext';
import BackgroundPatternPopup from '../popup/BackgroundPatternPopup';
import ChangeTemplatePopup from '../popup/ChangeTemplatePopup';
import QRPopup from '../popup/QRPopup';
import SignupFormPopup from '../popup/SignupFormPopup';
import ManageSectionsPop from '../popup/ManageSectionsPop';
import { AtsScorePopup } from '../popup/AtsScorePopup';

const LeftBar = () => {

  const [openFontPopup, setOpenFontPopup] = useState("");
  const [openColorPopup, setOpenColorPopup] = useState("");
  const [openFontSizePopup, setOpenFontSizePopup] = useState("");
  const [openBackgroundPopup, setOpenBackgroundPopup] = useState("");
  const [openTemplatePopup, setOpenTemplatePopup] = useState("");
  const [openQRPop, setOpenQRPop] = useState("");
  const [openSectionsPop, setOpenSectionsPop] = useState("");
  const { authtoken, HideOverflowOnPop, setIsSidebarPop } = useContext(GlobalContext);

  const [openAtsScorePopup, setOpenAtsScorePopup] = useState('')

  const HandleQRPopUp = () => {
    if (authtoken)
      setOpenQRPop(<QRPopup cancel={() => setOpenQRPop("")} />);
    else {
      setOpenQRPop(<SignupFormPopup cancel={() => { setOpenQRPop(""); HideOverflowOnPop(false); }} />);
      HideOverflowOnPop(true);
    }
  }


  const HandleTemplatePopUp = () => {
    if (authtoken)
      setOpenTemplatePopup(<ChangeTemplatePopup cancel={() => setOpenTemplatePopup("")} />);
    else {
      setOpenTemplatePopup(<SignupFormPopup cancel={() => { setOpenTemplatePopup(""); HideOverflowOnPop(false); }} />);
      HideOverflowOnPop(true);
    }
  }

  //CHECK ANY POPUP OPEN OR NOT
  useEffect(() => {
    if (openFontPopup || openColorPopup || openFontSizePopup || openBackgroundPopup || openTemplatePopup || openQRPop || openSectionsPop)
      setIsSidebarPop(true);
    else setIsSidebarPop(false);
  }, [openFontPopup, openColorPopup, openFontSizePopup, openBackgroundPopup, openTemplatePopup, openQRPop, openSectionsPop])

  return (
    <div className="sidebar">
      <li className="sidebar-icon" onClick={
        () => setOpenFontPopup(<FontPopup cancel={() => setOpenFontPopup("")} />)
      }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M14 19L11.1069 10.7479C9.76348 6.91597 9.09177 5 8 5C6.90823 5 6.23652 6.91597 4.89309 10.7479L2 19M4.5 12H11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.9692 13.9392V18.4392M21.9692 13.9392C22.0164 13.1161 22.0182 12.4891 21.9194 11.9773C21.6864 10.7709 20.4258 10.0439 19.206 9.89599C18.0385 9.75447 17.1015 10.055 16.1535 11.4363M21.9692 13.9392L19.1256 13.9392C18.6887 13.9392 18.2481 13.9603 17.8272 14.0773C15.2545 14.7925 15.4431 18.4003 18.0233 18.845C18.3099 18.8944 18.6025 18.9156 18.8927 18.9026C19.5703 18.8724 20.1955 18.545 20.7321 18.1301C21.3605 17.644 21.9692 16.9655 21.9692 15.9392V13.9392Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>Font</p>
      </li>
      {openFontPopup}

      <li className="sidebar-icon hgi-duotone hgi-edit-user-02" onClick={
        () => setOpenColorPopup(<ColorPopup cancel={() => setOpenColorPopup("")} />)
      }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 15.0024L7.00868 15.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <p>Color</p>
      </li>
      {openColorPopup}

      <li className="sidebar-icon" onClick={
        () => setOpenFontSizePopup(<FontSizePopup cancel={() => setOpenFontSizePopup("")} />)
      }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M10.5714 18H5.42857M8 3V18M8 3C6.81082 3 5.28326 3.12265 4.06709 3.24346C3.55271 3.29456 3.29552 3.32011 3.06788 3.41021C2.59438 3.59763 2.21271 4.00855 2.06906 4.48556C2 4.71489 2 4.97659 2 5.5M8 3C9.18918 3 10.7167 3.12265 11.9329 3.24346C12.4473 3.29456 12.7045 3.32011 12.9321 3.41021C13.4056 3.59763 13.7873 4.00855 13.9309 4.48556C14 4.71489 14 4.97659 14 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19.7143 21H16.2857M18 12V21M18 12C17.2072 12 16.1888 12.0818 15.3781 12.1623C15.0351 12.1964 14.8637 12.2134 14.7119 12.2735C14.3963 12.3984 14.1418 12.6724 14.046 12.9904C14 13.1433 14 13.3177 14 13.6667M18 12C18.7928 12 19.8112 12.0818 20.6219 12.1623C20.9649 12.1964 21.1363 12.2134 21.2881 12.2735C21.6037 12.3984 21.8582 12.6724 21.954 12.9904C22 13.1433 22 13.3177 22 13.6667" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p>Font Size</p>
      </li>
      {openFontSizePopup}

      <li className="sidebar-icon" onClick={
        () => setOpenBackgroundPopup(<BackgroundPatternPopup cancel={() => setOpenBackgroundPopup("")} />)
      }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M9 7H15C18.2998 7 19.9497 7 20.9749 8.02513C22 9.05025 22 10.7002 22 14V15C22 18.2998 22 19.9497 20.9749 20.9749C19.9497 22 18.2998 22 15 22H14C10.7002 22 9.05025 22 8.02513 20.9749C7 19.9497 7 18.2998 7 15V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 7L5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 5L7 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p>Background</p>
      </li>
      {openBackgroundPopup}

      <li className="sidebar-icon" onClick={() => setOpenTemplatePopup(<ChangeTemplatePopup cancel={() => setOpenTemplatePopup("")} />)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="premium injected-svg"
          data-src="https://cdn.hugeicons.com/icons/crown-solid-rounded.svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 1C11.2796 1 10.8376 1.5264 10.5503 1.97988C10.2554 2.4452 9.95117 3.1155 9.59009 3.91103L9.59009 3.91103C9.44988 4.2199 9.31383 4.53229 9.17756 4.84518C8.86046 5.57329 8.54218 6.30411 8.16755 6.99964C7.88171 7.53032 7.37683 7.83299 6.76135 7.61455C6.52927 7.53218 6.23722 7.40295 5.79615 7.20692C5.69004 7.15975 5.57926 7.10711 5.46493 7.05277C4.85848 6.76458 4.15216 6.42892 3.51264 6.61189C2.88386 6.79179 2.43635 7.31426 2.28943 7.92532C2.20015 8.29667 2.27799 8.67764 2.36923 9.00553C2.46354 9.3445 2.61703 9.76929 2.80214 10.2816L2.80216 10.2816L4.49446 14.9652L4.49447 14.9652L4.49448 14.9653C4.83952 15.9202 5.11802 16.691 5.40655 17.2893C5.99655 18.5128 6.92686 19.2598 8.2897 19.4248C8.91068 19.5 9.67242 19.5 10.5984 19.5H13.4012C14.3272 19.5 15.089 19.5 15.7099 19.4248C17.0728 19.2598 18.0031 18.5128 18.5931 17.2893C18.8816 16.691 19.1601 15.9202 19.5052 14.9651L21.1975 10.2816L21.1975 10.2815C21.3826 9.76926 21.5361 9.34449 21.6304 9.00553C21.7216 8.67764 21.7995 8.29667 21.7102 7.92532C21.5633 7.31426 21.1158 6.79179 20.487 6.61189C19.8539 6.43075 19.15 6.76336 18.5495 7.04714C18.4411 7.09835 18.3361 7.14797 18.2355 7.19269C18.174 7.22 18.1126 7.24761 18.0512 7.27524C17.7834 7.39565 17.5147 7.51644 17.2383 7.61455C16.6228 7.83299 16.1179 7.53032 15.8321 6.99964C15.4574 6.3041 15.1392 5.57327 14.8221 4.84515C14.6858 4.53226 14.5497 4.21987 14.4095 3.911L14.4095 3.91099C14.0485 3.11548 13.7442 2.44519 13.4494 1.97988C13.162 1.5264 12.72 1 11.9998 1ZM11.999 13C11.1743 13 10.5057 13.6716 10.5057 14.5C10.5057 15.3284 11.1743 16 11.999 16H12.0124C12.8372 16 13.5057 15.3284 13.5057 14.5C13.5057 13.6716 12.8372 13 12.0124 13H11.999Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99976 21.9998C5.99976 21.4475 6.44747 20.9998 6.99976 20.9998H16.9998C17.552 20.9998 17.9998 21.4475 17.9998 21.9998C17.9998 22.552 17.552 22.9998 16.9998 22.9998H6.99976C6.44747 22.9998 5.99976 22.552 5.99976 21.9998Z"
            fill="currentColor"
          />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M22 14.0057C22 17.3206 19.3171 20.0017 16 20.0017L16.8571 18.2886" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 10.0086C2 6.69363 4.68286 4.01257 8 4.01257L7.14286 5.72571" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.9658 5.52406H21.7723M13.4658 10.9943H19.4999C20.8806 10.9943 21.9999 9.87573 21.9999 8.49595V4.49674C21.9999 3.11695 20.8806 1.99841 19.4999 1.99841H13.4658C12.0851 1.99841 10.9658 3.11695 10.9658 4.49674V8.49595C10.9658 9.87573 12.0851 10.9943 13.4658 10.9943Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 16.5314H12.8065M4.5 22.0016H10.5341C11.9148 22.0016 13.0341 20.8831 13.0341 19.5033V15.5041C13.0341 14.1243 11.9148 13.0057 10.5341 13.0057H4.5C3.11929 13.0057 2 14.1243 2 15.5041V19.5033C2 20.8831 3.11929 22.0016 4.5 22.0016Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p>Change Template</p>
      </li>
      {openTemplatePopup}

      <li className="sidebar-icon" onClick={HandleQRPopUp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="premium injected-svg"
          data-src="https://cdn.hugeicons.com/icons/crown-solid-rounded.svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 1C11.2796 1 10.8376 1.5264 10.5503 1.97988C10.2554 2.4452 9.95117 3.1155 9.59009 3.91103L9.59009 3.91103C9.44988 4.2199 9.31383 4.53229 9.17756 4.84518C8.86046 5.57329 8.54218 6.30411 8.16755 6.99964C7.88171 7.53032 7.37683 7.83299 6.76135 7.61455C6.52927 7.53218 6.23722 7.40295 5.79615 7.20692C5.69004 7.15975 5.57926 7.10711 5.46493 7.05277C4.85848 6.76458 4.15216 6.42892 3.51264 6.61189C2.88386 6.79179 2.43635 7.31426 2.28943 7.92532C2.20015 8.29667 2.27799 8.67764 2.36923 9.00553C2.46354 9.3445 2.61703 9.76929 2.80214 10.2816L2.80216 10.2816L4.49446 14.9652L4.49447 14.9652L4.49448 14.9653C4.83952 15.9202 5.11802 16.691 5.40655 17.2893C5.99655 18.5128 6.92686 19.2598 8.2897 19.4248C8.91068 19.5 9.67242 19.5 10.5984 19.5H13.4012C14.3272 19.5 15.089 19.5 15.7099 19.4248C17.0728 19.2598 18.0031 18.5128 18.5931 17.2893C18.8816 16.691 19.1601 15.9202 19.5052 14.9651L21.1975 10.2816L21.1975 10.2815C21.3826 9.76926 21.5361 9.34449 21.6304 9.00553C21.7216 8.67764 21.7995 8.29667 21.7102 7.92532C21.5633 7.31426 21.1158 6.79179 20.487 6.61189C19.8539 6.43075 19.15 6.76336 18.5495 7.04714C18.4411 7.09835 18.3361 7.14797 18.2355 7.19269C18.174 7.22 18.1126 7.24761 18.0512 7.27524C17.7834 7.39565 17.5147 7.51644 17.2383 7.61455C16.6228 7.83299 16.1179 7.53032 15.8321 6.99964C15.4574 6.3041 15.1392 5.57327 14.8221 4.84515C14.6858 4.53226 14.5497 4.21987 14.4095 3.911L14.4095 3.91099C14.0485 3.11548 13.7442 2.44519 13.4494 1.97988C13.162 1.5264 12.72 1 11.9998 1ZM11.999 13C11.1743 13 10.5057 13.6716 10.5057 14.5C10.5057 15.3284 11.1743 16 11.999 16H12.0124C12.8372 16 13.5057 15.3284 13.5057 14.5C13.5057 13.6716 12.8372 13 12.0124 13H11.999Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99976 21.9998C5.99976 21.4475 6.44747 20.9998 6.99976 20.9998H16.9998C17.552 20.9998 17.9998 21.4475 17.9998 21.9998C17.9998 22.552 17.552 22.9998 16.9998 22.9998H6.99976C6.44747 22.9998 5.99976 22.552 5.99976 21.9998Z"
            fill="currentColor"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"}>
          <path d="M3 6C3 4.58579 3 3.87868 3.43934 3.43934C3.87868 3 4.58579 3 6 3C7.41421 3 8.12132 3 8.56066 3.43934C9 3.87868 9 4.58579 9 6C9 7.41421 9 8.12132 8.56066 8.56066C8.12132 9 7.41421 9 6 9C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15C7.41421 15 8.12132 15 8.56066 15.4393C9 15.8787 9 16.5858 9 18C9 19.4142 9 20.1213 8.56066 20.5607C8.12132 21 7.41421 21 6 21C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6C15 4.58579 15 3.87868 15.4393 3.43934C15.8787 3 16.5858 3 18 3C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9C16.5858 9 15.8787 9 15.4393 8.56066C15 8.12132 15 7.41421 15 6Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 12H15C13.5858 12 12.8787 12 12.4393 12.4393C12 12.8787 12 13.5858 12 15M12 17.7692V20.5385M15 15V16.5C15 17.9464 15.7837 18 17 18C17.5523 18 18 18.4477 18 19M16 21H15M18 15C19.4142 15 20.1213 15 20.5607 15.44C21 15.8799 21 16.5881 21 18.0043C21 19.4206 21 20.1287 20.5607 20.5687C20.24 20.8898 19.7767 20.9766 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p>Add QR</p>
      </li>
      {openQRPop}

      <li className="sidebar-icon" onClick={() => setOpenSectionsPop(<ManageSectionsPop cancel={() => setOpenSectionsPop("")} />)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="premium injected-svg"
          data-src="https://cdn.hugeicons.com/icons/crown-solid-rounded.svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 1C11.2796 1 10.8376 1.5264 10.5503 1.97988C10.2554 2.4452 9.95117 3.1155 9.59009 3.91103L9.59009 3.91103C9.44988 4.2199 9.31383 4.53229 9.17756 4.84518C8.86046 5.57329 8.54218 6.30411 8.16755 6.99964C7.88171 7.53032 7.37683 7.83299 6.76135 7.61455C6.52927 7.53218 6.23722 7.40295 5.79615 7.20692C5.69004 7.15975 5.57926 7.10711 5.46493 7.05277C4.85848 6.76458 4.15216 6.42892 3.51264 6.61189C2.88386 6.79179 2.43635 7.31426 2.28943 7.92532C2.20015 8.29667 2.27799 8.67764 2.36923 9.00553C2.46354 9.3445 2.61703 9.76929 2.80214 10.2816L2.80216 10.2816L4.49446 14.9652L4.49447 14.9652L4.49448 14.9653C4.83952 15.9202 5.11802 16.691 5.40655 17.2893C5.99655 18.5128 6.92686 19.2598 8.2897 19.4248C8.91068 19.5 9.67242 19.5 10.5984 19.5H13.4012C14.3272 19.5 15.089 19.5 15.7099 19.4248C17.0728 19.2598 18.0031 18.5128 18.5931 17.2893C18.8816 16.691 19.1601 15.9202 19.5052 14.9651L21.1975 10.2816L21.1975 10.2815C21.3826 9.76926 21.5361 9.34449 21.6304 9.00553C21.7216 8.67764 21.7995 8.29667 21.7102 7.92532C21.5633 7.31426 21.1158 6.79179 20.487 6.61189C19.8539 6.43075 19.15 6.76336 18.5495 7.04714C18.4411 7.09835 18.3361 7.14797 18.2355 7.19269C18.174 7.22 18.1126 7.24761 18.0512 7.27524C17.7834 7.39565 17.5147 7.51644 17.2383 7.61455C16.6228 7.83299 16.1179 7.53032 15.8321 6.99964C15.4574 6.3041 15.1392 5.57327 14.8221 4.84515C14.6858 4.53226 14.5497 4.21987 14.4095 3.911L14.4095 3.91099C14.0485 3.11548 13.7442 2.44519 13.4494 1.97988C13.162 1.5264 12.72 1 11.9998 1ZM11.999 13C11.1743 13 10.5057 13.6716 10.5057 14.5C10.5057 15.3284 11.1743 16 11.999 16H12.0124C12.8372 16 13.5057 15.3284 13.5057 14.5C13.5057 13.6716 12.8372 13 12.0124 13H11.999Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99976 21.9998C5.99976 21.4475 6.44747 20.9998 6.99976 20.9998H16.9998C17.552 20.9998 17.9998 21.4475 17.9998 21.9998C17.9998 22.552 17.552 22.9998 16.9998 22.9998H6.99976C6.44747 22.9998 5.99976 22.552 5.99976 21.9998Z"
            fill="currentColor"
          />
        </svg>


        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="manage sections">
          <path d="M3 8H8" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
          <path d="M11 8H21" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
          <circle cx={10} cy={8} r={2} stroke="currentColor" strokeWidth={1.5} />
          <path d="M21 16L16 16" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
          <path d="M13 16H3" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
          <circle cx={14} cy={16} r={2} transform="rotate(-180 14 16)" stroke="currentColor" strokeWidth={1.5} />
        </svg>
        <p>Manage Sections</p>
      </li>
      {openSectionsPop}
      <li className="sidebar-icon" onClick={() => setOpenAtsScorePopup(<AtsScorePopup cancel={() => setOpenAtsScorePopup("")} />)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="premium injected-svg"
          data-src="https://cdn.hugeicons.com/icons/crown-solid-rounded.svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 1C11.2796 1 10.8376 1.5264 10.5503 1.97988C10.2554 2.4452 9.95117 3.1155 9.59009 3.91103L9.59009 3.91103C9.44988 4.2199 9.31383 4.53229 9.17756 4.84518C8.86046 5.57329 8.54218 6.30411 8.16755 6.99964C7.88171 7.53032 7.37683 7.83299 6.76135 7.61455C6.52927 7.53218 6.23722 7.40295 5.79615 7.20692C5.69004 7.15975 5.57926 7.10711 5.46493 7.05277C4.85848 6.76458 4.15216 6.42892 3.51264 6.61189C2.88386 6.79179 2.43635 7.31426 2.28943 7.92532C2.20015 8.29667 2.27799 8.67764 2.36923 9.00553C2.46354 9.3445 2.61703 9.76929 2.80214 10.2816L2.80216 10.2816L4.49446 14.9652L4.49447 14.9652L4.49448 14.9653C4.83952 15.9202 5.11802 16.691 5.40655 17.2893C5.99655 18.5128 6.92686 19.2598 8.2897 19.4248C8.91068 19.5 9.67242 19.5 10.5984 19.5H13.4012C14.3272 19.5 15.089 19.5 15.7099 19.4248C17.0728 19.2598 18.0031 18.5128 18.5931 17.2893C18.8816 16.691 19.1601 15.9202 19.5052 14.9651L21.1975 10.2816L21.1975 10.2815C21.3826 9.76926 21.5361 9.34449 21.6304 9.00553C21.7216 8.67764 21.7995 8.29667 21.7102 7.92532C21.5633 7.31426 21.1158 6.79179 20.487 6.61189C19.8539 6.43075 19.15 6.76336 18.5495 7.04714C18.4411 7.09835 18.3361 7.14797 18.2355 7.19269C18.174 7.22 18.1126 7.24761 18.0512 7.27524C17.7834 7.39565 17.5147 7.51644 17.2383 7.61455C16.6228 7.83299 16.1179 7.53032 15.8321 6.99964C15.4574 6.3041 15.1392 5.57327 14.8221 4.84515C14.6858 4.53226 14.5497 4.21987 14.4095 3.911L14.4095 3.91099C14.0485 3.11548 13.7442 2.44519 13.4494 1.97988C13.162 1.5264 12.72 1 11.9998 1ZM11.999 13C11.1743 13 10.5057 13.6716 10.5057 14.5C10.5057 15.3284 11.1743 16 11.999 16H12.0124C12.8372 16 13.5057 15.3284 13.5057 14.5C13.5057 13.6716 12.8372 13 12.0124 13H11.999Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99976 21.9998C5.99976 21.4475 6.44747 20.9998 6.99976 20.9998H16.9998C17.552 20.9998 17.9998 21.4475 17.9998 21.9998C17.9998 22.552 17.552 22.9998 16.9998 22.9998H6.99976C6.44747 22.9998 5.99976 22.552 5.99976 21.9998Z"
            fill="currentColor"
          />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p>Check ATS Score</p>
      </li>
      {openAtsScorePopup}
    </div >

  );
}

export default LeftBar;
