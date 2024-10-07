import React, { useState } from 'react'
import { TemplateData } from "../templates/TemplateData";
import './DesignationBasedResumeGuidance.css';
import { Tilt } from 'react-tilt';

export const DesignationBasedResumeGuidance = ({ editTemplate, setIsPrevTemplate, HideOverflowOnPop }) => {
    const [subSelectedTem, setSubSelectedTem] = useState("businessAnalytics");

    //TILT CONTROLS
    const defaultOptions = {
        reverse: true,  // reverse the tilt direction
        max: 10,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const professions = [
        { value: "businessAnalytics", label: "Business Analyst", icon: "fa-briefcase" },
        { value: "dataScientist", label: "Data Analyst", icon: "fa-database" },
        { value: "productManager", label: "Product Manager", icon: "fa-user-gear" },
        { value: "softwareEngineer", label: "Software Engineer", icon: "fa-laptop-code" },
        { value: "sales", label: "Sales", icon: "fa-chart-simple" },
        { value: "teacher", label: "Teacher", icon: "fa-pen-ruler" },
        { value: "engineer", label: "Hardware Engineer", icon: "fa-graduation-cap" },
        { value: "accounting", label: "Accounting", icon: "fa-folder-open" },
        { value: "graphicDesigner", label: "Designer", icon: "fa-palette" },
        { value: "marketing", label: "Marketing", icon: "fa-shop" }
    ];

    const handleDropdownChange = (event) => {
        const selectedProfession = event.target.value;
        setSubSelectedTem(selectedProfession);
        handleProfessionClick(selectedProfession);
    }

    const handleProfessionClick = (profession) => {
        switch (profession) {
            case "businessAnalytics":
            case "dataScientist":
            case "productManager":
            case "softwareEngineer":
            case "sales":
            case "teacher":
            case "engineer":
            case "accounting":
            case "graphicDesigner":
            case "marketing":
                setSubSelectedTem(profession);
                break;
            default:
                setSubSelectedTem([]);
                break;
        }
    };

    const handleProfessionClickad = (profession) => {

        switch (profession) {
            case "businessAnalytics":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "dataScientist":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "productManager":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "softwarEengineer":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "sales":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "teacher":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "engineer":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "accounting":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "graphicDesigner":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            case "marketing":
                setSubSelectedTem(TemplateData.subCategory);
                break;
            default:
                setSubSelectedTem([]);
                break;
        }
    };
    return (

        <div className="home-resume-picker" style={{ backgroundImage: "url('./images/background-svg-shape.svg')" }}>
            <div className="hsp-row1">
                <h2>
                    The Right Resume Builder for Your <span>Job and Experience</span>
                </h2>
                <div className="dropdown-side">
                    <img src="" alt="" draggable="false" />
                    <select
                        value={subSelectedTem}
                        onChange={handleDropdownChange}
                        className="profession-dropdown"
                    >
                        {professions.map((profession) => (
                            <option key={profession.value} value={profession.value}>
                                {profession.label}
                            </option>
                        ))}
                    </select>

                </div>


            </div>
            <div className="rp-container">
                <div className="list-side">
                    <div
                        onClick={() => {
                            handleProfessionClick("businessAnalytics");
                            setSubSelectedTem("businessAnalytics");
                        }}
                        className={subSelectedTem === "businessAnalytics" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-briefcase"></i> <h3>Business Analyst</h3>
                    </div>

                    <div
                        onClick={() => {
                            handleProfessionClick("dataScientist");
                            setSubSelectedTem("dataScientist");
                        }} className={subSelectedTem === "dataScientist" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-database"></i> <h3>Data Analyst</h3>

                    </div>
                    <div title='product'
                        onClick={() => {
                            handleProfessionClick("productManager");
                            setSubSelectedTem("productManager");
                        }} className={subSelectedTem === "productManager" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-user-gear"></i> <h3>Product Manager</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("softwarEengineer");
                            setSubSelectedTem("softwareEngineer")
                        }}
                        className={subSelectedTem === "softwareEngineer" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-laptop-code"></i> <h3>Software Engineer</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("sales");
                            setSubSelectedTem("sales");
                        }}
                        className={subSelectedTem === "sales" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-chart-simple"></i> <h3>Sales</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("teacher");
                            setSubSelectedTem("teacher");
                        }}
                        className={subSelectedTem === "teacher" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-pen-ruler"></i> <h3>Teacher</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("engineer");
                            setSubSelectedTem("engineer");
                        }} className={subSelectedTem === "engineer" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-graduation-cap"></i> <h3>Hardware Engineer</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("accounting");
                            setSubSelectedTem("accounting");
                        }} className={subSelectedTem === "accounting" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-folder-open"></i> <h3>Accounting</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("graphicDesigner");
                            setSubSelectedTem("graphicDesigner")
                        }} className={subSelectedTem === "graphicDesigner" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-palette"></i> <h3>Designer</h3>
                    </div>
                    <div
                        onClick={() => {
                            handleProfessionClick("marketing");
                            setSubSelectedTem("marketing");
                        }} className={subSelectedTem === "marketing" ? "designation-active-tab designation-list" : "designation-list"}
                    >
                        <i className="fa-solid fa-shop"></i> <h3>Marketing</h3>
                    </div>
                </div>
                <div className="view-side">
                    {TemplateData.map((element, index) =>
                        (element.subCategory === subSelectedTem) && (
                            <div className="vs" key={index}>
                                {console.log(element.subCategory, subSelectedTem)}
                                <div className='vs-div' style={{ border: '30px solid #f0f2fd', borderRadius: '20px', backgroundColor: '#f0f2fd' }}>
                                    <Tilt options={defaultOptions}>
                                        <div className='view-side-dimenssions' onClick={() => { setIsPrevTemplate([<element.element resumeData={element} />, element]); HideOverflowOnPop(true) }}> <element.element resumeData={element} /></div>
                                    </Tilt>
                                </div>
                                <button className="template-btn" onClick={() => editTemplate(element)}>Use This Template</button>
                            </div>
                        )
                    )}
                </div>

            </div>
        </div>
    )
} 