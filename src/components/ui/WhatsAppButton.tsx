import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "260764670944";
const GREETING = "Hi Owen, I found your website and I'd like to talk about a project.";

/** Floating WhatsApp shortcut. Appears after a little scroll so it never covers the hero. */
export const WhatsAppButton = () => {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-5 right-5 z-40 flex items-center gap-3"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onMouseEnter={() => setHint(true)}
          onMouseLeave={() => setHint(false)}
        >
          <AnimatePresence>
            {hint && (
              <motion.span
                className="hidden sm:block px-3 py-2 rounded-lg bg-teal-950 text-white text-sm font-medium shadow-lg"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(GREETING)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Owen on WhatsApp"
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white flex items-center justify-center shadow-lg shadow-black/20 transition-colors"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping [animation-iteration-count:3] motion-reduce:hidden" />
            <FaWhatsapp size={28} className="relative" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
