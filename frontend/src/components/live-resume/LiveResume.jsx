import React, { useContext, useEffect, useState } from 'react'
import { TemplateData } from '../templates/TemplateData';
import { useParams } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import './LiveResume.css';
import Error from '../pages/Error';

export default function LiveResume() {
    const { liveTempId } = useParams();
    const [templateData, setTemplateData] = useState(null);
    const { backServer } = useContext(GlobalContext);

    //FETCHDATA
    useEffect(() => {
        try {
            const getAllUsersTemp = async () => {
                const response = await fetch(`${backServer}/live/live-templates`, {
                    method: 'POST',
                    body: JSON.stringify({ liveTempId }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const responseJson = await response.json();
                if (!responseJson.success) {
                    setTemplateData(false);
                    return;
                }
                setTemplateData(responseJson.tempData);
            }

            getAllUsersTemp();
        } catch (err) {
            console.log("There is some errors in QR code: ", err);
        }
    }, [])

    return (
        <>
            {
                !templateData ? <Error /> :
                <div className="live-resume-preview-wrapper">
                    <div className="resume-wrapper">
                        {TemplateData.map((element) => {
                            if (element.id === templateData.id) {
                                return <element.element resumeData={templateData} />;
                            }
                            return <></>
                        })}
                    </div>
                    </div>
            }
        </>
    )
}
