import React, { useContext, useState, useEffect, useRef } from "react";
import GlobalContext from "../context/GlobalContext";
import IconPopup from "../popup/IconPopup";
import { useNavigate } from "react-router-dom";
import "../Resume-process-css/Contact.css";
import SaveAlert from "../alerts/SaveAlert";

export default function ContactInfo() {
  const {
    currentTemplateData,
    DeleteItem,
    AddItem,
    ChangeListValue,
    ChangeSectionValue,
    authtoken,
    setIsSaveData,
    backServer,
  } = useContext(GlobalContext);

  const [activeIcon, setActiveIcon] = useState("");
  const [visibleLinkInput, setVisibleLinkInput] = useState(null);
  const [linkValue, setLinkValue] = useState("");
  const navigate = useNavigate();
  const refPopupBox = useRef(null);

  const closePopup = (e) => {
    if (refPopupBox.current && !refPopupBox.current.contains(e.target)) {
      setVisibleLinkInput(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closePopup, true);
    return () => {
      document.removeEventListener("click", closePopup, true);
    };
  }, []);

  const objectData = {
    listId: Date.now().toString(),
    iconName: "fa-solid fa-plus",
    contactName: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authtoken) {
      localStorage.setItem(
        "currentTemplate",
        JSON.stringify(currentTemplateData)
      );
      navigate("/edit-resume/project");
      return;
    }

    try {
      const response = await fetch(`${backServer}/dashboard/update-templates`, {
        method: "POST",
        body: JSON.stringify(currentTemplateData),
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });

      if (!response.ok) throw new Error("Failed to save changes");

      setIsSaveData(
        <SaveAlert status={"show"} alertMsg={"All changes saved"} />
      );
      setTimeout(
        () =>
          setIsSaveData(
            <SaveAlert status={"hide"} alertMsg={"All changes saved"} />
          ),
        800
      );
      localStorage.setItem(
        "currentTemplate",
        JSON.stringify(currentTemplateData)
      );
      navigate("/edit-resume/project");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const toggleLinkInput = (listId) => {
    setVisibleLinkInput(visibleLinkInput === listId ? null : listId);
  };

  const saveLink = (element) => {
    ChangeListValue({ target: { value: linkValue } }, 1, element.listId);
    setLinkValue("");
    setVisibleLinkInput(null);
  };

  return (
    <div className="edit-contact-form">
      <h1>Contact Info</h1>
      <form onSubmit={handleSubmit}>
        {currentTemplateData.AllSections[1].sectionVisible && (
          <input
            type="text"
            name="sectionName"
            value={currentTemplateData.AllSections[1].sectionName}
            onChange={(e) => ChangeSectionValue(e, 1)}
            placeholder="Section name"
          />
        )}
        {currentTemplateData.AllSections[1].list.map((element) => (
          <div key={element.listId} className="social-media">
            <i
              id="brandIcon"
              className={element.iconName}
              onClick={() => setActiveIcon(element.listId)}
            ></i>
            <input
              type="text"
              name="contactName"
              value={element.contactName}
              onChange={(e) => ChangeListValue(e, 1, element.listId)}
              placeholder="your@contact"
            />

            <i
              id="brandIcon-link"
              className="fa-solid fa-link"
              onClick={() => toggleLinkInput(element.listId)}
            ></i>

            <i
              id="brandIcon"
              className="fa-solid fa-trash"
              onClick={() => DeleteItem(1, element.listId)}
            ></i>

            {visibleLinkInput === element.listId && (
              <div className="additional-link-sec" ref={refPopupBox}>
                <p>Enter Link:</p>
                <input
                  type="text"
                  value={element.additionalLink}
                  onChange={(e) => ChangeListValue(e, 1, element.listId)}
                  name="additionalLink"
                  placeholder="https://careergennie.com/"
                />
                <button type="button" onClick={() => saveLink(element)}>
                  Save
                </button>
              </div>
            )}

            {activeIcon === element.listId && (
              <IconPopup
                cutPopup={() => setActiveIcon("")}
                iconId={element.listId}
                iconClass={element.iconName}
              />
            )}
          </div>
        ))}
        <div className="save-section">
          <a onClick={() => AddItem(1, objectData)}>
            <i className="fa-solid fa-plus"></i> Add Section
          </a>
          <button type="submit">Save and Next</button>
        </div>
      </form>
    </div>
  );
}
