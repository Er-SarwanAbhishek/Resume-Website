import React, { useContext, useEffect, useRef, useState } from "react";
import "./SkillSuggestionPop.css";
import GlobalContext from "../context/GlobalContext";

export default function SkillSuggestionPop({ skillId, skill, cancel }) {

    const [noResults, setNoResults] = useState(false);
    const { ChangeListValue } = useContext(GlobalContext)
    const skillSuggestRef = useRef();

    //SKILLS LIST
    const skillsList = [
        // Software Skills
        { id: "01", skillName: "Java" },
        { id: "02", skillName: "Python" },
        { id: "03", skillName: "JavaScript" },
        { id: "04", skillName: "C#" },
        { id: "05", skillName: "Ruby" },
        { id: "06", skillName: "PHP" },
        { id: "07", skillName: "C++" },
        { id: "08", skillName: "Swift" },
        { id: "09", skillName: "Go" },
        { id: "10", skillName: "SQL" },
        { id: "11", skillName: "R" },
        { id: "12", skillName: "TypeScript" },
        { id: "13", skillName: "Kotlin" },
        { id: "14", skillName: "Rust" },
        { id: "15", skillName: "Dart" },
        { id: "16", skillName: "MATLAB" },
        { id: "17", skillName: "Scala" },
        { id: "18", skillName: "Shell Scripting" },
        { id: "19", skillName: "Visual Basic" },

        // Graphics Skills
        { id: "20", skillName: "Adobe Photoshop" },
        { id: "21", skillName: "Adobe Illustrator" },
        { id: "22", skillName: "Adobe InDesign" },
        { id: "23", skillName: "CorelDRAW" },
        { id: "24", skillName: "Adobe After Effects" },
        { id: "25", skillName: "Blender" },
        { id: "26", skillName: "Autodesk Maya" },
        { id: "27", skillName: "Cinema 4D" },
        { id: "28", skillName: "Sketch" },
        { id: "29", skillName: "Figma" },
        { id: "30", skillName: "InVision" },
        { id: "31", skillName: "GIMP" },
        { id: "32", skillName: "Unity" },
        { id: "33", skillName: "Adobe XD" },
        { id: "34", skillName: "Procreate" },
        { id: "35", skillName: "ZBrush" },

        // Other Skills
        { id: "36", skillName: "Project Management" },
        { id: "37", skillName: "Data Analysis" },
        { id: "38", skillName: "SEO" },
        { id: "39", skillName: "Digital Marketing" },
        { id: "40", skillName: "Content Writing" },
        { id: "41", skillName: "Public Speaking" },
        { id: "42", skillName: "Social Media Management" },
        { id: "43", skillName: "Customer Service" },
        { id: "44", skillName: "Sales" },
        { id: "45", skillName: "Negotiation" },
        { id: "46", skillName: "Networking" },
        { id: "47", skillName: "Research" },
        { id: "48", skillName: "Time Management" },
        { id: "49", skillName: "Team Leadership" },
        { id: "50", skillName: "Critical Thinking" },
        { id: "51", skillName: "Problem Solving" }
    ]

    const [filteredSkills, setFilteredSkills] = useState(skillsList);

    //DEBOUNCING SEARCHING
    useEffect(() => {
        const handler = setTimeout(() => {
            if (skill) {
                const matches = skillsList.filter(element =>
                    element.skillName.toLowerCase().includes(skill.toLowerCase())
                );

                setFilteredSkills(matches);
                setNoResults(matches.length === 0);
            } else {
                setFilteredSkills(skillsList);
                setNoResults(false);
            }
        }, 0); // 2 seconds debounce

        return () => {
            clearTimeout(handler); // Cleanup on unmount or skill change
        };
    }, [skill]);

    // CLOSE POPUP BY USEREF
    const ClosePopup = (e) => {
        if (skillSuggestRef.current.contains(e.target)) {
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
        <div className="skill-suggest-pop common-pop-box" ref={skillSuggestRef}>
            {noResults ? (
                <h2>No results found</h2>
            ) : (
                filteredSkills.map(({ id, skillName }) => (
                    <li onClick={
                        () => {
                            ChangeListValue({ target: { name: "skillName", value: skillName } }, 3, skillId);
                            cancel();
                        }
                    } className="each-skill" key={id}>{skillName}</li> 
                ))
            )}
        </div>
    )
}