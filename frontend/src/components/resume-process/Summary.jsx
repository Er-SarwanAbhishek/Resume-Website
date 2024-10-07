import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/summary.css';
import SaveAlert from '../alerts/SaveAlert';
import { AiTextPopup } from '../popup/AiTextPopup';

export default function Summary() {
    const [aiTextSuggestion, setAiTextSuggestion] = useState(false);
    const { currentTemplateData, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!authtoken) {
                localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
                navigate('/edit-resume/contact-info');
                return;
            }

            await fetch(`${backServer}/dashboard/update-templates`, {
                method: "POST",
                body: JSON.stringify(currentTemplateData),
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authtoken
                }
            });
            setIsSaveData(<SaveAlert status={"show"} alertMsg={"All changes saved"}/>);
            setTimeout(() => {
                setIsSaveData(<SaveAlert status={"hide"} alertMsg={"All changes saved"}/>);
            }, 800);
            // Also save in local storage
            localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
            navigate('/edit-resume/contact-info');
        } catch (error) {
            console.log("Server error.", error);
        }
    };

    const handleTextChange = (newText) => {
        // Update the summary in currentTemplateData
        ChangeSectionValue({ target: { name: 'summary', value: newText } }, 0);
        setAiTextSuggestion(false); // Close the popup after selecting the text
    };

    return (
        <div className='summary-form'>
            <h1>Summary</h1>
            <form onSubmit={handleSubmit}>
                <div className="summary-form-name">
                    <input 
                        type="text" 
                        name="sectionName" 
                        value={currentTemplateData.AllSections[0].sectionName} 
                        onChange={(e) => ChangeSectionValue(e, 0)} 
                        required 
                        placeholder='About me' 
                    />
                </div>
                <div className="summary-form-textarea">
                    <textarea 
                        name="summary" 
                        value={currentTemplateData.AllSections[0].summary} 
                        onChange={(e) => ChangeSectionValue(e, 0)} 
                        required 
                        placeholder='summary' 
                    />
                    <img 
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"  
                        alt="AI Suggestion" draggable="false"  title='Generate text' className='ai-text-suggestion-img'
                        onClick={() => setAiTextSuggestion(true)} 
                    />
                    {aiTextSuggestion && (
                        <AiTextPopup 
                            prompt={currentTemplateData.AllSections[0].summary} 
                            cancel={() => setAiTextSuggestion(false)} 
                            onTextChange={handleTextChange} 
                        />
                    )}
                </div>
                <div className="summary-next-button">
                    <button type='submit'>Save and Next</button>
                </div>
            </form>
        </div>
    );
}
