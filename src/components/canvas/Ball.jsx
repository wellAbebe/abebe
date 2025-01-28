/* eslint-disable react/prop-types */
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";
import { useState } from "react";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
 

  return (
    <group >
      <mesh
        ref={meshRef}
        // castShadow textGeometry args={[name, { size: 0.5, height: 0.1 }]} , <mesh position={[0, -1.5, 0]},
        // receiveShadow //polygonOffset polygonOffsetFactor={-5} flatShading  <icosahedronGeometry args={[1, 1]} />
        scale={hovered ? 3.2 : 2.5}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
       <icosahedronGeometry />
        <meshStandardMaterial color="#fff8eb" />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
      {hovered && (
        <mesh >
          <textGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      )}
    </group>
  );
};

const BallCanvas = ({ technologies }) => {

  const ringRef = useRef();
  const radius = 5; // Radius of the circular orbit

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.5; // Rotate over time
    }
  });

  return (
    <div >
      <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <directionalLight />
          <group ref={ringRef}>
          {technologies.map((tech, index) => {
            const angle = (index / technologies.length) * Math.PI * 2;
            return (
              <Ball 
                key={tech.name} 
                imgUrl={tech.icon} 
                name={tech.name}
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]} 
              />
            );
          })}
          </group>
        </Suspense>
      <p className="mt-2 text-center text-gray-300 text-sm">{name}</p> {/* Tech name tooltip */}
      </Canvas>

    </div>
  );
};

export default BallCanvas;
