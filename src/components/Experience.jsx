import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constans";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

/* ══════════════════════════════════════════════════════════════════════
   ExperienceCard
══════════════════════════════════════════════════════════════════════ */
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={
      <span className="text-secondary text-[14px] font-medium">
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: `0 0 0 4px ${experience.iconBg}55, 0 0 0 8px #232631`,
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-full"
        />
      </div>
    }
  >
    {/* Role + company */}
    <div>
      <h3 className="text-white text-[22px] font-bold leading-snug">
        {experience.title}
      </h3>
      <p
        className="text-[#215eff] text-[15px] font-semibold mt-1"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Bullet points */}
    <ul className="mt-5 space-y-2 list-none pl-0">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="flex items-start gap-2 text-white/80 text-[14px]
                     leading-[22px] tracking-wide"
        >
          {/* custom bullet */}
          <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#215eff]" />
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

/* ══════════════════════════════════════════════════════════════════════
   Experience section
══════════════════════════════════════════════════════════════════════ */
const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience.
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[16px] text-center max-w-2xl mx-auto leading-[28px]"
    >
      A timeline of the roles, companies, and projects that have shaped
      my expertise as an engineer and AI systems builder.
    </motion.p>

    <div className="mt-16 flex flex-col">
      <VerticalTimeline lineColor="rgba(255,255,255,0.08)">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");