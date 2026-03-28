import { routes } from "./globe-data";
import { createArc } from "./globe-utils";

export const routeCache = routes.map((route, i) => {
  const arc = createArc(route.from, route.to);

  return {
    ...route,
    ...arc,
    id: `${route.from.name}-${route.to.name}-${i}`,
    color: i % 3 === 0 ? "#3fb950" : "#58a6ff",
    packetColor: i % 2 === 0 ? "#ffffff" : "#58a6ff",
  };
});