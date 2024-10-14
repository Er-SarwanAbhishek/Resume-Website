import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill'; // Import the Quill component
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme
import GlobalContext from '../context/GlobalContext';
import './texteditor.css';

const MyEditor = ({ value }) => {
  const { setCurrentTemplateData } = useContext(GlobalContext);
  // const [content, setContent] = useState(''); // state to hold the content

  const handleModelChange = (newContent) => {
    setCurrentTemplateData((prevData) => {
      const updateContact = { ...prevData };
      updateContact.AllSections[0] = { ...updateContact.AllSections[0], summary: newContent };
      return updateContact;
    })
    console.log(newContent);

  };

  const modules = {
    toolbar: [
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
        'bold', 'italic', 'underline', { 'color': [] },
        'link',
      ]]
  };


  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleModelChange}
        modules={modules}
        theme="snow" // You can change the theme to "bubble" or keep "snow"
        placeholder="Description..."
      />
    </div>
  );
};

export default MyEditor;
