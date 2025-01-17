interface OptionsProps {
  options: string[];
  selectedOption: number | null;
  correctAnswer: number | null;
  onOptionSelect: (index: number) => void;
  disabled: boolean;
}

export default function Options({
  options,
  selectedOption,
  correctAnswer,
  onOptionSelect,
  disabled
}: OptionsProps) {
  const getOptionClass = (index: number) => {
    const baseClass = 'quiz-option';
    
    if (disabled && correctAnswer !== null) {
      if (index === correctAnswer) {
        return `${baseClass} quiz-option-correct`;
      }
      if (index === selectedOption) {
        return `${baseClass} quiz-option-wrong`;
      }
    }
    
    if (index === selectedOption) {
      return `${baseClass} quiz-option-selected`;
    }
    
    return baseClass;
  };

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <button
          key={index}
          className={getOptionClass(index)}
          onClick={() => !disabled && onOptionSelect(index)}
          disabled={disabled}
          aria-disabled={disabled}
        >
          {option}
        </button>
      ))}
    </div>
  );
} 