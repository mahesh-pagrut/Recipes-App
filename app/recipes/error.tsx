// app/error.tsx

"use client"; // Must be a client component to handle errors

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        We encountered an error while loading this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-black text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  );
}
