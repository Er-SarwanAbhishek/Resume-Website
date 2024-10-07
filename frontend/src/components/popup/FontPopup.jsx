import React, { useContext, useEffect, useRef, useState } from 'react';
import './FontPopup.css';
import GlobalContext from '../context/GlobalContext';

export default function FontPopup({ cancel }) {

  const { currentTemplateData, setCurrentTemplateData } = useContext(GlobalContext);
  const { headingTextFont, bodyTextFont } = currentTemplateData;
  const [headingFontDispaly, setHeadingFontDispaly] = useState("none");
  const [paraFontDispaly, setParaFontDispaly] = useState("none");
  const fontPopupRef = useRef(null);


  // ALL FONTS DATA

  const OurAllFonts = [
    { id: 'font_01', fontName: 'Montserrat' },
    { id: 'font_02', fontName: 'Montserrat Alternates' },
    { id: 'font_03', fontName: 'Inter' },
    { id: 'font_04', fontName: 'Mulish' },
    { id: 'font_05', fontName: 'Oswald' },
    { id: 'font_06', fontName: 'Playfair Display' },
    { id: 'font_07', fontName: 'Volkhov' },
    { id: 'font_08', fontName: 'Raleway' },
    { id: 'font_09', fontName: 'Kanit' },
    { id: 'font_10', fontName: 'Playwrite ES' },
    { id: 'font_11', fontName: 'Roboto Condensed' },
    { id: 'font_12', fontName: 'Titillium Web' },
    { id: 'font_13', fontName: 'Laila' },
    { id: 'font_14', fontName: 'Concert One' },
    { id: 'font_15', fontName: 'Poppins' },
    { id: 'font_16', fontName: 'Roboto' },
    { id: 'font_17', fontName: 'Abel' },
    { id: 'font_18', fontName: 'Aclonica' },
    { id: 'font_19', fontName: 'Acme' },
    { id: 'font_20', fontName: 'Afacad' },
    { id: 'font_21', fontName: 'Actor' },
    { id: 'font_22', fontName: 'Adamina' },
    { id: 'font_23', fontName: 'Buenard' },
    { id: 'font_24', fontName: 'Cabin' },
    { id: 'font_25', fontName: 'Commissioner' },
    { id: 'font_26', fontName: 'Convergence' },
    { id: 'font_27', fontName: 'Cormorant' },
    { id: 'font_28', fontName: 'Crimson Pro' },
    { id: 'font_29', fontName: 'Concert One' },
    { id: 'font_30', fontName: 'DM Sans' },
    { id: 'font_31', fontName: 'Esteban' },
    { id: 'font_32', fontName: 'Fjord One' },
    { id: 'font_33', fontName: 'Geologica' },
    { id: 'font_34', fontName: 'Georama' },
    { id: 'font_35', fontName: 'Ubuntu' },
    { id: 'font_36', fontName: 'PT Sans' },
    { id: 'font_37', fontName: 'Work Sans' },
    { id: 'font_38', fontName: 'Manrope' },
  ];

  // SHOW ALL FONTS

  const ShowAllHeadingFonts = () => {
    if (headingFontDispaly === "none") {
      setHeadingFontDispaly("block");
      setParaFontDispaly("none");
    }
    else
      setHeadingFontDispaly("none");
  }

  const ShowAllParaFonts = () => {
    if (paraFontDispaly === "none") {
      setParaFontDispaly("block");
      setHeadingFontDispaly("none");
    }
    else
      setParaFontDispaly("none");
  }

  // CHANGING FONT

  const ChangeCurHeadingFont = (curFont) => {
    setCurrentTemplateData({ ...currentTemplateData, headingTextFont: curFont });
  }

  const ChangeCurBodyFont = (curFont) => {
    setCurrentTemplateData({ ...currentTemplateData, bodyTextFont: curFont });
  }

  // CLOSE FONT POPUP BY USEREF

  const ClosePopup = (e) => {
    if (fontPopupRef.current.contains(e.target)) {
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
    <div className="font-popup-box common-pop-box" ref={fontPopupRef}>
      {/* CANCEL BUTTON */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cancel}>
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h2>Choose Fonts</h2>

      {/* HEADING FONT */}

      <h4>Heading Font</h4>
      <ul className="all-fonts">
        <li style={{ fontFamily: headingTextFont }} onClick={ShowAllHeadingFonts}>{headingTextFont} <i className="fa-solid fa-chevron-down"></i></li>
        {OurAllFonts.map(font => {
          const { id, fontName } = font;
          return (
            <div style={{ display: headingFontDispaly }}>
              {headingTextFont === fontName ? <li style={{ fontFamily: fontName, color: "#635AE2", fontWeight: "700" }} key={id}>{fontName} <i className="fa-solid fa-check"></i></li> : <li style={{ fontFamily: fontName }} key={id} onClick={() => ChangeCurHeadingFont(fontName, headingTextFont)}>{fontName}</li>}
            </div>
          )
        })}
      </ul>

      {/* PARA FONT */}

      <h4>Paragraph Font</h4>
      <ul className="all-fonts">
        <li style={{ fontFamily: bodyTextFont }} onClick={ShowAllParaFonts}>{bodyTextFont} <i className="fa-solid fa-chevron-down"></i></li>
        {OurAllFonts.map(font => {
          const { id, fontName } = font;
          return (
            <div style={{ display: paraFontDispaly }}>
              {bodyTextFont === fontName ? <li style={{ fontFamily: fontName, color: "#635AE2", fontWeight: "700" }} key={id}>{fontName} <i className="fa-solid fa-check"></i></li> : <li style={{ fontFamily: fontName }} key={id} onClick={() => ChangeCurBodyFont(fontName, bodyTextFont)}>{fontName}</li>}
            </div>
          )
        })}
      </ul>

    </div>
  )
}