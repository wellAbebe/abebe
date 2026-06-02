import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constans";
import { menu, close } from "../assets";

/* ══════════════════════════════════════════════════════════════════════
   Left-side vertical Navbar
   — Desktop : fixed column on the left, full height
   — Mobile  : top bar + slide-down drawer (same as before, cleaner)
══════════════════════════════════════════════════════════════════════ */

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll so the sidebar can react */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── helpers ─────────────────────────────────────────────────────── */
  const handleLogoClick = () => {
    setActive("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── sidebar nav items ───────────────────────────────────────────── */
  const SideNavItem = ({ link }) => (
    <li className="group relative flex items-center gap-3">
      {/* Active / hover indicator bar */}
      <span
        className={`absolute left-0 w-[3px] rounded-r-full
                    transition-all duration-300
                    ${
                      active === link.title
                        ? "h-full bg-[#215eff]"
                        : "h-0 group-hover:h-full bg-white/30"
                    }`}
      />

      <a
        href={`#${link.id}`}
        className={`pl-5 py-2 text-[13px] font-medium tracking-[0.12em]
                    uppercase transition-colors duration-200 select-none
                    ${
                      active === link.title
                        ? "text-white"
                        : "text-secondary group-hover:text-white"
                    }`}
        onClick={() => setActive(link.title)}
      >
        {link.title}
      </a>
    </li>
  );

  /* ── desktop sidebar ─────────────────────────────────────────────── */
  const DesktopSidebar = () => (
    <nav
      className={`hidden sm:flex fixed left-0 top-0 h-full z-30
                  flex-col justify-between py-10 px-0
                  w-[200px] bg-primary border-r border-white/[0.06]
                  transition-all duration-300
                  ${scrolled ? "shadow-[4px_0_24px_#00000055]" : ""}`}
      aria-label="Site navigation"
    >
      {/* ── Logo / name ── */}
      <div className="px-6">
        <Link to="/" onClick={handleLogoClick} className="block group">
          {/* Monogram mark */}
          <div
            className="w-10 h-10 rounded-lg bg-[#215eff] flex items-center
                       justify-center text-white font-black text-lg mb-4
                       shadow-[0_0_18px_#215eff55]
                       group-hover:shadow-[0_0_28px_#215eff88]
                       transition-shadow duration-300"
          >
            A
          </div>
          <p
            className="text-white font-bold text-[15px] leading-tight
                       tracking-tight"
          >
            Abebe
            <br />
            <span className="text-secondary font-normal text-[12px] tracking-widest uppercase">
              Girma
            </span>
          </p>
        </Link>

        {/* Decorative rule */}
        <div className="mt-6 mb-8 w-full h-px bg-white/10" />

        {/* Nav links */}
        <ul className="flex flex-col gap-1 list-none">
          {navLinks.map((link) => (
            <SideNavItem key={link.id} link={link} />
          ))}
        </ul>
      </div>

      {/* ── Bottom decoration ── */}
      <div className="px-6">
        <div className="w-full h-px bg-white/10 mb-5" />
        {/* Vertical "PORTFOLIO" label */}
        <p
          className="text-white/20 text-[10px] tracking-[0.35em] uppercase
                     writing-vertical select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Portfolio&nbsp;·&nbsp;2026
        </p>
      </div>
    </nav>
  );

  /* ── mobile top bar ──────────────────────────────────────────────── */
  const MobileTopBar = () => (
    <nav
      className={`sm:hidden fixed top-0 left-0 right-0 z-30
                  flex items-center justify-between
                  px-5 py-4 bg-primary
                  ${scrolled ? "border-b border-white/10 shadow-md" : ""}`}
      aria-label="Mobile navigation"
    >
      <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-md bg-[#215eff] flex items-center
                     justify-center text-white font-black text-sm"
        >
          A
        </div>
        <p className="text-white font-semibold text-[17px]">Abebe Girma</p>
      </Link>

      <button
        aria-label={toggle ? "Close menu" : "Open menu"}
        onClick={() => setToggle(!toggle)}
        className="p-1"
      >
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-6 h-6 object-contain"
        />
      </button>

      {/* Slide-down drawer */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0
                       bg-primary border-t border-white/10
                       shadow-xl px-5 py-5"
          >
            <ul className="flex flex-col gap-4 list-none">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block text-[16px] font-medium
                                transition-colors duration-150
                                ${
                                  active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                                }`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileTopBar />
    </>
  );
};

export default Navbar;