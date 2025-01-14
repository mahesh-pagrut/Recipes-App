"use client"

import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 mb-6 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition"
    >
      ← Back
    </button>
  );
};

export default Back