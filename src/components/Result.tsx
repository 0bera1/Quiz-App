interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function Result({ score, totalQuestions, onRestart }: ResultProps) {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage === 100) return 'Mükemmel!';
    if (percentage >= 70) return 'Çok İyi!';
    if (percentage >= 50) return 'İyi!';
    return 'Daha İyisini Yapabilirsin!';
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Quiz Tamamlandı!</h2>
      
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="text-6xl font-bold text-primary mb-4">
          {score}/{totalQuestions}
        </div>
        <p className="text-xl font-semibold text-gray-600 mb-2">
          {getMessage()}
        </p>
        <p className="text-gray-500">
          Toplam Doğru: {score} / {totalQuestions}
        </p>
        <p className="text-gray-500">
          Başarı Oranı: %{percentage.toFixed(0)}
        </p>
      </div>

      <button
        onClick={onRestart}
        className="btn-primary w-full max-w-xs mx-auto"
      >
        Tekrar Dene
      </button>
    </div>
  );
} 