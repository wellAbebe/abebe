import { motion } from "framer-motion";

import {styles} from '../styles'
import Typed from "typed.js";
import React, {useEffect, useRef} from "react";

const Hero = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "I am a Full Stack Developer",
        "<span class='highlight'>I</span> Offer Expertise in <span class='highlight'>Crafting Innovative</span> Digital Solutions",
        "<span class='highlight'>I</span> Elevate Experiences Through my <span class='highlight'>Coding Expertise</span>",
        "<span class='highlight'>I</span> am Dedicated to <span class='highlight'>Coding Tomorrow's Innovations Today</span>",
      ],
      typeSpeed: 95, 
      backSpeed: 25, 
      backDelay: 2000, 
      startDelay: 1000,
      loop: true, 
    };

    const typedInstance = new Typed(typedRef.current, options);
    // Cleanup on component unmount
    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={` ${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className=" flex flex-col justify-center
         items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#215eff]"/>
          <div className=" w-1 sm:h-80 h-80 violet-gradient"/>
        </div>
        <motion.div>
          
            <h1 className={`${styles.heroHeadText} text-white`}>Hi there, I'm 
            <span className=" text-[#415eff]"> Abebe</span>
            </h1>
            <p ref={typedRef} className={`${styles.heroSubText} mt-2`}>
                {[
                  <span key="1" className={styles.highlight}>I</span>,
                  ' Offer Expertise in ',
                  <span key="2" className={styles.highlight}>Crafting Innovative</span>,
                  ' Digital Solutions',
                ]}
              </p>
        </motion.div>

      </div>
      
      <div className="absolute 
       xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary flex
            justify-center items-start p-2">
              <motion.dev
                animate={{ 
                  y:[0,24,0]
                 }}
                 transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                  }}
                  className=" w-3 h-3 rounded-full bg-secondary mb-1">

              </motion.dev>

          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero