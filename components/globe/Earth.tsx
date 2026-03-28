"use client";

import Atmosphere from "./Atmosphere";
import GlobePoints from "./GlobePoints";

export default function Earth({ mobile = false }: { mobile?: boolean }) {
  return (
    <group>
      <Atmosphere />

      <mesh>
        <sphereGeometry args={[2, mobile ? 48 : 72, mobile ? 48 : 72]} />
        <meshPhongMaterial
          color="#0d1117"
          emissive="#0f2547"
          emissiveIntensity={0.38}
          shininess={mobile ? 18 : 28}
          specular="#1f6feb"
          transparent
          opacity={0.985}
        />
      </mesh>

      <GlobePoints radius={2.012} mobile={mobile} />

      <mesh>
        <sphereGeometry args={[1.9, 40, 40]} />
        <meshBasicMaterial color="#58a6ff" transparent opacity={0.02} />
      </mesh>
    </group>
  );
}