import styles from "./answer.module.css";

interface AnswerLoadingProps {
  lodingMessage: string;
}

const AnswerLoading: React.FC<AnswerLoadingProps> = ({ lodingMessage }) => {
  return (
    <>
      <div className={styles.answerContainer}>
        <p className={styles.answerText}>{lodingMessage}</p>
      </div>
    </>
  );
};

export default AnswerLoading;
