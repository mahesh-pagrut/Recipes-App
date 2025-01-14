export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-8 border-t-4 border-black border-opacity-50"></div>
      </div>
    </div>
  );
}
