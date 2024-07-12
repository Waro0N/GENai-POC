import * as THREE from "three";
import axios from "axios";
import styles from "./chats.module.css";
import UserQuestion from "../../components/question/userQuestion";
import Answers from "../../components/answers/answer";
import UserInput from "../../components/userInput/userInput";
import { useState } from "react";
import NavBar from "../../components/navBar/navBar";

interface Answers {
  question: string;
  answer: string;
}
[];

const Chat = () => {
  const [ansStream, setAnswerStream] = useState<Answers[]>([]);
  console.log(ansStream);
  const handleSend = (question: string) => {
    // calling of ai services
    const payLoad = {
      question: question,
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/chat/", payLoad, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const newAnswer: Answers = {
          question: question,
          answer: res.data.answer,
        };
        setAnswerStream((prevAnswers) => [...prevAnswers, newAnswer]);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.TopBarContainer}>
          <NavBar />
        </div>
        <div className={styles.chatContainer}>
          {ansStream.length > 0 ? (
            <>
              {ansStream.map((value: Answers, index: number) => (
                <>
                  <UserQuestion question={value.question} />
                  <div className={styles.answerContainer}>
                    <Answers answer={value.answer} />
                  </div>
                </>
              ))}
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.TextContainer}>
          <UserInput handleSend={handleSend} />
        </div>
      </div>
    </>
  );
};

export default Chat;
