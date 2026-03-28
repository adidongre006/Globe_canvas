// "use client";
// import { useEffect, useMemo, useState } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import ThreeGlobe from "three-globe";
// import { Color, Fog, PerspectiveCamera, Scene, Vector3 } from "three";
// import countries from "./globedatanew.json";
// /* =========================================================
//    TYPES
// ========================================================= */
// export type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };
// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };
// type GlobePoint = {
//   size: number;
//   order: number;
//   color: (t: number) => string;
//   lat: number;
//   lng: number;
// };
// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }
// const RING_PROPAGATION_SPEED = 3;
// const CAMERA_Z = 250;
// /* =========================================================
//    HELPERS
// ========================================================= */
// export function hexToRgb(hex: string) {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, (_, r, g, b) => {
//     return r + r + g + g + b + b;
//   });
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }
// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr: number[] = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (!arr.includes(r)) arr.push(r);
//   }
//    return arr;
// }
 
// /* =========================================================
//    WEBGL CONFIG
// ========================================================= */
// export function WebGLRendererConfig() {
//   const { gl } = useThree();
//   useEffect(() => {
//     gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     gl.setClearColor(0x000000, 0);
//   }, [gl]);
//   return null;
// }
// /* =========================================================
//    GLOBE OBJECT
// ========================================================= */
// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<GlobePoint[]>([]);
//   // Create globe only once
//   const globe = useMemo(() => new ThreeGlobe(), []);
//   // Merge defaults
//   const defaultProps: Required<GlobeConfig> = {
//     pointSize: 2,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#ffffff",
//     atmosphereAltitude: 0.18,
//     emissive: "#062056",
//     emissiveIntensity: 0.25,
//     shininess: 1,
//     polygonColor: "rgba(255,255,255,0.8)",
//     ambientLight: "#ffffff",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 2500,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 4,
//     autoRotate: true,
//     autoRotateSpeed: 0.6,
//     ...globeConfig,
//   };
//   // Material setup
//   useEffect(() => {
//     const globeMaterial = globe.globeMaterial() as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(defaultProps.globeColor);
//     globeMaterial.emissive = new Color(defaultProps.emissive);
//     globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
//     globeMaterial.shininess = defaultProps.shininess;
//   }, [
//     globe,
//     defaultProps.globeColor,
//     defaultProps.emissive,
//     defaultProps.emissiveIntensity,
//     defaultProps.shininess,
//   ]);
//   // Build point data from arc endpoints
//   useEffect(() => {
//     const points: GlobePoint[] = [];
//     for (const arc of data) {
//       const rgb = hexToRgb(arc.color);
//       if (!rgb) continue;
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) =>
//           `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) =>
//           `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }
//     const uniquePoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
//     );
//     setGlobeData(uniquePoints);
//   }, [data, defaultProps.pointSize]);
//   // Build polygons + atmosphere + arcs + points
//   useEffect(() => {
//     if (globeData.length === 0) return;
//     globe
//       .hexPolygonsData((countries as any).features)
//       .hexPolygonResolution(3)
//       .hexPolygonMargin(0.5)
//       .hexPolygonColor(() => defaultProps.polygonColor)
//       .showAtmosphere(defaultProps.showAtmosphere)
//       .atmosphereColor(defaultProps.atmosphereColor)
//       .atmosphereAltitude(defaultProps.atmosphereAltitude);
//     globe
//       .arcsData(data)
//       .arcStartLat((d: Position) => d.startLat)
//       .arcStartLng((d: Position) => d.startLng)
//       .arcEndLat((d: Position) => d.endLat)
//       .arcEndLng((d: Position) => d.endLng)
//       .arcColor((d: Position) => d.color)
//       .arcAltitude((d: Position) => d.arcAlt)
//       .arcStroke(() => 0.35)
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((d: Position) => d.order)
//       .arcDashGap(1.5)
//       .arcDashAnimateTime(defaultProps.arcTime);
//     globe
//       .pointsData(globeData)
//       .pointColor((d: GlobePoint) => d.color(0))
//       .pointAltitude(0.02)
//       .pointRadius(0.9)
//       .pointsMerge(true);
//     globe
//       .ringsData([])
//       .ringColor((d: GlobePoint) => (t: number) => d.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   }, [globe, globeData, data, defaultProps]);
//   // Animated pulse rings
//   useEffect(() => {
//     if (globeData.length === 0) return;
//     const interval = setInterval(() => {
//       const selected = genRandomNumbers(
//         0,
//         globeData.length,
//         Math.max(1, Math.floor(globeData.length * 0.6))
//       );
//       globe.ringsData(globeData.filter((_, i) => selected.includes(i)));
//     }, 1800);
//     return () => clearInterval(interval);
//   }, [globe, globeData]);
//   return <primitive object={globe} scale={0.5} />;//
// }
// /* =========================================================
//    WORLD WRAPPER
// ========================================================= */
// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const scene = useMemo(() => {
//     const s = new Scene();
//     s.fog = new Fog(0x000000, 400, 2000);
//     return s;
//   }, []);
//   const camera = useMemo(() => {
//     const cam = new PerspectiveCamera(45, 1, 0.1, 2000);
//     cam.position.z = CAMERA_Z;
//     return cam;
//   }, []);
//   return (
//     <Canvas
//       scene={scene}
//       camera={camera}
//       style={{ width: "100%", height: "100%" }}
//     >
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight ?? "#ffffff"} intensity={2} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight ?? "#ffffff"}
//         position={new Vector3(-300, 200, 400)}
//         intensity={2.5}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight ?? "#ffffff"}
//         position={new Vector3(300, 300, 200)}
//         intensity={2}
//       />
//       <pointLight
//         color={globeConfig.pointLight ?? "#ffffff"}
//         position={new Vector3(200, 200, 300)}
//         intensity={3}
//       />
//       <Globe {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={CAMERA_Z}
//         maxDistance={CAMERA_Z}
//         autoRotate={globeConfig.autoRotate ?? true}
//         autoRotateSpeed={globeConfig.autoRotateSpeed ?? 0.6}
//       />
//     </Canvas>
//   );
// }
"use client";
import { useEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import { Color, Fog, PerspectiveCamera, Scene, Vector3 } from "three";
import countries from "./globedatanew.json";
/* =========================================================
   TYPES
========================================================= */
export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};
export type GlobeConfig = {
  globeRadius?: number;
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};
type GlobePoint = {
  size: number;
  order: number;
  color: (t: number) => string;
  lat: number;
  lng: number;
};
interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}
const RING_PROPAGATION_SPEED = 3;
const CAMERA_Z = 400; // globe size wiewwww

/* =========================================================
   HELPERS
========================================================= */
export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
}
 return arr;
  }
 
/* =========================================================
   WEBGL CONFIG
========================================================= */
export function WebGLRendererConfig() {
  const { gl } = useThree();
  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.setClearColor(0x000000, 0);
  }, [gl]);
  return null;
}
/* =========================================================
   GLOBE OBJECT
========================================================= */
export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<GlobePoint[]>([]);
  const globe = useMemo(() => new ThreeGlobe(), []);
  const defaultProps: Required<GlobeConfig> = {
    globeRadius: 2.8,
    pointSize: 2,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.18,
    emissive: "#062056",
    emissiveIntensity: 0.25,
    shininess: 1,
    polygonColor: "rgba(255,255,255,0.8)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2500,
    arcLength: 0.9,
    rings: 1,
    maxRings: 4,
    autoRotate: true,
    autoRotateSpeed: 0.6,
    ...globeConfig,
  };
  /* ---------------- Material ---------------- */
  useEffect(() => {
    const globeMaterial = globe.globeMaterial() as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  }, [
    globe,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);
  /* ---------------- Points ---------------- */
  useEffect(() => {
    const points: GlobePoint[] = [];
    for (const arc of data) {
      const rgb = hexToRgb(arc.color);
      if (!rgb) continue;
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }
    const uniquePoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );
    setGlobeData(uniquePoints);
  }, [data, defaultProps.pointSize]);
  /* ---------------- Globe + Arcs + Points ---------------- */
  useEffect(() => {
    if (globeData.length === 0) return;
    globe
      .hexPolygonsData((countries as any).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.5)
      .hexPolygonColor(() => defaultProps.polygonColor)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude);
    globe
      .arcsData(data)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor((d: Position) => d.color)
      .arcAltitude((d: Position) => d.arcAlt)
      .arcStroke(() => 0.35)
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((d: Position) => d.order)
      .arcDashGap(1.5)
      .arcDashAnimateTime(defaultProps.arcTime);
    globe
      .pointsData(globeData)
      .pointColor((d: GlobePoint) => d.color(0))
      .pointAltitude(0.02)
      .pointRadius(0.9)
      .pointsMerge(true);
    globe
      .ringsData([])
      .ringColor((d: GlobePoint) => (t: number) => d.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  }, [globe, globeData, data, defaultProps]);
  /* ---------------- Pulse Rings ---------------- */
  useEffect(() => {
    if (globeData.length === 0) return;
    const interval = setInterval(() => {
      const selected = genRandomNumbers(
        0,
        globeData.length,
        Math.max(1, Math.floor(globeData.length * 0.6))
      );
      globe.ringsData(globeData.filter((_, i) => selected.includes(i)));
    }, 1800);
    return () => clearInterval(interval);
  }, [globe, globeData]);
  return <primitive object={globe} scale={defaultProps.globeRadius} />;
}
/* =========================================================
   WORLD WRAPPER
========================================================= */
export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = useMemo(() => {
    const s = new Scene();
    s.fog = new Fog(0x000000, 400, 2000);
    return s;
  }, []);
  const camera = useMemo(() => {
    const cam = new PerspectiveCamera(45, 1, 0.1, 2000);
    cam.position.z = CAMERA_Z;
    return cam;
  }, []);
  return (
    <Canvas
      scene={scene}
      camera={camera}
      style={{ width: "100%", height: "100%" }}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight ?? "#ffffff"} intensity={2} />
      <directionalLight
        color={globeConfig.directionalLeftLight ?? "#ffffff"}
        position={new Vector3(-300, 200, 400)}
        intensity={2.5}
      />
      <directionalLight
        color={globeConfig.directionalTopLight ?? "#ffffff"}
        position={new Vector3(300, 300, 200)}
        intensity={2}
      />
      <pointLight
        color={globeConfig.pointLight ?? "#ffffff"}
        position={new Vector3(200, 200, 300)}
        intensity={3}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        autoRotate={globeConfig.autoRotate ?? true}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 0.6}
      />
    </Canvas>
  );
}