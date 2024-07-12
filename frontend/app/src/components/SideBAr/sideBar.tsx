import styles from "./sideBAr.module.css";

interface SideBarProps {
  handleNewChat: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleNewChat }) => {
  return (
    <>
      <div className={styles.sideBarContainer}>
        <div>
          <button onClick={handleNewChat} className={styles.newChatButton}>
            New Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
