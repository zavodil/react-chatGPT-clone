import React from "react";

const NewChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        setChatLog([]);
        setShowMenu(false);
      }}
    >
      <span>+</span>
      Reset chat
    </div>
  );
};

export default NewChat;
