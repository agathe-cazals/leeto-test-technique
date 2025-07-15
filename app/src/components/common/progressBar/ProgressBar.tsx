import { Text } from "../text/Text";

export type ProgressBarProps = {
  label?: string;
  total: number;
  progress: number;
};

export const ProgressBar = ({ total, progress, label }: ProgressBarProps) => {
  const percentage = total > 0 ? Math.min((progress / total) * 100, 100) : 0;

  return (
    <div className="w-full flex flex-col flex-1 gap-1">
      {label && (
        <Text color="secondary" size="sm" data-testid="test-label">
          {label}
        </Text>
      )}
      <div className="flex flex-row items-center gap-2">
        <div
          className="w-full bg-gray-300 h-1 rounded-md overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percentage)}
          aria-label="Progression des dépenses"
        >
          <div
            className="h-full bg-indigo-700 rounded-md"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <Text color="primary" size="xs">
          {`${Math.round(percentage)}%`}
        </Text>
      </div>
    </div>
  );
};

export default ProgressBar;
