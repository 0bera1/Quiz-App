interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

export default function ProgressBar({ current, total, score }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          Soru {current + 1}/{total}
        </span>
        <span className="text-sm font-medium">
          Skor: {score}
        </span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full">
        <div
          className="h-2.5 bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
} 