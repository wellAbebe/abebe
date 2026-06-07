import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../utils/motion";
import { abebe } from "../constans";

/* ══════════════════════════════════════════════════════════════════════
   ServiceCard — refined: gradient border, icon, label
══════════════════════════════════════════════════════════════════════ */
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[220px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card
                 hover:shadow-[0_0_30px_#215eff33] transition-shadow duration-300"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                   flex justify-evenly items-center flex-col"
      >
        <div className="w-16 h-16 rounded-full bg-primary/60 flex items-center
                        justify-center mb-2 shadow-inner">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-[18px] font-bold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

/* ══════════════════════════════════════════════════════════════════════
   Stat row — quick credibility signals
══════════════════════════════════════════════════════════════════════ */
const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "5+", label: "Technologies mastered" },
];

const StatRow = () => (
  <motion.div
    variants={fadeIn("", "", 0.3, 1)}
    className="flex flex-wrap gap-6 mt-8"
  >
    {stats.map(({ value, label }) => (
      <div key={label} className="flex flex-col">
        <span className="text-white font-extrabold text-3xl leading-none">
          {value}
        </span>
        <span className="text-secondary text-[13px] mt-1 tracking-wide">
          {label}
        </span>
      </div>
    ))}
  </motion.div>
);

/* ══════════════════════════════════════════════════════════════════════
   About section
══════════════════════════════════════════════════════════════════════ */
const About = () => (
  <div className="w-full">
    {/* ── Section header ── */}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About Me.</h2>
    </motion.div>

    {/* ── Bio + photo ── */}
    <div className="mt-8 flex flex-col md:flex-row gap-10 items-start">
      {/* Text column */}
      <div className="flex-1 max-w-2xl">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[32px]"
        >
          I'm a <span className="text-white font-semibold">Full Stack Engineer</span> who
          has evolved into an <span className="text-white font-semibold">AI Agent Architect</span>.
          I design and build intelligent systems — combining robust web development
          (React, FastAPI, Laravel) with smart automation (n8n, AI Agents, LLM orchestration)
          to deliver software that doesn't just work — it <em>thinks</em>.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="text-secondary text-[17px] leading-[32px] mt-4"
        >
          I'm passionate about bridging the gap between modern UI and intelligent
          back-ends — building real products that leverage AI to move businesses
          forward, reduce manual effort, and scale gracefully.
        </motion.p>

        <StatRow />
      </div>

      {/* Photo */}
      <motion.div
        variants={fadeIn("left", "tween", 0.4, 1)}
        className="flex-shrink-0"
      >
        <Tilt className="w-[220px] md:w-[260px]">
          <div className="green-pink-gradient p-[2px] rounded-2xl shadow-card
                          hover:shadow-[0_0_30px_#215eff44] transition-shadow duration-300">
            <img
              src={abebe.icon}
              alt="Abebe Girma"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </Tilt>
      </motion.div>
    </div>

    {/* ── Divider ── */}
    <div className="mt-16 mb-10 w-full h-px bg-white/10" />

    {/* ── Services header ── */}
    <motion.div variants={fadeIn("", "", 0.1, 1)}>
      <p className={styles.sectionSubText}>What I offer</p>
      <h3 className="text-white font-bold text-[26px] mt-1">Core Services.</h3>
    </motion.div>

    {/* ── Service cards ── */}
    <div className="mt-10 flex flex-wrap gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(About, "about");