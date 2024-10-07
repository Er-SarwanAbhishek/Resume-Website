import React, { useContext, useEffect, useState } from 'react';
import './MyTemplate.css';
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import { TemplateData } from '../templates/TemplateData';
import ResumePreviewpopup from '../popup/ResumePreviewpopup';

export default function MyTemplate() {

    const { authtoken, backServer } = useContext(GlobalContext);
    const [myTemplates, setMyTemplates] = useState("");
    const [isPrevTemplate, setIsPrevTemplate] = useState(false);

    // LOGGEDIN USER DETAILS
    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                if (!authtoken) return;

                const response = await fetch(`${backServer}/user/templates`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': authtoken
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const fetchedData = await response.json();
                setMyTemplates(fetchedData.templates);
                console.log(fetchedData);
            } catch (err) {
                console.error('There was an error fetching user data:', err);
            }
        };

        fetchTemplates();
    }, [authtoken]);

    //DELETE TEMPLATE
    const DeleteTemplate = async (tempId) => {
        try {
            await fetch(`${backServer}/dashboard/delete-templates`, {
                method: 'DELETE',
                body: JSON.stringify({ tempId }),
                headers: {
                    'auth-token': authtoken,
                    'Content-Type': 'application/json'
                }
            });
            window.location.reload();

        } catch (error) {
            console.log("Error on deleting templates.", error);
        }
    }

    //EDIT TEMPLATE
    const EditTemplate = (element) => {
        localStorage.removeItem('currentTemplate');
        localStorage.setItem('currentTemplate', JSON.stringify(element));
        window.location.href = "/edit-resume";
    }

    return (
        <div className="my-template">
            {/* POPUPS */}
            {isPrevTemplate ? <ResumePreviewpopup element={isPrevTemplate[0]} cancel={() => setIsPrevTemplate(false)} useTemp={true} funcUseTemp={() => EditTemplate(isPrevTemplate[1])} /> : <></>}

            <div className="my-template-row">
                <h2 className="heading">My templates</h2>

                <div className="all-templates">
                    {
                        myTemplates.length === 0 ?
                            <div className="default-msg">
                                <h4>There are no any templates, please choose from here</h4>
                                <Link to="/templates">Choose Templates</Link>
                            </div>
                            :
                            myTemplates.map((template, index) => {

                                const { liveTempId, id } = template;
                                return (
                                    <div className="temp-box" key={index}>
                                        <i className="fa-regular fa-trash-can delete-temp" onClick={() => DeleteTemplate(liveTempId)}></i>


                                        {TemplateData.map(elem => {
                                            return elem.id === id ?
                                                <>
                                                    <div className="resume-prev">
                                                        <elem.element resumeData={template} />
                                                    </div >

                                                    <button className="prev-btn" onClick={() => setIsPrevTemplate([<elem.element resumeData={template} />, template])}>Preview template</button>
                                                    <button className="use-btn" onClick={() => EditTemplate(template)}>Use template</button>
                                                </>
                                                :
                                                <></>
                                        })}
                                    </div>
                                )
                            })
                    }
                </div>
            </div >
        </div >
    )
}
