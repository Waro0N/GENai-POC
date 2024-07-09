import styles from "./answer.module.css";

interface AnswerProps {
  answer: string;
}

const Answers: React.FC<AnswerProps> = ({ answer }) => {
  return (
    <>
      <div className={styles.answerContainer}>
        <p>{answer}</p>
      </div>
    </>
  );
};

export default Answers;
