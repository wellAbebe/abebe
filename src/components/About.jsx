import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { services } from '../constans';
import {fadeIn, textVariant} from '../utils/motion';
import { abebe } from '../constans';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[220px] w-full">
      <motion.div 
        variants={fadeIn("right","spring", 0.5* index, 0.75)}
        className= " w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

          <motion.div
            options={{ 
              max:45,
              scale: 1,
              speed: 450
             }}
             className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className=' text-white text-[20px] font-bold text-center'>{title}</h3>

          </motion.div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
      <div className=' w-full flex flex-col items-center justify-center'>


        <motion.div variants={textVariant()} className=' text-center mb-8'>
          
          <h3 className={styles.heroHeadText}>About Me</h3>
        </motion.div>
        <div className='xl:flex xl:items-center xl:justify-center gap-10 w-full'>      
            <Tilt className="xs:w-[250px] w-full">
              <motion.div 
                variants={fadeIn("right","tween", 0.2, 1)}
                className= " w-fit h-64  green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                    <img src={abebe.icon} alt="Abebe" className="w-full h-full rounded-lg"/>
              </motion.div>

            </Tilt>
          <motion.p 
            variants={fadeIn("", "", 0.1,1)} className=" mt-4 text-secondary
            text-[20px] max-w-3xl leading-[30px] font-[px]">
                I'm a skilled FullStack developer with experience in backend and
                frontend, and expertise in frameworks like React, Vue, Laravel and
                Django. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
        </div>

        <div className=' mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) =>(
            <ServiceCard key={service.title}
            index = {index} {...service} />
          ))

          }

        </div>

      </div>
  )
}

export default SectionWrapper(About, "about") 