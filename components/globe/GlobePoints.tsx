"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function GlobePoints({
  radius = 2.012,
  mobile = false,
}: {
  radius?: number;
  mobile?: boolean;
}) {
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const count = mobile ? 180 : 320;

    for (let i = 0; i < count; i++) {
      const lat = Math.random() * 180 - 90;
      const lng = Math.random() * 360 - 180;

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);

      arr.push(new THREE.Vector3(x, y, z));
    }

    return arr;
  }, [radius, mobile]);

  return (
    <group>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[mobile ? 0.007 : 0.009, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#3fb950" : "#58a6ff"}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}