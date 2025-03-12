import { motion } from "framer-motion"
import { slideIn } from "../../utils/motion"
import { styles } from "../../styles"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"


const EarthCanvas = () =>{

  return (
    <div className="overflow-hidden">   
      <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
        className=" m-5 p-1 space-x-5 space-y-10"
        >
        <h3 className={`${styles.sectionSubText} justify-center flex`}>Some Info About Me</h3>
        <div style={{ display: 'flex', alignItems: 'center' }} className=' mt-4 justify-center'>
          <FaPhone size={24} style={{ marginRight: 10 }} />
          <span style={{ marginRight: 10 }}>Phone:</span>
          <span className=" font-extralight">+251 964-764-896</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }} className=' mt-4 justify-center'>
          <FaEnvelope size={24} style={{ marginRight: 10 }} />
          <span style={{ marginRight: 10 }}>Email:</span>
          <span className=" font-extralight">gabebe096@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }} className='xl:flex-1 xl:h-auto justify-center m-4 font-extralight'>
          <FaLocationDot  size={20} style={{ marginRight: 5 }} />
          <h3 className=" font-semibold ">Address:</h3>
          <p className=" ml-4">   Bole, Addis Ababa,   Ethiopia</p>
        </div>     
      </motion.div>
    </div>

  )
}

export default EarthCanvas