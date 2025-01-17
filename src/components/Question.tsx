import { useState, useEffect } from 'react';
import Options from './Options';

interface QuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  onAnswer: (answer: number) => void;
}

export default function Question({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowExplanation(false);
  }, [question]);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);
    onAnswer(index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
      
      <Options
        options={options}
        selectedOption={selectedOption}
        correctAnswer={showExplanation ? correctAnswer : null}
        onOptionSelect={handleOptionSelect}
        disabled={showExplanation}
      />

      {showExplanation && (
        <div className={`p-4 rounded-lg mt-4 ${
          selectedOption === correctAnswer
            ? 'bg-success/10 text-success'
            : 'bg-error/10 text-error'
        }`}>
          <p className="font-medium">
            {selectedOption === correctAnswer ? 'Doğru!' : 'Yanlış!'}
          </p>
          <p className="mt-2 text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  );
} 