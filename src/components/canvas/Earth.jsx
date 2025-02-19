import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'
import { motion } from "framer-motion"
import { slideIn } from "../../utils/motion"
import { styles } from "../../styles"
import { FaPhone, FaEnvelope, FaAddressBook, FaRegAddressCard, FaLocationArrow } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={4.0}
      position-y={0}
      rotation-y={0}
    />
  )
}



const EarthCanvas = () =>{

  const textContainerRef = useRef();
  return (
    <div className="overflow-hidden">   
      <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
        className=" m-5 p-1 space-x-5 space-y-10"
        >
        <h3 className={`${styles.sectionSubText} justify-center flex`}>Info About Me</h3>
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
      {/* <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer:true }}
        camera={{ 
          fov:45,
          near:0.5,
          far:400,
          position:[-4,4,8]
        }} className=" mt-40 max-h-fit">
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={true}
              maxPolarAngle={Math.PI / 1}
              minPolarAngle={Math.PI / 2}/>
            <Earth/>
          </Suspense>
      </Canvas>       */}
    </div>

  )
}

export default EarthCanvas