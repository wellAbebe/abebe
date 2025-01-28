import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";
import { textVariant } from "../utils/motion";
import { Canvas } from "@react-three/fiber";

const Tech = () => {
  return (
    <div>
      <motion.div className="m-10 mt-0" variants={textVariant()}>
        <p className="font-extralight font-serif from-neutral-200 text-[32px]">
          My extensive experience seamlessly blends with the following technologies:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* <Canvas>
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas technologies ={technologies} />
            </div>
          ))}

        </Canvas> */}
        Hi
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
