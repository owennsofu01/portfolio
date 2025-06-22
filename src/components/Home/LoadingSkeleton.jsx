import { COLORS } from "../../constants/colors";

export const LoadingSkeleton = () => {
  return (
    <div
      className="animate-pulse flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primaryMedium}, ${COLORS.primaryDark})`,
      }}
    >
      <div
        className="rounded-2xl sm:rounded-3xl backdrop-blur-lg shadow-xl p-6 sm:p-8 md:p-10 flex-1 max-w-4xl w-full space-y-6 sm:space-y-8"
        style={{
          background: COLORS.cardBg,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        {/* Title placeholder */}
        <div
          className="h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl max-w-full sm:max-w-3xl mx-auto lg:mx-0 relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${COLORS.skeletonDark}, ${COLORS.skeletonLight}, ${COLORS.skeletonDark})`,
          }}
        >
          <div
            className="absolute inset-0 transform -translate-x-full animate-shimmer"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.white}66, transparent)`,
            }}
          ></div>
        </div>
        {/* Subtitle placeholder */}
        <div
          className="h-6 sm:h-7 md:h-8 rounded-md sm:rounded-lg max-w-full sm:max-w-xl mx-auto lg:mx-0 relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${COLORS.skeletonDark}, ${COLORS.skeletonLight}, ${COLORS.skeletonDark})`,
          }}
        >
          <div
            className="absolute inset-0 transform -translate-x-full animate-shimmer delay-150"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.white}66, transparent)`,
            }}
          ></div>
        </div>
        {/* Paragraph placeholder */}
        <div className="space-y-3 sm:space-y-4 max-w-full sm:max-w-2xl mx-auto lg:mx-0">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`h-3 sm:h-4 rounded-md relative overflow-hidden ${
                i === 2 ? "max-w-full sm:max-w-xl" : "max-w-full"
              }`}
              style={{
                background: `linear-gradient(90deg, ${COLORS.skeletonDark}, ${COLORS.skeletonLight}, ${COLORS.skeletonDark})`,
              }}
            >
              <div
                className={`absolute inset-0 transform -translate-x-full animate-shimmer delay-${150 * (i + 2)}`}
                style={{
                  background: `linear-gradient(90deg, transparent, ${COLORS.white}66, transparent)`,
                }}
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
