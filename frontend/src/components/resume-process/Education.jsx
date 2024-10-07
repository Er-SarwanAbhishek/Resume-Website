import React, { useContext , useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/education.css'
import SaveAlert from '../alerts/SaveAlert';
import { AiTextPopup } from '../popup/AiTextPopup';

export default function JobExp() {
  const [aiTextSuggestion , setAiTextSuggestion] = useState(false);
  const { currentTemplateData, DeleteItem, AddItem, ChangeListValue, ChangeSectionValue, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
  const index = 5;
  const { sectionName, list } = currentTemplateData.AllSections[index];
  const navigate = useNavigate();
  const objectData = {
    listId: new Date().getTime().toString(),
    collegeName: "College Name",
    course: "Your course",
    startDate: "10-12-2020",
    endDate: "12-12-2020",
    aboutEducation: "Description"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authtoken) {
        localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
        navigate('/edit-resume/job-exp');
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
      navigate('/edit-resume/job-exp');
    } catch (error) {
      console.log("Server error.", error);
    }
  };
const handleTextChange = (newText,listId)=>{
  ChangeListValue({target:{name:'aboutEducation',value:newText}},index,listId)
  setAiTextSuggestion(false);
}
  return (
    <div className="education-form">
      <h1>Education</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className='education-form-edit-section'>
          <input id="education-section-name" type="text" name="sectionName" value={sectionName} placeholder='Section Name' onChange={(e) => ChangeSectionValue(e, index)} required />
        </div>
        {list.map((element) => {
          const { listId, collegeName, course, startDate, endDate, aboutEducation } = element;

          return (
            <div key={listId}>
              <div className="education-form-datepic-monthdate-input">

                <div className='education-form-label-section'>
                  <input class='education-section' type="text" name="collegeName" value={collegeName} onChange={(e) => ChangeListValue(e, index, listId)} placeholder='College Name' required />
                </div>
                <div className='education-form-label-section'>

                  <input class='education-section' type="text" name="course" value={course} onChange={(e) => ChangeListValue(e, index, listId)} placeholder='Education Role' required />
                </div>
              </div>
              <div className='education-form-section-pic-date'>
                <div className="education-form-datepic-monthdate">  
                  <input className="education-select-option" type="date" value={startDate} onChange={(e) => ChangeListValue(e, index, listId)} name='startDate' />
                </div>
                <div className="education-form-datepic">    
                  <input className="education-select-option" type="date" value={endDate} onChange={(e) => ChangeListValue(e, index, listId)} name='endDate' />
                </div>
              </div>
              <div className="education-textarea-delete-section">
        
                <textarea type="text" name="aboutEducation" 
                value={aboutEducation}
                 onChange={(e) => ChangeListValue(e, index, listId)}
                  placeholder='Education Details' required />
                   <img  className='ai-text-suggestion-img'
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"  
                  alt="AI Suggestion" 
                  title='Generate text'
                  draggable="false"
                  onClick={() => setAiTextSuggestion(listId)} 
                />
                 {aiTextSuggestion === listId && (
                  <AiTextPopup
                    prompt={aboutEducation} 
                    cancel={() => setAiTextSuggestion(false)} 
                    onTextChange={(newText) => handleTextChange(newText, listId)} 
                  />
                )}
              </div>

              <div className='education-del-add-button'>
                <hr />
                <a onClick={() => DeleteItem(index, listId)} ><i className='fa-solid fa-trash'></i></a>
              </div>
            </div>


          )
        })}
        <div className="edu-add-button">
          <a onClick={() => AddItem(index, objectData)}><i className='fa-solid fa-plus'></i> Add Section</a>
        </div>
        <div className='education-save-button'>
          <button type='submit'>Save and Next</button>
        </div>
      </form>
    </div>

  )
}
