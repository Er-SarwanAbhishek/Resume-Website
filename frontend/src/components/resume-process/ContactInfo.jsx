import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import IconPopup from '../popup/IconPopup';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/Contact.css';
import SaveAlert from '../alerts/SaveAlert';

export default function ContactInfo() {

    const { currentTemplateData, DeleteItem, AddItem, ChangeListValue, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
    const [isIcon, setIsIcon] = useState("");
    const navigate = useNavigate();
    const objectData = {
        listId: new Date().getTime().toString(),
        iconName: "fa-solid fa-plus",
        contactName: ""
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!authtoken) {
                localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
                navigate('/edit-resume/project');
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
            setIsSaveData(<SaveAlert status={"show"} alertMsg={"All changes saved"} />);
            setTimeout(() => {
                setIsSaveData(<SaveAlert status={"hide"} alertMsg={"All changes saved"} />);
            }, 800);
            //ALSO SAVE IN LOCAL STORAGE
            localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
            navigate('/edit-resume/project');
        } catch (error) {
            console.log("Server error.", error);
        }
    };

    return (
        <div className="edit-contact-form">
            <h1>Contact Info</h1>
            <form action="" onSubmit={handleSubmit}>
                {
                    currentTemplateData.AllSections[1].sectionVisible ?
                        <>
                            {/* <label><i class="fa-solid fa-pen-to-square"></i>Contact Details</label> */}
                            <input type="text" name="sectionName" value={currentTemplateData.AllSections[1].sectionName} onChange={(e) => ChangeSectionValue(e, 1)} placeholder='Section name' />
                        </> : <></>
                }
                {currentTemplateData.AllSections[1].list.map((element) => {

                    return (
                        <>
                            <div className="social-media">
                                <i id='brandIcon' className={element.iconName} onClick={() => setIsIcon(element.listId)}></i>
                                <input type="text" name="contactName" value={element.contactName} onChange={(e) => ChangeListValue(e, 1, element.listId)} placeholder="your@contact" />
                                <i id='brandIcon' className='fa-solid fa-trash' onClick={() => DeleteItem(1, element.listId)}></i>
                            </div>
                            {isIcon === element.listId ? <IconPopup cutPopup={() => setIsIcon("")} iconId={element.listId} iconClass={element.iconName} /> : <></>}
                        </>
                    )
                })}
                <div className="save-section">
                    <a onClick={() => AddItem(1, objectData)}><i className='fa-solid fa-plus'></i> Add Section </a>
                    <button type='submit'>Save and Next</button>
                </div>
            </form>
        </div>
    )
}
