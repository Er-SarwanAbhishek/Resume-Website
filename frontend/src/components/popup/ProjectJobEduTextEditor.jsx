import ReactQuill from 'react-quill'; // Import the Quill component
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme
import './texteditor.css'

const ProjectJobEduTextEditor = ({ value, onChange }) => {

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
                onChange={onChange}
                modules={modules}
                theme="snow" // You can change the theme to "bubble" or keep "snow"
                placeholder="Description..."
            />
        </div>
    );
};

export default ProjectJobEduTextEditor;
