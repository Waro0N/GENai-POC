import ExampleCard from "./exampleCard";
import styles from "./exampleCard.module.css";

interface ExampleQuestionProps {
  handleCardQuestions: (question: string) => void;
}

const ExampleQuestion: React.FC<ExampleQuestionProps> = ({
  handleCardQuestions,
}) => {
  const questions = [
    {
      key: "This is Question",
      value: "This is Question",
    },
    {
      key: "This is Question",
      value: "This is Question",
    },
  ];

  return (
    <>
      <div className={styles.cardContainer}>
        {questions.map((value, index) => (
          <div onClick={() => handleCardQuestions(value.value)}>
            <ExampleCard question={value.value} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExampleQuestion;
