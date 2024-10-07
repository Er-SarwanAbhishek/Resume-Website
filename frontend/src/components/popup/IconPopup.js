import { useContext, useEffect, useRef, useState } from "react";
import "./IconPopup.css";
import GlobalContext from "../context/GlobalContext";


export default function IconPopup({ cutPopup, iconId, iconClass }) {
    const { setCurrentTemplateData } = useContext(GlobalContext);
    const [searchData, setSearchData] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const refPopupBox = useRef(null);

    const iconData = [
        {
            id: "01",
            class: "fa-solid fa-envelope",
            name: "mail",
        },
        {
            id: "02",
            class: "fa-regular fa-envelope",
            name: "mail",
        },
        {
            id: "03",
            class: "fa-light fa-envelope",
            name: "mail",
        },
        {
            id: "04",
            class: "fa-solid fa-envelopes",
            name: "mail",
        },
        {
            id: "05",
            class: "fa-regular fa-envelopes",
            name: "mail",
        },
        {
            id: "06",
            class: "fa-light fa-envelopes",
            name: "mail",
        },
        {
            id: "07",
            class: "fa-solid fa-envelope-circle-check",
            name: "mail",
        },
        {
            id: "08",
            class: "fa-regular fa-envelope-circle-check",
            name: "mail",
        },
        {
            id: "09",
            class: "fa-light fa-envelope-circle-check",
            name: "mail",
        },
        {
            id: "10",
            class: "fa-solid fa-circle-envelope",
            name: "mail",
        },

        {
            id: "11",
            class: "fa-regular fa-circle-envelope",
            name: "mail",
        },
        {
            id: "12",
            class: "fa-solid fa-at",
            name: "mail",
        },
        {
            id: "13",
            class: "fa-solid fa-address-book",
            name: "contact",
        },
        {
            id: "14",
            class: "fa-regular fa-address-book",
            name: "contact",
        },
        {
            id: "15",
            class: "fa-light fa-address-book",
            name: "contact",
        },
        {
            id: "16",
            class: "fa-solid fa-mobile",
            name: "mobile",
        },
        {
            id: "17",
            class: "fa-regular fa-mobile",
            name: "mobile",
        },
        {
            id: "18",
            class: "fa-light fa-mobile",
            name: "mobile",
        },
        {
            id: "19",
            class: "fa-solid fa-phone",
            name: "mobile phone",
        },
        ,
        {
            id: "20",
            class: "fa-regular fa-phone",
            name: "mobile phone",
        },
        {
            id: "21",
            class: "fa-light fa-phone",
            name: "mobile phone",
        },
        {
            id: "22",
            class: "fa-solid fa-circle-phone",
            name: "mobile phone",
        },
        ,
        {
            id: "23",
            class: "fa-regular fa-circle-phone",
            name: "mobile phone",
        },
        {
            id: "24",
            class: "fa-light fa-circle-phone",
            name: "mobile phone",
        },
        {
            id: "25",
            class: "fa-solid fa-location-dot",
            name: "location",
        },
        {
            id: "26",
            class: "fa-regular fa-location-dot",
            name: "location",
        },
        {
            id: "27",
            class: "fa-light fa-location-dot",
            name: "location",
        },
        {
            id: "28",
            class: "fa-solid fa-location-pin",
            name: "location",
        },
        {
            id: "29",
            class: "fa-regular fa-location-pin",
            name: "location",
        },
        {
            id: "30",
            class: "fa-light fa-location-pin",
            name: "location",
        },

        {
            id: "31",
            class: "fa-solid fa-thumbtack",
            name: "location",
        },
        {
            id: "32",
            class: "fa-regular fa-thumbtack",
            name: "location",
        },
        {
            id: "33",
            class: "fa-light fa-thumbtack",
            name: "location",
        },
        {
            id: "34",
            class: "fa-solid fa-globe-pointer",
            name: "website",
        },
        {
            id: "35",
            class: "fa-regular fa-globe-pointer",
            name: "website",
        },
        {
            id: "36",
            class: "fa-light fa-globe-pointer",
            name: "website",
        },
        {
            id: "37",
            class: "fa-solid fa-globe",
            name: "website",
        },
        ,
        {
            id: "38",
            class: "fa-regular fa-globe",
            name: "website",
        },
        ,
        {
            id: "39",
            class: "fa-light fa-globe",
            name: "website",
        },
        {
            id: "40",
            class: "fa-solid fa-link",
            name: "link",
        },
        {
            id: "41",
            class: "fa-regular fa-link",
            name: "link",
        },
        {
            id: "42",
            class: "fa-light fa-link",
            name: "link",
        },
        {
            id: "43",
            class: "fa-solid fa-up-right-from-square",
            name: "link",
        },
        {
            id: "44",
            class: "fa-regular fa-up-right-from-square",
            name: "link",
        },
        {
            id: "45",
            class: "fa-light fa-up-right-from-square",
            name: "link",
        },
        {
            id: "46",
            class: "fa-solid fa-code",
            name: "code",
        },
        {
            id: "47",
            class: "fa-regular fa-code",
            name: "code",
        },
        {
            id: "48",
            class: "fa-light fa-code",
            name: "code",
        },
        {
            id: "49",
            class: "fa-brands fa-square-git",
            name: "github",
        },
        {
            id: "50",
            class: "fa-brands fa-github-alt",
            name: "github",
        },
        {
            id: "51",
            class: "fa-brands fa-git-alt",
            name: "github",
        },
        {
            id: "52",
            class: "fa-brands fa-linkedin",
            name: "linkedin",
        },
        {
            id: "53",
            class: "fa-brands fa-linkedin-in",
            name: "linkedin",
        },
        {
            id: "54",
            class: "fa-brands fa-square-whatsapp",
            name: "whatsapp",
        },
        {
            id: "55",
            class: "fa-brands fa-whatsapp",
            name: "whatsapp",
        },
        {
            id: "56",
            class: "fa-brands fa-hackerrank",
            name: "hacker rank",
        },
        {
            id: "57",
            class: "fa-brands fa-twitter",
            name: "twitter",
        },
        {
            id: "58",
            class: "fa-brands fa-square-twitter",
            name: "twitter",
        },
        {
            id: "59",
            class: "fa-brands fa-x-twitter",
            name: "twitter",
        },
        {
            id: "60",
            class: "fa-brands fa-square-x-twitter",
            name: "twitter",
        },
        {
            id: "60",
            class: "fa-brands fa-pinterest",
            name: "pinterest",
        },
        {
            id: "62",
            class: "fa-brands fa-pinterest-p",
            name: "pinterest",
        },
        {
            id: "63",
            class: "fa-brands fa-square-pinterest",
            name: "pinterest",
        },
        {
            id: "64",
            class: "fa-solid fa-ranking-star",
            name: "rank",
        },
        {
            id: "65",
            class: "fa-regular fa-ranking-star",
            name: "rank",
        },
        {
            id: "66",
            class: "fa-light fa-ranking-star",
            name: "rank",
        },

    ];

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
        setCurrentTemplateData((prevData) => {
            const newData = { ...prevData };
            newData.AllSections[1].list = newData.AllSections[1].list.map((icon) => {
                if (icon.listId === iconId) {
                    return { ...icon, iconName: className };
                }
                return icon;
            });
            return newData;
        });
        iconClass === className ? alert("already") : cutPopup();
    };

    return (
        <div className="icon-popup common-pop-box" ref={refPopupBox}>
            <h2>Choose icons</h2>
            {/* CANCEL BUTTON */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={"none"}
                className="cancel-btn"
                onClick={cutPopup}
            >
                <path
                    d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <input
                type="text"
                value={searchValue}
                onChange={StoreSearchData}
                placeholder="Serach Icons"
            />
            <div className="icon-box">
                {iconData.map((icon) => {
                    return icon.name.includes(searchData) ? (
                        <i
                            key={icon.id}
                            className={icon.class}
                            onClick={() => IconChoosed(icon.class)}
                        ></i>
                    ) : (
                        <></>
                    );
                })}
            </div>
            <p>Some icons by FontAwesome, Entypo and Freepik</p>
        </div>
    );
}
