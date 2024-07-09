import * as THREE from "three";
import styles from "./chats.module.css";
import UserQuestion from "../../components/question/userQuestion";
import Answers from "../../components/answers/answer";

const Chat = () => {
  // calling of ai services

  return (
    <>
      <div className={styles.container}>
        <div></div>
        <div className={styles.chatContainer}>
          <UserQuestion question="Hi" />
          <div className={styles.answerContainer}>
            <Answers answer={"Hi! How can i help you?"} />
          </div>
        </div>
        <div className={styles.TextContainer}></div>
      </div>
    </>
  );
};

export default Chat;
