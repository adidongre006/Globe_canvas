"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovingPacket({
  curve,
  speed = 0.1,
  color = "#58a6ff",
  offset = 0,
  size = 0.026,
  reverse = false,
}: {
  curve: THREE.CatmullRomCurve3;
  speed?: number;
  color?: string;
  offset?: number;
  size?: number;
  reverse?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    let t = (clock.getElapsedTime() * speed + offset) % 1;
    if (reverse) t = 1 - t;

    const point = curve.getPointAt(t);
    groupRef.current.position.copy(point);

    const pulse = 1 + Math.sin(clock.getElapsedTime() * 6 + offset * 8) * 0.12;
    groupRef.current.scale.setScalar(pulse);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[size * 3.8, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.035} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 2.4, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.16} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 0.36, 10, 10]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}