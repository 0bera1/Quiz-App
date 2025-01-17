import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizState {
  currentQuestion: number;
  score: number;
  showResult: boolean;
  answers: number[];
  questions: Question[];
}

type QuizAction =
  | { type: 'LOAD_QUESTIONS'; payload: Question[] }
  | { type: 'NEXT_QUESTION' }
  | { type: 'CHECK_ANSWER'; payload: number }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentQuestion: 0,
  score: 0,
  showResult: false,
  answers: [],
  questions: []
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | undefined>(undefined);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        questions: action.payload
      };
    case 'NEXT_QUESTION':
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextQuestion,
        showResult: nextQuestion >= state.questions.length
      };
    case 'CHECK_ANSWER':
      const isCorrect = state.questions[state.currentQuestion].correctAnswer === action.payload;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        answers: [...state.answers, action.payload]
      };
    case 'RESET_QUIZ':
      return {
        ...initialState,
        questions: state.questions
      };
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
} 