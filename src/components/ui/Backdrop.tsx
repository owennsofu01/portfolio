import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/*
 * Light-section backdrop inspired by a glowing hexagon lattice:
 *  1. soft blurred colour clouds that drift slowly (brand teal + light blue)
 *  2. a faint triangular/hexagon line grid with glowing nodes that drifts
 *     diagonally (CSS: .bg-hex in index.css)
 *  3. a few lattice points that twinkle at random (Twinkles)
 *  4. desktop only: a soft light follows the cursor and brightens the lattice
 *     near it (CSS: .bg-hex-bright, masked to a circle around the pointer)
 * Purely decorative: aria-hidden, no pointer events, stops for reduced motion.
 */

const clouds = [
  { className: "w-[520px] h-[520px] -top-40 -left-32 bg-teal-300/15", x: [0, 60, 0], y: [0, 40, 0], d: 26 },
  { className: "w-[460px] h-[460px] top-1/3 -right-40 bg-sky-300/12", x: [0, -50, 0], y: [0, 60, 0], d: 32 },
  { className: "w-[380px] h-[380px] -bottom-40 left-1/3 bg-teal-200/20", x: [0, 40, 0], y: [0, -40, 0], d: 28 },
];

const GLOW = 380; // px, diameter of the cursor light

const CursorLight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  // Springs give the light a gentle trailing feel
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement?.parentElement; // backdrop -> section
    if (!el || !section) return;

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = section.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    const enter = (e: PointerEvent) => e.pointerType === "mouse" && setActive(true);
    const leave = () => setActive(false);

    section.addEventListener("pointermove", move);
    section.addEventListener("pointerenter", enter);
    section.addEventListener("pointerleave", leave);
    return () => {
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerenter", enter);
      section.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  // Move the "spotlight" mask on the bright lattice without re-rendering
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      el.style.setProperty("--mx", `${sx.get()}px`);
      el.style.setProperty("--my", `${sy.get()}px`);
    };
    const a = sx.on("change", update);
    const b = sy.on("change", update);
    return () => { a(); b(); };
  }, [sx, sy]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* soft light under the cursor */}
      <motion.div
        className="absolute rounded-full bg-teal-300/35 blur-3xl"
        style={{ width: GLOW, height: GLOW, left: -GLOW / 2, top: -GLOW / 2, x: sx, y: sy }}
      />
      {/* brighter copy of the lattice, only visible around the cursor */}
      <div className="absolute inset-0 bg-hex-bright" />
    </motion.div>
  );
};

// Lattice geometry (must match the .bg-hex tile in index.css: 120 x 208)
const TILE_W = 120;
const TILE_H = 208;

/** Random lattice nodes inside a w x h area (plus one tile of margin for the drift) */
const pickNodes = (w: number, h: number, count: number) => {
  const nodes: { x: number; y: number }[] = [];
  for (let j = -1; j * TILE_H < h + TILE_H; j++) {
    for (let i = -1; i * TILE_W < w + TILE_W; i++) {
      nodes.push({ x: i * TILE_W, y: j * TILE_H });
      nodes.push({ x: i * TILE_W + TILE_W / 2, y: j * TILE_H + TILE_H / 2 });
    }
  }
  for (let k = nodes.length - 1; k > 0; k--) {
    const r = Math.floor(Math.random() * (k + 1));
    [nodes[k], nodes[r]] = [nodes[r], nodes[k]];
  }
  return nodes.slice(0, count).map((n) => ({
    ...n,
    duration: 2.4 + Math.random() * 1.8,   // how long one twinkle lasts
    delay: Math.random() * 6,             // when it first appears
    pause: 3 + Math.random() * 7,         // rest between twinkles
    size: Math.random() < 0.3 ? 5 : 3.5,  // a few slightly bigger "stars"
  }));
};

/** A handful of lattice points that softly brighten and fade, like stars */
const Twinkles = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const w = Math.round(e.contentRect.width / 200) * 200;  // ignore tiny resizes
      const h = Math.round(e.contentRect.height / 200) * 200;
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ~1 twinkle per 90k px², between 6 and 28 per section
  const nodes = useMemo(() => {
    if (!size.w || !size.h) return [];
    const count = Math.max(6, Math.min(28, Math.round((size.w * size.h) / 90000)));
    return pickNodes(size.w, size.h, count);
  }, [size]);

  return (
    <div ref={wrap} className="absolute inset-0 hex-fade">
      {/* moves exactly like the lattice background so points stay on the nodes */}
      <div className="absolute inset-0 hex-drift-move">
        {nodes.map((n, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-teal-400"
            style={{
              left: n.x - n.size / 2,
              top: n.y - n.size / 2,
              width: n.size,
              height: n.size,
              boxShadow: "0 0 8px 3px rgba(15,150,156,0.45), 0 0 18px 6px rgba(15,150,156,0.18)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1.15, 0.4] }}
            transition={{
              duration: n.duration,
              delay: n.delay,
              repeat: Infinity,
              repeatDelay: n.pause,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const LightBackdrop = () => {
  const reduce = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = () => setFinePointer(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl will-change-transform ${c.className}`}
          animate={{ x: c.x, y: c.y }}
          transition={{ duration: c.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-hex" />
      {!reduce && <Twinkles />}
      {finePointer && !reduce && <CursorLight />}
    </div>
  );
};
