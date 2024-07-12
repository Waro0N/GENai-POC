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
      key: "Help me Analyze my data",
      value: "Help me Analyze my data",
    },
    {
      key: "Tell me the population analysis of India for last 10 years",
      value: "Tell me the population analysis of India for last 10 years",
    },
  ];

  return (
    <>
      <div className={styles.cardContainer}>
        {questions.map((value, index) => (
          <div key={index} onClick={() => handleCardQuestions(value.value)}>
            <ExampleCard question={value.value} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExampleQuestion;
