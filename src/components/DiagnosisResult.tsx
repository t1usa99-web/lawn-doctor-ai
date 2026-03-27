'use client';

interface DiagnosisData {
  diagnosis: string;
  severity: 'low' | 'moderate' | 'severe';
  issues: string[];
  recommendations: string[];
  quickTips: string[];
}

interface Props {
  data: DiagnosisData;
  image: string;
  onReset: () => void;
}

const severityConfig = {
  low: {
    label: 'Low Severity',
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: '✓',
  },
  moderate: {
    label: 'Moderate',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    icon: '⚠',
  },
  severe: {
    label: 'Severe',
    color: 'bg-red-100 text-red-800 border-red-200',
    icon: '!',
  },
};

export default function DiagnosisResult({ data, image, onReset }: Props) {
  const severity = severityConfig[data.severity] || severityConfig.moderate;

  return (
    <div className="space-y-4">
      {/* Image + Severity Badge */}
      <div className="diagnosis-card">
        <div className="relative rounded-xl overflow-hidden mb-4">
          <img src={image} alt="Analyzed lawn" className="w-full max-h-[300px] object-cover rounded-xl" />
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold border ${severity.color}`}>
            {severity.icon} {severity.label}
          </div>
        </div>

        {/* Diagnosis Summary */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">Diagnosis</h3>
        <p className="text-gray-700 leading-relaxed">{data.diagnosis}</p>
      </div>

      {/* Issues Found */}
      {data.issues.length > 0 && (
        <div className="diagnosis-card">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Issues Identified
          </h3>
          <ul className="space-y-2">
            {data.issues.map((issue, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1.5 w-2 h-2 bg-red-400 rounded-full shrink-0" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recommendations */}
      {data.recommendations.length > 0 && (
        <div className="diagnosis-card">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-lawn-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recommended Treatments
          </h3>
          <ol className="space-y-3">
            {data.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-lawn-green rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                {rec}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Quick Tips */}
      {data.quickTips.length > 0 && (
        <div className="diagnosis-card bg-green-50/50">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Quick Tips
          </h3>
          <ul className="space-y-2">
            {data.quickTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-yellow-500 mt-0.5">💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Try Again Button */}
      <div className="text-center pt-4">
        <button onClick={onReset} className="btn-primary">
          Diagnose Another Photo
        </button>
      </div>
    </div>
  );
}
