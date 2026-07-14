import { motion } from "framer-motion";
import { COLORS } from "../../constants/colors";

// Main LoadingSkeleton Component
export const LoadingSkeleton = () => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: COLORS.accentTeal, opacity: 0.12 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: COLORS.lightBlue, opacity: 0.1 }}
          animate={{ scale: [1.15, 1, 1.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center gap-6 px-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Brand mark */}
        <div className="relative flex items-center justify-center w-20 h-20">
          <motion.span
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: COLORS.accentTeal }}
            animate={{ scale: [1, 1.35, 1.35], opacity: [0.7, 0, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <div
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.accentTeal}, ${COLORS.primaryTeal})`,
              boxShadow: `0 8px 30px ${COLORS.accentTeal}40`,
            }}
          >
            <span className="text-2xl font-extrabold text-white">ON</span>
          </div>
        </div>

        {/* Name & role */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
            Owen Nsofu
          </h1>
          <p className="mt-1 text-sm font-medium" style={{ color: COLORS.lightBlue }}>
            Full Stack &amp; Mobile Developer
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-48 h-1 rounded-full overflow-hidden bg-gray-700/60">
          <motion.div
            className="h-full w-1/3 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.accentTeal}, transparent)`,
            }}
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
