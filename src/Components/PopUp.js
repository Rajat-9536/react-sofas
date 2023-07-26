// PopUp.js
import React, { useContext } from "react";
import styled from "styled-components";
import { usePopUpContext } from "../context/popup_context";

const PopUp = ({name}) => {
  const { showPopUp, popUpMessage } = usePopUpContext();

  if (!showPopUp) {
    return null;
  }

  return <div className="pop-up"><span>Hello {name},</span> {popUpMessage}</div>;
};


export default PopUp;
