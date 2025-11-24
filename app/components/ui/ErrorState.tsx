"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />

      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Something went wrong
      </h2>

      <p className="text-slate-500 mb-6">
        {message || "An unexpected error occurred."}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
