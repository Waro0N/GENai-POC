// import * as THREE from "three";
import axios from "axios";
import styles from "./chats.module.css";
import UserQuestion from "../../components/question/userQuestion";
import Answers from "../../components/answers/answer";
import UserInput from "../../components/userInput/userInput";
import { useRef, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import ExampleQuestion from "../../components/exampleCards.tsx/exampleQuestions";
import SideBar from "../../components/SideBAr/sideBar";
import Error from "../../components/answers/error";
import AnswerLoading from "../../components/answers/answerLoading";

interface Answers {
  question: string;
  answer: string;
}

const Chat = () => {
  const [ansStream, setAnswerStream] = useState<Answers[]>([]);
  const ref = useRef("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = (question: string) => {
    // calling of ai services
    if (question !== "") {
      ref.current = question;
      const payLoad = {
        question: question,
      };
      setLoading(true);
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
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          setError(e.message);
        });
    }
  };

  const handleNewChat = () => {
    setAnswerStream([]);
    ref.current = "";
  };

  return (
    <>
      <div className={styles.container}>
        <SideBar handleNewChat={handleNewChat} />

        <div className={styles.chatContainer}>
          <div className={styles.TopBarContainer}>
            <NavBar />
          </div>
          {ansStream.length > 0 ? (
            <div className={styles.chatItem}>
              <>
                {ansStream.map((value: Answers, index: number) => (
                  <>
                    <UserQuestion question={value.question} />
                    <div key={index} className={styles.answerContainer}>
                      <Answers answer={value.answer} />
                    </div>
                  </>
                ))}
              </>
            </div>
          ) : !ref.current && ansStream.length === 0 ? (
            <div className={styles.cardItem}>
              <ExampleQuestion handleCardQuestions={handleSend} />
            </div>
          ) : loading ? (
            <div className={styles.loading}>
              <UserQuestion question={ref.current} />
              <div className={styles.answerContainer}>
                <AnswerLoading lodingMessage="Processing..." />
              </div>
            </div>
          ) : error ? (
            <>
              <div className={styles.errorContainer}>
                <UserQuestion question={ref.current} />
                <div className={styles.answerContainer}>
                  <Error error={error} />
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          <div className={styles.TextContainer}>
            <UserInput handleSend={handleSend} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
