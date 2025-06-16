export const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 md:px-20">
      <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 flex-1 max-w-4xl space-y-8">
        
        {/* Title placeholder */}
        <div className="h-14 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-xl max-w-3xl mx-auto md:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full animate-shimmer"></div>
        </div>
        
        {/* Subtitle placeholder */}
        <div className="h-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-lg max-w-xl mx-auto md:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full animate-shimmer delay-150"></div>
        </div>
        
        {/* Paragraph placeholder */}
        <div className="space-y-4 max-w-2xl mx-auto md:mx-0">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded-md bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 relative overflow-hidden ${
                i === 2 ? "max-w-xl" : "max-w-full"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full animate-shimmer delay-${
                  150 * (i + 2)
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.8s infinite;
        }
      `}</style>
    </div>
  );
};
