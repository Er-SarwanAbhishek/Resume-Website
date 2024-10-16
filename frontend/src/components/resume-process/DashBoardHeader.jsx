import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Resume-process-css/dashboardheader.css';
import PersonalDetails from './PersonalDetails';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import Project from './Project';
import Skills from './Skills';
import Education from './Education';
import JobExp from './JobExp';
import LeftBar from './Leftbar';
import ResumeDashboard from './ResumeDashboard';
import '../Resume-process-css/dashboardform.css';
import GlobalContext from '../context/GlobalContext';
import { TemplateData } from '../templates/TemplateData';

export default function DashBoardHeader() {

  const { currentTemplateData, isSidebarPop} = useContext(GlobalContext);
  const { AllSections } = currentTemplateData;
  const [editHeader, setEditHeader] = useState("PersonalDetails");
  const [curComp, setCurComp] = useState(<PersonalDetails />);
  const [highlightSectionClass, setHighlightSectionClass] = useState("personal-route");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/edit-resume":
        setEditHeader("PersonalDetails");
        setCurComp(<PersonalDetails />);
        setHighlightSectionClass("personal-route")
        break;
      case "/edit-resume/summary":
        if (AllSections[0].isSection) {
          setEditHeader("summary");
          setCurComp(<Summary />);
          setHighlightSectionClass("summary-route")
          break;
        }
      case "/edit-resume/contact-info":
        if (AllSections[1].isSection) {
          setEditHeader("contact-info");
          setCurComp(<ContactInfo />);
          setHighlightSectionClass("contact-route")
          break;
        }
      case "/edit-resume/project":
        if (AllSections[2].isSection) {
          setEditHeader("project");
          setCurComp(<Project />);
          setHighlightSectionClass("project-route")
          break;
        }
      case "/edit-resume/skills":
        if (AllSections[3].isSection) {
          setEditHeader("skills");
          setCurComp(<Skills />);
          setHighlightSectionClass("skills-route")
          break;
        }
      case "/edit-resume/education":
        if (AllSections[5].isSection) {
          setEditHeader("education");
          setCurComp(<Education />);
          setHighlightSectionClass("education-route")
          break;
        }
      case "/edit-resume/job-exp":
        if (AllSections[4].isSection) {
          setEditHeader("job-exp");
          setCurComp(<JobExp />);
          setHighlightSectionClass("job-exp-route")
          break;
        }
      default:
        setEditHeader("PersonalDetails");
        setCurComp(<PersonalDetails />);
        setHighlightSectionClass("personal-route")
        break;
    }
  }, [location.pathname, AllSections[0].isSection, AllSections[1].isSection, AllSections[2].isSection, AllSections[3].isSection, AllSections[4].isSection, AllSections[5].isSection]);

  return (
    <>
      <div className='Full-page'>
        <LeftBar />
        <div className="cv-right-dashboard">
          <div className="resume-process-navbar">
            <Link className={editHeader === "PersonalDetails" ? "active-page" : ""} to="/edit-resume">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4" d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z" fill="currentColor"></path>
                <path opacity="0.4" d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" fill="currentColor"></path>
                <path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="currentColor" strokeWidth="1.5"></path>
                <path d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
              </svg>
              <span>
                  PersonalDetails{" "}
                  {currentTemplateData. isPersonaldetailschange ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
            </Link>
            {
              AllSections[0].isSection &&
              <Link className={editHeader === "summary" ? "active-page" : ""} to="/edit-resume/summary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M3.58579 9.91421C4.17157 10.5 5.11438 10.5 7 10.5C8.88562 10.5 9.82843 10.5 10.4142 9.91421C11 9.32843 11 8.38562 11 6.5C11 4.61438 11 3.67157 10.4142 3.08579C9.82843 2.5 8.88562 2.5 7 2.5C5.11438 2.5 4.17157 2.5 3.58579 3.08579C3 3.67157 3 4.61438 3 6.5C3 8.38562 3 9.32843 3.58579 9.91421Z" fill="currentColor"></path>
                  <path d="M15 3.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 9.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 15.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 21.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3.58579 9.91421C4.17157 10.5 5.11438 10.5 7 10.5C8.88562 10.5 9.82843 10.5 10.4142 9.91421C11 9.32843 11 8.38562 11 6.5C11 4.61438 11 3.67157 10.4142 3.08579C9.82843 2.5 8.88562 2.5 7 2.5C5.11438 2.5 4.17157 2.5 3.58579 3.08579C3 3.67157 3 4.61438 3 6.5C3 8.38562 3 9.32843 3.58579 9.91421Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>
                  Summary{" "}
                  {AllSections[0].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
              </Link>
            }

            {
              AllSections[1].isSection &&
              <Link className={editHeader === "contact-info" ? "active-page" : ""} to="/edit-resume/contact-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z" fill="currentColor"></path>
                  <path d="M13 7.5L15.5 10L21 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                <span>
                  Contact Info{" "}
                  {AllSections[1].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px', fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
              </Link>
            }

            {
              AllSections[2].isSection &&
              <Link className={editHeader === "project" ? "active-page" : ""} to="/edit-resume/project">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M3.5639 10.9896C3.90429 10.1536 5.47248 8.49792 9.06055 8.49792C9.36196 8.49792 10.1526 8.19468 10.1117 6.55168C10.095 5.06667 10.6363 2.12886 12.907 2.00216C13.357 2 13.8461 2 14.3807 2C16.1798 2 17.0793 2 17.7977 2.2522C18.9527 2.65765 19.8637 3.5151 20.2945 4.60214C20.5625 5.27832 20.5625 6.12494 20.5625 7.81818V17C20.5625 17.9293 20.5625 18.394 20.4856 18.7804C20.17 20.3671 18.9296 21.6075 17.3429 21.9231C16.9565 22 16.4918 22 15.5625 22H11.2898C8.02857 22 6.39796 22 5.26557 21.2022C4.94112 20.9736 4.65308 20.7025 4.4102 20.3971C3.5625 19.3313 3.5625 17.7966 3.5625 14.7273V12.1818C3.5625 11.7548 3.5625 11.3586 3.5639 10.9896Z" fill="currentColor"></path>
                  <path d="M16 16.9998L9 16.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 12.9998L13 12.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M20.5 14C20.5 17.7712 20.5 19.6569 19.2552 20.8284C18.0104 22 16.0069 22 12 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 9.21865 3.5 7.73706 3.96894 6.55375C4.72281 4.65142 6.31714 3.15088 8.33836 2.44135C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                  <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>
                  Project{" "}
                  {AllSections[2].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
              </Link>
            }

            {
              AllSections[3].isSection &&
              <Link className={editHeader === "skills" ? "active-page" : ""} to="/edit-resume/skills">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M2 5.55664C2 4.15651 2 3.45644 2.27248 2.92166C2.51217 2.45126 2.89462 2.06881 3.36502 1.82912C3.8998 1.55664 4.59987 1.55664 6 1.55664C7.40013 1.55664 8.1002 1.55664 8.63498 1.82912C9.10538 2.06881 9.48783 2.45126 9.72752 2.92166C10 3.45644 10 4.15651 10 5.55664C10 6.95677 10 7.65684 9.72752 8.19162C9.48783 8.66202 9.10538 9.04447 8.63498 9.28416C8.1002 9.55664 7.40013 9.55664 6 9.55664C4.59987 9.55664 3.8998 9.55664 3.36502 9.28416C2.89462 9.04447 2.51217 8.66202 2.27248 8.19162C2 7.65684 2 6.95677 2 5.55664Z" fill="currentColor"></path>
                  <path opacity="0.4" d="M14 17.5566C14 16.1565 14 15.4564 14.2725 14.9216C14.5122 14.4512 14.8946 14.0688 15.365 13.8291C15.8998 13.5566 16.5999 13.5566 18 13.5566C19.4001 13.5566 20.1002 13.5566 20.635 13.8291C21.1054 14.0688 21.4878 14.4512 21.7275 14.9216C22 15.4564 22 16.1565 22 17.5566C22 18.9567 22 19.6568 21.7275 20.1916C21.4878 20.662 21.1054 21.0444 20.635 21.2841C20.1002 21.5566 19.4001 21.5566 18 21.5566C16.5999 21.5566 15.8998 21.5566 15.365 21.2841C14.8946 21.0444 14.5122 20.662 14.2725 20.1916C14 19.6568 14 18.9567 14 17.5566Z" fill="currentColor"></path>
                  <path d="M2 5.55664C2 4.15651 2 3.45644 2.27248 2.92166C2.51217 2.45126 2.89462 2.06881 3.36502 1.82912C3.8998 1.55664 4.59987 1.55664 6 1.55664C7.40013 1.55664 8.1002 1.55664 8.63498 1.82912C9.10538 2.06881 9.48783 2.45126 9.72752 2.92166C10 3.45644 10 4.15651 10 5.55664C10 6.95677 10 7.65684 9.72752 8.19162C9.48783 8.66202 9.10538 9.04447 8.63498 9.28416C8.1002 9.55664 7.40013 9.55664 6 9.55664C4.59987 9.55664 3.8998 9.55664 3.36502 9.28416C2.89462 9.04447 2.51217 8.66202 2.27248 8.19162C2 7.65684 2 6.95677 2 5.55664Z" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M2 17.5566C2 16.1565 2 15.4564 2.27248 14.9216C2.51217 14.4512 2.89462 14.0688 3.36502 13.8291C3.8998 13.5566 4.59987 13.5566 6 13.5566C7.40013 13.5566 8.1002 13.5566 8.63498 13.8291C9.10538 14.0688 9.48783 14.4512 9.72752 14.9216C10 15.4564 10 16.1565 10 17.5566C10 18.9567 10 19.6568 9.72752 20.1916C9.48783 20.662 9.10538 21.0444 8.63498 21.2841C8.1002 21.5566 7.40013 21.5566 6 21.5566C4.59987 21.5566 3.8998 21.5566 3.36502 21.2841C2.89462 21.0444 2.51217 20.662 2.27248 20.1916C2 19.6568 2 18.9567 2 17.5566Z" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M14 17.5566C14 16.1565 14 15.4564 14.2725 14.9216C14.5122 14.4512 14.8946 14.0688 15.365 13.8291C15.8998 13.5566 16.5999 13.5566 18 13.5566C19.4001 13.5566 20.1002 13.5566 20.635 13.8291C21.1054 14.0688 21.4878 14.4512 21.7275 14.9216C22 15.4564 22 16.1565 22 17.5566C22 18.9567 22 19.6568 21.7275 20.1916C21.4878 20.662 21.1054 21.0444 20.635 21.2841C20.1002 21.5566 19.4001 21.5566 18 21.5566C16.5999 21.5566 15.8998 21.5566 15.365 21.2841C14.8946 21.0444 14.5122 20.662 14.2725 20.1916C14 19.6568 14 18.9567 14 17.5566Z" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M20.8679 1.99598L21.5602 2.68835C22.146 3.27413 22.146 4.22388 21.5602 4.80966L17.9328 8.50533C17.6475 8.79068 17.2825 8.98304 16.8858 9.05712L14.6377 9.54513C14.2827 9.62223 13.9666 9.30706 14.0427 8.95189L14.5212 6.71656C14.5953 6.31988 14.7876 5.95488 15.073 5.66953L18.7466 1.99598C19.3323 1.41019 20.2821 1.41019 20.8679 1.99598Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Skills{" "}
                {AllSections[3].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
              </Link>
            }

            {
              AllSections[5].isSection &&
              <Link className={editHeader === "education" ? "active-page" : ""} to="/edit-resume/education">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M20.625 14V10C20.625 8.89543 19.7296 8 18.625 8H6.625C4.96815 8 3.625 6.65685 3.625 5V14C3.625 17.7712 3.625 19.6569 4.79657 20.8284C5.96815 22 7.85376 22 11.625 22H12.625C16.3962 22 18.2819 22 19.4534 20.8284C20.625 19.6569 20.625 17.7712 20.625 14Z" fill="currentColor"></path>
                  <path d="M7.625 5H16.125C16.9534 5 17.625 5.67157 17.625 6.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M18.622 2L6.43267 2.00002C5.93571 2.00002 5.42741 2.07294 5.0257 2.36782C3.75198 3.30279 2.77039 5.38801 4.75264 7.2706C5.30921 7.7992 6.08717 7.99082 6.85192 7.99082H18.4085C19.202 7.99082 20.625 8.10439 20.625 10.5273V17.9812C20.625 20.2007 18.8353 22 16.6276 22H7.59746C5.39386 22 3.79119 20.4426 3.66459 18.0713L3.6311 5.16638" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M15.125 13H9.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.125 17H9.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Education{" "}
                {AllSections[5].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                  </span>
              </Link>
            }

            {
              AllSections[4].isSection &&
              <Link className={editHeader === "job-exp" ? "active-page" : ""} to="/edit-resume/job-exp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M6.5 9H5.5M10.5 9H9.5M6.5 6H5.5M10.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M14 8V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H14ZM14 8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M14 8V22H8C7.9867 22 7.97344 22 7.9602 22C8.64676 21.9998 9.19289 21.6239 9.68326 21.0983C10.5875 20.1291 9.34046 19.3352 8.62423 18.8793C8.54513 18.8289 8.47251 18.7827 8.40997 18.7408C6.93547 17.7531 5.06453 17.7531 3.59003 18.7408C3.5275 18.7827 3.45487 18.8289 3.37577 18.8793C3.00498 19.1153 2.49191 19.4419 2.20873 19.8366C2 18.961 2 17.7517 2 16V8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2C10.8284 2 12.2426 2 13.1213 2.87868C14 3.75736 14 5.17157 14 8ZM6 16C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16Z" fill="currentColor"></path>
                  <path d="M8.02332 13.9545C8.02332 15.0583 7.12792 15.953 6.02338 15.953C4.91885 15.953 4.02344 15.0583 4.02344 13.9545C4.02344 12.8508 4.91885 11.9561 6.02338 11.9561C7.12792 11.9561 8.02332 12.8508 8.02332 13.9545Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M2.06786 20.2098C3.12621 18.5817 4.8069 17.9715 6.02295 17.9727C7.23901 17.974 8.87044 18.5817 9.92879 20.2098C9.99721 20.3151 10.016 20.4447 9.95432 20.5541C9.70681 20.9927 8.93832 21.863 8.38326 21.922C7.7455 21.9898 6.07718 21.9993 6.02424 21.9996C5.97126 21.9993 4.25145 21.9898 3.6134 21.922C3.05834 21.863 2.28985 20.9927 2.04234 20.5541C1.98059 20.4447 1.99943 20.3151 2.06786 20.2098Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                <span>JobExp {" "}
                {AllSections[4].isSectionDetailsChanges ? (
                    <i class="fa fa-check-circle" style={{color: "green", marginLeft: '2px',fontSize: '13px'}}></i>
                  ) : (
                    <i
                    class="fas fa-exclamation-circle"
                    style={{ color: "red", marginLeft: "2px",fontSize: '13px' }}
                  />
                  )}
                </span>
              </Link>
            }
          </div>
          <ResumeDashboard highlightSectionClass={highlightSectionClass} />
          <div className={`cv-all-forms ${isSidebarPop && "hide-form"}`}>
            {curComp}
          </div>
          <div className={`mobile-resume-prev ${isSidebarPop && "show-cv-prev"}`}>
            <div className="cv-prev">
              {TemplateData.map((element) => {
                if (element.id === currentTemplateData.id) {
                  return <element.element key={element.id} resumeData={currentTemplateData} />;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
