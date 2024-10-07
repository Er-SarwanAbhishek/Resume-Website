import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../Resume-process-css/personaldetails.css';
import SaveAlert from '../alerts/SaveAlert';

export default function PersonalDetails() {
    const { currentTemplateData, setCurrentTemplateData, authtoken, setIsSaveData, backServer } = useContext(GlobalContext);
    const [imgSrc, setImageSrc] = useState(currentTemplateData.profileImage);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCurrentTemplateData({ ...currentTemplateData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const imageSource = URL.createObjectURL(e.target.files[0]);
        setCurrentTemplateData({ ...currentTemplateData, [e.target.name]: imageSource });
        setImageSrc(imageSource);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!authtoken) {
                localStorage.setItem('currentTemplate', JSON.stringify(currentTemplateData));
                navigate('/edit-resume/summary');
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
            navigate('/edit-resume/summary');

        } catch (error) {
            console.log("Server error.", error);
        }
    };

    return (
        <div className='personal-details-form'>
            <h1>Personal Details</h1>
            <form onSubmit={handleSubmit}>
                {currentTemplateData.profileImage ? (
                    <div className='personal-details-upload-photo'>
                        <div className="profileImage" style={{ backgroundImage: `url(${imgSrc})` }}></div>
                        <label htmlFor='uploadProfilePic' className='photo-upload'>
                            <i className='fa-solid fa-arrow-up-from-bracket'></i>Upload Image
                        </label>
                        <input
                            type='file'
                            id='uploadProfilePic'
                            name='profileImage'
                            onChange={handleImageChange}
                            accept='image/*'
                        />
                    </div>
                ) : null}
                <div className='personal-details-name-desigantion'>
                    <div className='personal-details-name'>
                        <input
                            type='text'
                            name='userName'
                            value={currentTemplateData.userName}
                            onChange={handleChange}
                            required
                            placeholder='Name'
                        />
                    </div>
                    <div className='personal-details-name'>
                        <input
                            type='text'
                            name='userJobRole'
                            value={currentTemplateData.userJobRole}
                            onChange={handleChange}
                            required
                            placeholder='Job Role'
                        />
                    </div>
                </div>
                <div className='personal-details-Next-button'>
                    <button type='submit'>Save and Next</button>
                </div>
            </form>
        </div>
    );
}
