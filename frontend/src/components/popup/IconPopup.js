import { useContext, useEffect, useRef, useState } from 'react';
import './IconPopup.css';
import GlobalContext from '../context/GlobalContext';

export default function IconPopup({ cutPopup, iconId, iconClass }) {

    const { setCurrentTemplateData } = useContext(GlobalContext);
    const [searchData, setSearchData] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const refPopupBox = useRef(null);

    const iconData = [
        {
            id: "01",
            class: "fa-brands fa-apple",
            name: "apple"
        },
        {
            id: "03",
            class: "fa-regular fa-star",
            name: "half-star"
        },
        {
            id: "04",
            class: "fa-solid fa-shield-halved",
            name: "halved"
        },
        {
            id: "05",
            class: "fa-solid fa-shield",
            name: "shield"
        },
        {
            id: "06",
            class: "fa-regular fa-clipboard",
            name: "clipboard"
        },
        {
            id: "07",
            class: "fa-brands fa-linkedin",
            name: "linkedin"
        },
        {
            id: "08",
            class: "fa-brands fa-instagram",
            name: "instagram"
        },
        {
            id: "09",
            class: "fa-solid fa-key",
            name: "key"
        },
        {
            id: "10",
            class: "fa-solid fa-globe",
            name: "globe"
        },
        {
            id: "11",
            class: "fa-solid fa-users",
            name: "users"
        },
        {
            id: "12",
            class: "fa-brands fa-python",
            name: "python"
        },
        {
            id: "13",
            class: "fa-brands fa-whatsapp",
            name: "whatsapp"
        },
        {
            id: "14",
            class: "fa-brands fa-pinterest",
            name: "pinterest"
        },
        {
            id: "15",
            class: "fa-solid fa-trophy",
            name: "trophy"
        },
        {
            id: "16",
            class: "fa-solid fa-award",
            name: "award"
        },
        {
            id: "17",
            class: "fa-solid fa-envelope",
            name: "envelope"
        },
        {
            id: "18",
            class: "fa-solid fa-person",
            name: "person"
        },
        {
            id: "19",
            class: "fa-solid fa-phone",
            name: "phone"
        },
        {
            id: "20",
            class: "fa-solid fa-at",
            name: "at"
        },
        {
            id: "21",
            class: "fa-brands fa-windows",
            name: "windows"
        },
        {
            id: "22",
            class: "fa-solid fa-thumbs-up",
            name: "thumbs-up"
        },
        {
            id: "23",
            class: "fa-brands fa-twitter",
            name: "twitter"
        },
        {
            id: "24",
            class: "fa-solid fa-hashtag",
            name: "hashtag"
        },
        {
            id: "25",
            class: "fa-solid fa-book",
            name: "book"
        },
        {
            id: "26",
            class: "fa-solid fa-car",
            name: "car"
        },
        {
            id: "27",
            class: "fa-solid fa-sun",
            name: "sun"
        },
        {
            id: "28",
            class: "fa-regular fa-lightbulb",
            name: "lightbulb"
        },
        {
            id: "29",
            class: "fa-solid fa-comment",
            name: "comment"
        },
        {
            id: " 30",
            class: "fa-solid fa-user",
            name: "user"
        },
        {
            id: "31",
            class: "fa-brands fa-github",
            name: "github"
        },
        {
            id: "32",
            class: "fa-brands fa-youtube",
            name: "youtube"
        },
        {
            id: "33",
            class: "fa-solid fa-cloud",
            name: "cloud"
        },
        {
            id: "34",
            class: "fa-brands fa-wordpress",
            name: "wordpress"
        },
        {
            id: "35",
            class: "fa-solid fa-pen",
            name: "pen"
        },
        {
            id: "36",
            class: "fa-solid fa-desktop",
            name: "desktop"
        },
        {
            id: "38",
            class: "fa-solid fa-bicycle",
            name: "bicycle"
        },
        {
            id: "39",
            class: "fa-brands fa-react",
            name: "react"
        },
        {
            id: "40",
            class: "fa-solid fa-medal",
            name: "medal"
        },
        {
            id: "41",
            class: "fa-solid fa-comment",
            name: "comment"
        },
        {
            id: "42",
            class: "fa-brands fa-java",
            name: "java"
        },
        {
            id: "43",
            class: "fa-brands fa-linux",
            name: "linux"
        },
        {
            id: "44",
            class: "fa-brands fa-node",
            name: "node"
        },
        {
            id: "45",
            class: "fa-solid fa-location-dot",
            name: "location address"
        },

    ]


    const ClosePopup = (e) => {
        if (refPopupBox.current.contains(e.target)) {
            console.log("inside");
            return;
        }
        cutPopup();
        console.log("outside");
    };


    useEffect(() => {
        document.addEventListener("click", ClosePopup, true);
        return () => {
            document.removeEventListener("click", ClosePopup, true);
        };
    }, []);

    const StoreSearchData = (e) => {
        setSearchValue(e.target.value);
        // Clear any existing timeout
        clearTimeout(timeOutId);
        // Set a new timeout to update searchData after 300ms
        timeOutId = setTimeout(() => {
            setSearchData(e.target.value);
        }, 1000);
    };

    let timeOutId;

    const IconChoosed = (className) => {
        setCurrentTemplateData(prevData => {
            const newData = { ...prevData };
            newData.AllSections[1].list = newData.AllSections[1].list.map(icon => {
                if (icon.listId === iconId) {
                    return { ...icon, iconName: className };
                }
                return icon;
            })
            return newData;
        });
        iconClass === className ? alert("already") : cutPopup();
    };

    return (
        <div className="icon-popup common-pop-box" ref={refPopupBox}>
            <h2>Choose icons</h2>
            {/* CANCEL BUTTON */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"none"} className="cancel-btn" onClick={cutPopup}>
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="text" value={searchValue} onChange={StoreSearchData} placeholder="Serach Icons" />
            <div className="icon-box">
                {iconData.map((icon) => {
                    return (
                        icon.name.includes(searchData) ? <i key={icon.id} className={icon.class} onClick={() => IconChoosed(icon.class)}></i> : <></>
                    )
                })
                }
            </div>
            <p>Some icons by FontAwesome, Entypo and Freepik</p>
        </div>
    )
}
