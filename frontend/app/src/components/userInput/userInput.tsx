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
        <input onChange={(e) => setQuestion(e.target.value)} type="text" />
        <span
          style={{ cursor: "pointer" }}
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
