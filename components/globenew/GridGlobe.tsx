// "use client";
// import dynamic from "next/dynamic";
// const World = dynamic(() => import("./globeNew").then((m) => m.World), {
//   ssr: false,
// });
// const GridGlobe = () => {
//   const globeConfig = {
//     pointSize: 3,
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
//   };
//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
//   const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
//   const sampleArcs = [
//     {
//       order: 1,
//       startLat: 19.076,
//       startLng: 72.8777,
//       endLat: 28.6139,
//       endLng: 77.209,
//       arcAlt: 0.25,
//       color: randomColor(),
//     },
//     {
//       order: 2,
//       startLat: 28.6139,
//       startLng: 77.209,
//       endLat: 13.0827,
//       endLng: 80.2707,
//       arcAlt: 0.3,
//       color: randomColor(),
//     },
//     {
//       order: 3,
//       startLat: 13.0827,
//       startLng: 80.2707,
//       endLat: 22.5726,
//       endLng: 88.3639,
//       arcAlt: 0.25,
//       color: randomColor(),
//     },
//     {
//       order: 4,
//       startLat: 22.5726,
//       startLng: 88.3639,
//       endLat: 12.9716,
//       endLng: 77.5946,
//       arcAlt: 0.3,
//       color: randomColor(),
//     },
//     {
//       order: 5,
//       startLat: 12.9716,
//       startLng: 77.5946,
//       endLat: 19.076,
//       endLng: 72.8777,
//       arcAlt: 0.25,
//       color: randomColor(),
//     },
//     {
//       order: 6,
//       startLat: 19.076,
//       startLng: 72.8777,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.35,
//       color: randomColor(),
//     },
//     {
//       order: 7,
//       startLat: 28.6139,
//       startLng: 77.209,
//       endLat: 40.7128,
//       endLng: -74.006,
//       arcAlt: 0.4,
//       color: randomColor(),
//     },
//     {
//       order: 8,
//       startLat: 35.6762,
//       startLng: 139.6503,
//       endLat: 19.076,
//       endLng: 72.8777,
//       arcAlt: 0.35,
//       color: randomColor(),
//     },
//   ];
//   return (
//     <div className="w-full h-[700px]">
//       <World globeConfig={globeConfig} data={sampleArcs} />
//     </div>
//   );
// };

// export default GridGlobe;


// ------------------------------------

"use client";
import dynamic from "next/dynamic";
const World = dynamic(() => import("./globeNew").then((m) => m.World), {
  ssr: false,
});


/// for sizealso change the camera view Camerra-Z  .
const GridGlobe = () => {
  const globeConfig = {
    globeRadius: 1,
    pointSize: 3,
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
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const sampleArcs = [
    // India
    {
      order: 1,
      startLat: 19.076,
      startLng: 72.8777, // Mumbai
      endLat: 28.6139,
      endLng: 77.209, // Delhi
      arcAlt: 0.25,
      color: randomColor(),
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 13.0827,
      endLng: 80.2707, // Chennai
      arcAlt: 0.3,
      color: randomColor(),
    },
    {
      order: 3,
      startLat: 13.0827,
      startLng: 80.2707,
      endLat: 22.5726,
      endLng: 88.3639, // Kolkata
      arcAlt: 0.25,
      color: randomColor(),
    },
    {
      order: 4,
      startLat: 22.5726,
      startLng: 88.3639,
      endLat: 12.9716,
      endLng: 77.5946, // Bangalore
      arcAlt: 0.3,
      color: randomColor(),
    },
    {
      order: 5,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 19.076,
      endLng: 72.8777,
      arcAlt: 0.25,
      color: randomColor(),
    },
    // International
    {
      order: 6,
      startLat: 19.076,
      startLng: 72.8777,
      endLat: 51.5072,
      endLng: -0.1276, // London
      arcAlt: 0.35,
      color: randomColor(),
    },
    {
      order: 7,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 40.7128,
      endLng: -74.006, // New York
      arcAlt: 0.4,
      color: randomColor(),
    },
    {
      order: 8,
      startLat: 35.6762,
      startLng: 139.6503, // Tokyo
      endLat: 19.076,
      endLng: 72.8777,
      arcAlt: 0.35,
      color: randomColor(),
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198, // Singapore
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.28,
      color: randomColor(),
    },
    {
      order: 10,
      startLat: 25.2048,
      startLng: 55.2708, // Dubai
      endLat: 19.076,
      endLng: 72.8777,
      arcAlt: 0.22,
      color: randomColor(),
    },
  ];
  return (
    <div className="w-full h-[700px]">
      <World globeConfig={globeConfig} data={sampleArcs} />
    </div>
  );
};
export default GridGlobe