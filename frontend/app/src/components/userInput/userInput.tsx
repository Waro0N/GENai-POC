import { useState } from "react";
import styles from "./userInput.module.css";

interface InputProps {
  handleSend: (question: string) => void;
}

const UserInput: React.FC<InputProps> = ({ handleSend }) => {
  const [question, setQuestion] = useState("");

  return (
    <>
      <div className={styles.InputContainer}>
        <textarea
          className={styles.userInput}
          placeholder="Type Your Question"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <span
          style={{ cursor: "pointer", color: "white" }}
          onClick={() => handleSend(question)}
          className="material-symbols-outlined"
        >
          send
        </span>
      </div>
    </>
  );
};

export default UserInput;
