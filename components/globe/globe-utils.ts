import * as THREE from "three";
import { RoutePoint } from "./globe-data";

export function latLngToVector3(lat: number, lng: number, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export function createArc(from: RoutePoint, to: RoutePoint, radius = 2.02) {
  const start = latLngToVector3(from.lat, from.lng, radius);
  const end = latLngToVector3(to.lat, to.lng, radius);

  const distance = start.distanceTo(end);
  const altitude = THREE.MathUtils.clamp(distance * 0.32, 0.35, 1.2);

  const mid = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(radius + altitude);

  const curve = new THREE.CatmullRomCurve3([start, mid, end]);
  const points = curve.getPoints(120);

  return { curve, points, start, end, distance, altitude };
}