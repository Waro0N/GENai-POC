interface PromptCardProps {
  prompt: string;
  handleSend: (prompt: string) => void;
}

const PromptCards: React.FC<PromptCardProps> = ({ prompt, handleSend }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={() => handleSend(prompt)}>
      {prompt}
    </div>
  );
};

export default PromptCards;
