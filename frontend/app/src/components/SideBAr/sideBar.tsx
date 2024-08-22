import React, { useState } from "react";
import styles from "./sideBAr.module.css";

interface SideBarProps {
  handleNewChat: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleNewChat }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.sideBarContainer} ${isOpen ? styles.open : styles.closed}`}>
        <span
          className="material-symbols-outlined"
          onClick={toggleSideBar}
          style={{ cursor: "pointer", color: "white" }}
        >
          arrow_circle_left
        </span>
        <div>
          <button onClick={handleNewChat} className={styles.newChatButton}>
            New Chat
          </button>
        </div>
      </div>
      {!isOpen && (
        <button onClick={toggleSideBar} className={styles.openSideBarButton}>
          <span
            className="material-symbols-outlined"
            style={{ cursor: "pointer", color: "white" }}
          >
            arrow_circle_right
          </span>
        </button>
      )}
    </>
  );
};

export default SideBar;
