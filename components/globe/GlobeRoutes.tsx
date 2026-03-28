"use client";

import { Line } from "@react-three/drei";
import MovingPacket from "./MovingPacket";
import { routeCache } from "./route-cache";

export default function GlobeRoutes({ mobile = false }: { mobile?: boolean }) {
  return (
    <group>
      {routeCache.map((route, i) => {
        const intensity = route.intensity ?? 1;

        return (
          <group key={route.id}>
            <Line
              points={route.points}
              color={route.color}
              lineWidth={mobile ? 2.2 : 3.2}
              transparent
              opacity={0.04 * intensity}
            />

            <Line
              points={route.points}
              color={route.color}
              lineWidth={mobile ? 1.1 : 1.45}
              transparent
              opacity={0.88}
            />

            <MovingPacket
              curve={route.curve}
              speed={0.045 + (i % 4) * 0.012}
              color={route.color}
              offset={i * 0.11}
              size={mobile ? 0.022 : 0.026}
            />

            {!mobile && i % 2 === 0 && (
              <MovingPacket
                curve={route.curve}
                speed={0.03 + (i % 3) * 0.01}
                color={route.packetColor}
                offset={0.42 + i * 0.08}
                size={0.015}
                reverse
              />
            )}

            {!mobile && intensity > 1.15 && (
              <MovingPacket
                curve={route.curve}
                speed={0.06}
                color="#3fb950"
                offset={0.2 + i * 0.03}
                size={0.013}
              />
            )}

            <mesh position={route.start}>
              <sphereGeometry args={[0.03, 12, 12]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>

            <mesh position={route.start}>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshBasicMaterial color="#58a6ff" transparent opacity={0.12} />
            </mesh>

            <mesh position={route.end}>
              <sphereGeometry args={[0.024, 10, 10]} />
              <meshBasicMaterial color={route.color} />
            </mesh>

            <mesh position={route.end}>
              <sphereGeometry args={[0.06, 10, 10]} />
              <meshBasicMaterial color={route.color} transparent opacity={0.06} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}