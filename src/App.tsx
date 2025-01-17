import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Quiz Uygulaması
            </h1>
            <p className="text-gray-600 mt-2">
              Bilgini test et!
            </p>
          </header>

          <main>
            <Quiz />
          </main>
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;
