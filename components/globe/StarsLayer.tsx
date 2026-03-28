"use client";

import { Stars } from "@react-three/drei";

export default function StarsLayer({ mobile = false }: { mobile?: boolean }) {
  return (
    <Stars
      radius={80}
      depth={50}
      count={mobile ? 1200 : 2200}
      factor={4}
      saturation={0}
      fade
      speed={0.6}
    />
  );
}