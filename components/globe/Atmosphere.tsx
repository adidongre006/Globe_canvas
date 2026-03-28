"use client";

export default function Atmosphere() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[2.08, 128, 128]} />
        <meshBasicMaterial color="#58a6ff" transparent opacity={0.045} />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.15, 128, 128]} />
        <meshBasicMaterial color="#3fb950" transparent opacity={0.015} />
      </mesh>
    </group>
  );
}
