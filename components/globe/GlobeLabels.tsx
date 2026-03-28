"use client";

import { Html } from "@react-three/drei";
import { cities } from "./globe-data";
import { latLngToVector3 } from "./globe-utils";

const labelCities = [
  cities.nagpur,
  cities.mumbai,
  cities.dubai,
  cities.sydney,
  cities.johannesburg,
  cities.saoPaulo,
 
  
  
  cities.sf,
  cities.ny,
  cities.tokyo,
  cities.singapore,
  cities.london,
];

export default function GlobeLabels() {
  return (
    <>
      <group>
        {labelCities.map((city) => {
          const position = latLngToVector3(city.lat, city.lng, 2.15);

          return (
            <Html
              key={city.name}
              position={position}
              center
              distanceFactor={10}
            >
              <div className=" rounded-full border border-white/10 bg-[#0d1117]/80 px-2 py-1 text-[5px] font-small text-white shadow-lg backdrop-blur-md">
                {city.name}
              </div>
            </Html>
          );
        })}
      </group>
    </>
  );
}
