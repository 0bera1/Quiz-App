import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Result from './Result';
import questionsData from '../data/questions.json';

export default function Quiz() {
  const { state, dispatch } = useQuiz();
  const { currentQuestion, questions, showResult, score } = state;

  useEffect(() => {
    dispatch({ type: 'LOAD_QUESTIONS', payload: questionsData.questions });
  }, [dispatch]);

  const handleAnswer = (answer: number) => {
    dispatch({ type: 'CHECK_ANSWER', payload: answer });
    
    // Kısa bir gecikme ile sonraki soruya geç
    setTimeout(() => {
      dispatch({ type: 'NEXT_QUESTION' });
    }, 2000);
  };

  const handleRestart = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  if (questions.length === 0) {
    return (
      <div className="text-center p-4">
        <p>Sorular yükleniyor...</p>
      </div>
    );
  }

  if (showResult) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestart}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ProgressBar
        current={currentQuestion}
        total={questions.length}
        score={score}
      />
      
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        correctAnswer={currentQuestionData.correctAnswer}
        explanation={currentQuestionData.explanation}
        onAnswer={handleAnswer}
      />
    </div>
  );
} 