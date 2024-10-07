import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import SaveAlert from '../alerts/SaveAlert';
import GetJob from "../../assets/blog-images/Get Job.jpg"
import { useGoogleLogin } from '@react-oauth/google';

export default function GlobalState(props) {

    const [currentTemplateData, setCurrentTemplateData] = useState(JSON.parse(localStorage.getItem('currentTemplate')));
    const backServer = "http://localhost:5000";
    const GoogleClientId = "519773979023-1h0hk6ruh0uhkjqlmlug6stnl13hckje.apps.googleusercontent.com";
    const authtoken = JSON.parse(localStorage.getItem('authtoken'));
    const [isSaveData, setIsSaveData] = useState(<SaveAlert />);
    const [errorDetails, setErrorDetails] = useState({ display: "none", message: "" });
    const liveTemplateURL = `http://localhost:3000/${authtoken ? currentTemplateData.liveTempId : ""}`;
    const [atsScoreGemini, setAtsScoreGemini] = useState('')
    const [isSidebarPop, setIsSidebarPop] = useState(false);

    const [blogPosts, setBlogPosts] = useState([
        { id: 1, title: 'Tailor Your CV to the Job', date: 'September 10, 2024', excerpt: 'One size does not fit all when it comes to CVs. Tailoring your CV to each job application is essential.', image: GetJob, postPath: "tailor" },
    ]);

    // GLOBAL FUNCTIONS

    const DeleteItem = (index, id) => {
        console.log(currentTemplateData)
        setCurrentTemplateData((prevData) => {
            const newData = { ...prevData };
            newData.AllSections[index].list = newData.AllSections[index].list.filter(item => item.listId !== id);
            return newData;
        })
    }

    const AddItem = (index, objectData) => {
        try {
            setCurrentTemplateData((prevData) => {
                const newData = { ...prevData };
                newData.AllSections[index].list = [...newData.AllSections[index].list, objectData];
                return newData;
            });
        } catch (err) {
            console.log(err);
        }
    }

    const ChangeListValue = (event, index, id) => {
        const { value, name } = event.target;
        setCurrentTemplateData((prevData) => {
            const newData = { ...prevData };
            newData.AllSections[index].list = newData.AllSections[index].list.map(item => {
                if (item.listId === id) {
                    return { ...item, [name]: value };
                }
                return item;
            });
            return newData;
        });
    }

    const ChangeSectionValue = (event, index) => {
        setCurrentTemplateData((prevData) => {
            const updateContact = { ...prevData };
            updateContact.AllSections[index] = { ...updateContact.AllSections[index], [event.target.name]: event.target.value };
            return updateContact;
        })
    }

    const HideOverflowOnPop = (isHide) => {
        isHide ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
    }

    //GOOGLE LOGIN FUNCTION
    const getUserData = async (accessToken) => {
        const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
        const options = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();

            // REACT -> NODE -> MONGODB
            const fetchingData = await fetch(`${backServer}/auth/google-signup`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

            const dataStatus = await fetchingData.json();
            localStorage.setItem('authtoken', JSON.stringify(dataStatus.authtoken))
            window.location.href = "/";
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorDetails({ display: "block", message: "Server error." });
        }

    };

    const GoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse => {
            getUserData(tokenResponse.access_token);
        }),
        onError: err => console.log("Google login error: ", err)
    });

    //SIGNUP BY EMAILS
    const SaveUserDetails = async (e, userCredential) => {
        e.preventDefault();
        try {

            if (userCredential.createPassword.length < 6) {
                setErrorDetails({ display: "block", message: "Your password must be 6 letters long." });
                return;
            }

            if (userCredential.createPassword !== userCredential.confirmPassword) {
                setErrorDetails({ display: "block", message: "Please check your password." });
                return;
            }

            // REACT -> NODE -> MONGODB
            const fetchingData = await fetch(`${backServer}/auth/email-signup`, {
                method: 'POST',
                body: JSON.stringify(userCredential),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

            const dataStatus = await fetchingData.json();
            if (!dataStatus.success) {
                setErrorDetails({ display: "block", message: dataStatus.message });
                return;
            }

            localStorage.setItem('authtoken', JSON.stringify(dataStatus.authtoken))
            window.location.href = "/";
        } catch (error) {
            console.log("There are some errors during submit: ", error);
            setErrorDetails({ display: "block", message: "Server error." });
        }
    }

    return (
        <GlobalContext.Provider value={{ currentTemplateData, setCurrentTemplateData, DeleteItem, AddItem, ChangeListValue, ChangeSectionValue, GoogleClientId, authtoken, isSaveData, setIsSaveData, SaveUserDetails, backServer, blogPosts, setBlogPosts, HideOverflowOnPop, GoogleLogin, errorDetails, setErrorDetails, liveTemplateURL, atsScoreGemini, setAtsScoreGemini, isSidebarPop, setIsSidebarPop }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
