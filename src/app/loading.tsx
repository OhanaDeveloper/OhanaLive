export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-400 font-light">Loading...</p>
      </div>
    </div>
  )
}
