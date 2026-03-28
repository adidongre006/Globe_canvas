"use client";

import { Canvas } from "@react-three/fiber";
import GlobeScene from "./GlobeScene";
import useIsMobile from "./uselsMobile";

export default function GlobeCanvas() {
  const mobile = useIsMobile();

  return (
    <div className="margin h-[700px] w-full md:h-[620px]  ">
      <Canvas camera={{ position: [0, 0, 6.6], fov: mobile ? 48 : 42 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 3, 5]} intensity={1.8} />
        <pointLight position={[-5, -3, -5]} intensity={1.2} color="#58a6ff" />
        <GlobeScene mobile={mobile} />
      </Canvas>
    </div>
  );
}