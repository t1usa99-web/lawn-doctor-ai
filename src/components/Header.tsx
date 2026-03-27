'use client';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-lawn-green rounded-xl flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Lawn Doctor <span className="text-lawn-green">AI</span>
          </h1>
          <p className="text-xs text-gray-500">Smart lawn diagnosis</p>
        </div>
      </div>
    </header>
  );
}
