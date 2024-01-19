import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import {  Preload } from 'framer-motion'
import { Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { PointMaterial, Points } from '@react-three/drei'

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
// dBZ6fjjXahHjlnWN-
// template_dsi178m
// service_481rm9t
const StarsCanvas = () => {
  return (
    <div className=' w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={ {position:[0,0,1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>

  )
}

export default StarsCanvas