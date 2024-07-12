import styles from "./exampleCard.module.css";

interface ExampleCardProps {
  question: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ question }) => {
  return (
    <>
      <div className={styles.card}>{question}</div>
    </>
  );
};

export default ExampleCard;
