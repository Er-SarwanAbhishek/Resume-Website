import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/skill.css';
import SaveAlert from '../alerts/SaveAlert';

export default function Skills() {
    const { currentTemplateData, ChangeListValue, DeleteItem, AddItem, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
    const { sectionName, list } = currentTemplateData.AllSections[3];
    const navigate = useNavigate();
    const objectData = {
        listId: new Date().getTime().toString(),
        skillName: "Skill Name"
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!authtoken) {
                localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
                navigate('/edit-resume/education');
                return;
            }

            await fetch(`${backServer}/dashboard/update-templates`, {
                method: "POST",
                body: JSON.stringify(currentTemplateData),
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authtoken
                }
            })
            setIsSaveData(<SaveAlert status={"show"} alertMsg={"All changes saved"}/>);
            setTimeout(() => {
                setIsSaveData(<SaveAlert status={"hide"} alertMsg={"All changes saved"}/>);
            }, 800);
            //ALSO SAVE IN LOCAL STORAGE
            localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
            navigate('/edit-resume/education');
        } catch (error) {
            console.log("Server error.", error);
        }
    };

    return (
        <div className="edit-skills-form">
            <h1>Skills</h1>
            <form onSubmit={handleSubmit}>
                <div className="skills-section">
                    {/* <label><i className="fa-solid fa-address-card"></i> Section Name</label> */}
                    {/* <label>Section Name</label> */}
                    <input type="text" value={sectionName} name='sectionName' onChange={(e) => ChangeSectionValue(e, 3)} placeholder='Section Name' required />
                </div>
                {list.map((element) => {
                    const { skillName, listId } = element;
                    return (
                        <div className="skills-list">
                            <input type="text" name='skillName' value={skillName} onChange={(e) => ChangeListValue(e, 3, listId)} placeholder='Your Skill' required />
                            <i className='fa-solid fa-trash' onClick={() => DeleteItem(3, listId)}></i>
                        </div>
                    );
                })}
                <div className="skill-add-section">
                    <a onClick={() => AddItem(3, objectData)}><i className='fa-solid fa-plus'></i> Add Section </a>
                </div>
                <div className="skill-next-button">
                    <button type='submit'>Save and Next</button>
                </div>
            </form>
        </div>
    );
}
