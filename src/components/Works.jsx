import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constans";
import { fadeIn, textVariant } from "../utils/motion";

/* ── SVG web / globe icon (inline, no extra dep) ─────────────────── */
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-1/2 h-1/2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
             15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/* ══════════════════════════════════════════════════════════════════════
   ProjectCard — no Tilt, static with CSS hover lift only
══════════════════════════════════════════════════════════════════════ */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      /* subtle lift on hover instead of tilt */
      className="group bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full
                 transition-transform duration-300 hover:-translate-y-2
                 hover:shadow-[0_16px_40px_#00000060]"
    >
      {/* ── Image + icon buttons ── */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={`${name} preview`}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* overlay fades in on card hover */}
        <div
          className="absolute inset-0 rounded-2xl bg-black/0
                     group-hover:bg-black/30 transition-colors duration-300
                     flex justify-end items-start gap-2 p-3 card-img_hover"
        >
          {/* GitHub button */}
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            title="View source code"
            className="black-gradient w-10 h-10 rounded-full flex justify-center
                       items-center cursor-pointer hover:scale-110
                       transition-transform duration-200"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-1/2 h-1/2 object-contain"
            />
          </button>

          {/* Live site button — only renders if live_site_link is provided */}
          {website_link && (
            <button
              onClick={() => window.open(website_link, "_blank")}
              title="View website"
              className="black-gradient w-10 h-10 rounded-full flex justify-center
                         items-center cursor-pointer hover:scale-110
                         transition-transform duration-200"
            >
              <GlobeIcon />
            </button>
          )}
        </div>
      </div>

      {/* ── Text ── */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[22px]">
          {description}
        </p>
      </div>

      {/* ── Tags ── */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[13px] font-medium ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════════════════
   Works section
══════════════════════════════════════════════════════════════════════ */
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills through real-world examples.
          Each includes a brief description with links to the source code and,
          where applicable, a live demo — reflecting my ability to solve complex
          problems across different technologies and ship end-to-end.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");