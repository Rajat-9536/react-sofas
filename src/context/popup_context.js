// PopUpContext.js
import React, { createContext, useState, useContext } from "react";

const PopUpContext = createContext();

export const usePopUpContext = () => useContext(PopUpContext);

export const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");

  const showPopUpMessage = (message) => {
    setShowPopUp(true);
    setPopUpMessage(message);

    // Automatically hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopUp(false);
      setPopUpMessage("");
    }, 3000);
  };

  return (
    <PopUpContext.Provider
      value={{ showPopUp, popUpMessage, showPopUpMessage }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
