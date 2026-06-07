import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { styles } from "../styles";

/* ── Framer-motion variants ──────────────────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

/* ── Accent line (the vertical violet bar) ───────────────────────────── */
const AccentLine = () => (
  <div className="flex flex-col items-center mt-1">
    <div className="w-5 h-5 rounded-full bg-[#215eff] shadow-[0_0_12px_#215eff99]" />
    <div className="w-[2px] sm:h-72 h-52 violet-gradient opacity-80" />
  </div>
);

/* ── Small badge / status pill ───────────────────────────────────────── */
const AvailableBadge = () => (
  <motion.div
    variants={fadeIn}
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full
               border border-[#215eff44] bg-[#215eff11]
               text-[#215eff] text-xs font-medium tracking-widest uppercase
               mb-6 w-fit"
  >
    <span className="w-2 h-2 rounded-full bg-[#215eff] animate-pulse" />
    Available for work
  </motion.div>
);

/* ── Stat chips ──────────────────────────────────────────────────────── */
const stats = [
  { value: "3+", label: "Years experience" },
  { value: "AI", label: "Agent specialist" },
];

const StatChips = () => (
  <motion.div
    variants={fadeUp}
    className="flex flex-wrap gap-4 mt-10"
  >
    {stats.map(({ value, label }) => (
      <div
        key={label}
        className="px-4 py-2 rounded-lg border border-white/10
                   bg-white/5 backdrop-blur-sm"
      >
        <p className="text-white font-bold text-lg leading-none">{value}</p>
        <p className="text-secondary text-xs mt-0.5">{label}</p>
      </div>
    ))}
  </motion.div>
);

/* ── CTA buttons ─────────────────────────────────────────────────────── */
const CTAButtons = () => (
  <motion.div variants={fadeUp} className="flex gap-4 mt-8 flex-wrap">
    <a
      href="#work"
      className="px-6 py-3 rounded-lg bg-[#215eff] text-white text-sm
                 font-semibold tracking-wide hover:bg-[#1a4ecc]
                 transition-colors duration-200 shadow-[0_0_24px_#215eff55]"
    >
      View Projects
    </a>
    <a
      href="#contact"
      className="px-6 py-3 rounded-lg border border-white/20 text-white
                 text-sm font-semibold tracking-wide hover:border-white/50
                 hover:bg-white/5 transition-all duration-200"
    >
      Get in touch
    </a>
  </motion.div>
);

/* ── Scroll indicator ────────────────────────────────────────────────── */
const ScrollIndicator = () => (
  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about" aria-label="Scroll to about section">
      <div
        className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary/60
                   flex justify-center items-start p-2
                   hover:border-secondary transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════
   Hero
═══════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "AI Agent Architect",
        "API Integration Expert",
        "Intelligent App Builder",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2800,
      startDelay: 1200,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* ── Background glow orbs (pure CSS, no extra deps) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute top-1/3 left-1/4 w-[480px] h-[480px]
                     rounded-full bg-[#215eff] opacity-[0.07] blur-[120px]"
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[320px] h-[320px]
                     rounded-full bg-[#084e12] opacity-[0.09] blur-[100px]"
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`${styles.paddingX} relative z-10 inset-0
                    top-[110px] max-w-7xl mx-auto
                    flex flex-row items-start gap-6`}
      >
        {/* Accent line */}
        <AccentLine />

        {/* Text block */}
        <div className="mt-16 flex flex-col max-w-2xl">
          <AvailableBadge />

          <motion.h1
            variants={fadeUp}
            className={`${styles.heroHeadText} text-white leading-tight`}
          >
            Hey, I&rsquo;m{" "}
            <span className="text-[#084e12] relative">
              Abebe
              {/* subtle underline accent */}
              <span
                className="absolute left-0 -bottom-1 w-full h-[3px]
                           bg-gradient-to-r from-[#215eff] to-[#084e12]
                           rounded-full"
              />
            </span>
          </motion.h1>

          {/* Role line — typed.js target */}
          <motion.div variants={fadeUp} className="mt-4 flex items-center gap-3">
            <span className={`${styles.heroSubText} text-secondary`}>
              I&rsquo;m a&nbsp;
            </span>
            <span
              ref={typedRef}
              className={`${styles.heroSubText} text-white font-semibold`}
            />
          </motion.div>

          {/* One-liner description */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-secondary text-[15px] leading-relaxed max-w-lg"
          >
            I craft intelligent, full-stack web applications — bridging modern
            UI with AI-powered back-ends and advanced API integrations that move
            businesses forward.
          </motion.p>

          <StatChips />
          <CTAButtons />
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;