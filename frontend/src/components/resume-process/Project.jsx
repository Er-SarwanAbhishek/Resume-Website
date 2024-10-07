import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/project.css';
import SaveAlert from '../alerts/SaveAlert';
import { AiTextPopup } from '../popup/AiTextPopup';

export default function Project() {
  const [aiTextSuggestion, setAiTextSuggestion] = useState(false);
  const { currentTemplateData, DeleteItem, AddItem, ChangeListValue, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
 const index = 2;
  const { sectionName, list } = currentTemplateData.AllSections[index];
  const navigate = useNavigate();

  const objectData = {
    listId: new Date().getTime().toString(),
    projectName: "Project name",
    startDate: "10-12-2020",
    endDate: "12-12-2020",
    aboutProject: "Description"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authtoken) {
        localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
        navigate('/edit-resume/skills');
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
      localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
      navigate('/edit-resume/skills');
    } catch (error) {
      console.log("Server error.", error);
    }
  };

  const handleTextChange = (newText,listId)=>{
    ChangeListValue({target:{name:'aboutProject',value:newText}},index,listId)
    setAiTextSuggestion(false);
  }

  return (
    <div className="project-form">
      <h1>Projects</h1>
      <form onSubmit={handleSubmit}>
        <div className='project-form-edit-section'>
          <input 
            id="section-name-a" 
            type="text" 
            name="sectionName" 
            value={sectionName} 
            placeholder='Section name' 
            onChange={(e) => ChangeSectionValue(e, 2)} 
          />
        </div>
        {list.map((element) => {
          const { listId, projectName, startDate, endDate, aboutProject } = element;
          return (
            <div className='project-number-box' key={listId}>
              <input 
                id="section-name" 
                type="text" 
                name="projectName" 
                value={projectName} 
                placeholder='Project name' 
                onChange={(e) => ChangeListValue(e, index, listId)} 
              />
              <div className='project-form-section-pic-date'>
                <div className="project-form-datepic-monthdate">
                  <input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => ChangeListValue(e, index, listId)} 
                    name='startDate' 
                  />
                </div>
                <div className="project-form-datepic">
                  <input 
                    className="select-option" 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => ChangeListValue(e, index, listId)} 
                    name='endDate' 
                  />
                </div>
              </div>
              <div className="project-textarea-delete-section">
                <textarea  type="text" 
                  name="aboutProject" 
                  value={aboutProject} 
                  onChange={(e) => ChangeListValue(e, index, listId)} 
                  placeholder='Description' 
                />
                <img 
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"  
                  alt="AI Suggestion" className='ai-text-suggestion-img'
                  title='Generate text'
                  draggable="false"
                  onClick={() => setAiTextSuggestion(listId)} 
                />
                {aiTextSuggestion === listId && (
                  <AiTextPopup 
                    prompt={aboutProject} 
                    cancel={() => setAiTextSuggestion(false)} 
                    onTextChange={(newText) => handleTextChange(newText, listId)} 
                  />
                )}
              </div>
              <div className='project-form-del-add-button'>
                <hr />
                <i className='fa-solid fa-trash' onClick={() => DeleteItem(index, listId)}></i>
              </div>
            </div>
          )
        })}
        <div className="project-form-add">
          <a onClick={() => AddItem(index, objectData)}>
            <i className='fa-solid fa-plus'></i> Add Section
          </a>
        </div>
        <div className='project-next-button'>
          <button type='submit'>Save and Next</button>
        </div>
      </form>
    </div>
  );
}
