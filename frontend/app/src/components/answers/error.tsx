import styles from "./answer.module.css";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <div className={styles.errorContainer}>
        <p className={styles.answerText}>{error}</p>
        <span className="material-symbols-outlined">
          sentiment_very_dissatisfied
        </span>
      </div>
    </>
  );
};

export default Error;
