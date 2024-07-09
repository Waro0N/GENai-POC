import styles from "./question.module.css";

interface QuestionProps {
  question: string;
}

const UserQuestion: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className={styles.questionContainer}>
      <span className={styles.text}>{question}</span>
    </div>
  );
};

export default UserQuestion;
