"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Earth from "./Earth";
import GlobeRoutes from "./GlobeRoutes";
import StarsLayer from "./StarsLayer";
import GlobeLabels from "./GlobeLabels";

function RotatingGlobe({ mobile = false }: { mobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * (mobile ? 0.045 : 0.06);
    groupRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.1) * 0.02 - 0.15;
  });

  return (
    <>
      <StarsLayer mobile={mobile} />

      <group ref={groupRef}>
        <Earth mobile={mobile} />
        <GlobeRoutes mobile={mobile} />
        {!mobile && <GlobeLabels />}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export default RotatingGlobe;