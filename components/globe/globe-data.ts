export type RoutePoint = {
  name: string;
  lat: number;
  lng: number;
  size?: number;
  type?: "hub" | "city" | "global";
};

export type RouteConnection = {
  from: RoutePoint;
  to: RoutePoint;
  intensity?: number;
};

export const cities = {
  pune: { name: "Pune", lat: 18.5204, lng: 73.8567, size: 1.25, type: "hub" as const },
  nagpur: { name: "Nagpur", lat: 21.1458, lng: 79.0882, size: 1.1, type: "hub" as const },
  mumbai: { name: "Mumbai", lat: 19.076, lng: 72.8777, size: 1.2, type: "hub" as const },
  delhi: { name: "Delhi", lat: 28.6139, lng: 77.209, size: 1.15, type: "hub" as const },
  bangalore: { name: "Bangalore", lat: 12.9716, lng: 77.5946, size: 1.15, type: "hub" as const },
  hyderabad: { name: "Hyderabad", lat: 17.385, lng: 78.4867, size: 1.05, type: "city" as const },
  chennai: { name: "Chennai", lat: 13.0827, lng: 80.2707, size: 1.0, type: "city" as const },
  kolkata: { name: "Kolkata", lat: 22.5726, lng: 88.3639, size: 1.0, type: "city" as const },
  // ===== WORLD =====
  dubai: { name: "Dubai", lat: 25.2048, lng: 55.2708, type: "global" as const },
  singapore: { name: "Singapore", lat: 1.3521, lng: 103.8198, type: "global" as const },
  tokyo: { name: "Tokyo", lat: 35.6762, lng: 139.6503, type: "global" as const },
  seoul: { name: "Seoul", lat: 37.5665, lng: 126.978, type: "global" as const },
  london: { name: "London", lat: 51.5072, lng: -0.1276, type: "global" as const },
  berlin: { name: "Berlin", lat: 52.52, lng: 13.405, type: "global" as const },
  paris: { name: "Paris", lat: 48.8566, lng: 2.3522, type: "global" as const },
  amsterdam: { name: "Amsterdam", lat: 52.3676, lng: 4.9041, type: "global" as const },
  toronto: { name: "Toronto", lat: 43.6532, lng: -79.3832, type: "global" as const },
  ny: { name: "New York", lat: 40.7128, lng: -74.006, type: "global" as const },
  sf: { name: "San Francisco", lat: 37.7749, lng: -122.4194, type: "global" as const },
  saoPaulo: { name: "São Paulo", lat: -23.5505, lng: -46.6333, type: "global" as const },
  sydney: { name: "Sydney", lat: -33.8688, lng: 151.2093, type: "global" as const },
  melbourne: { name: "Melbourne", lat: -37.8136, lng: 144.9631, type: "global" as const },
  johannesburg: { name: "Johannesburg", lat: -26.2041, lng: 28.0473, type: "global" as const },
};

export const routes: RouteConnection[] = [
  { from: cities.pune, to: cities.nagpur, intensity: 1.0 },
  { from: cities.pune, to: cities.mumbai, intensity: 1.4 },
   { from: cities.pune, to: cities.hyderabad, intensity: 1.2 },
  { from: cities.pune, to: cities.chennai, intensity: 1.05 },
  { from: cities.pune, to: cities.kolkata, intensity: 0.95 },
  { from: cities.nagpur, to: cities.delhi, intensity: 1.05 },
  { from: cities.nagpur, to: cities.hyderabad, intensity: 1.0 },
  { from: cities.nagpur, to: cities.kolkata, intensity: 0.9 },
  { from: cities.nagpur, to: cities.bangalore, intensity: 1.0 },
  { from: cities.mumbai, to: cities.delhi, intensity: 1.2 },
  { from: cities.mumbai, to: cities.bangalore, intensity: 1.1 },
  { from: cities.delhi, to: cities.kolkata, intensity: 1.0 },
  { from: cities.bangalore, to: cities.chennai, intensity: 1.0 },
  { from: cities.hyderabad, to: cities.chennai, intensity: 0.95 },
  // =====================================================
  // INDIA → MIDDLE EAST / ASIA
  // =====================================================
  { from: cities.pune, to: cities.dubai, intensity: 1.15 },
  { from: cities.mumbai, to: cities.dubai, intensity: 1.3 },
  { from: cities.delhi, to: cities.dubai, intensity: 1.1 },
  { from: cities.pune, to: cities.singapore, intensity: 1.25 },
  { from: cities.bangalore, to: cities.singapore, intensity: 1.2 },
  { from: cities.hyderabad, to: cities.singapore, intensity: 1.05 },
  { from: cities.chennai, to: cities.singapore, intensity: 1.0 },
  { from: cities.pune, to: cities.tokyo, intensity: 1.05 },
  { from: cities.bangalore, to: cities.seoul, intensity: 1.0 },
  { from: cities.delhi, to: cities.tokyo, intensity: 0.95 },
  // =====================================================
  // INDIA → EUROPE
  // =====================================================
  { from: cities.pune, to: cities.london, intensity: 1.15 },
  { from: cities.delhi, to: cities.london, intensity: 1.2 },
  { from: cities.mumbai, to: cities.london, intensity: 1.1 },
  { from: cities.pune, to: cities.berlin, intensity: 0.95 },
  { from: cities.bangalore, to: cities.berlin, intensity: 1.0 },
  { from: cities.delhi, to: cities.paris, intensity: 0.95 },
  { from: cities.mumbai, to: cities.amsterdam, intensity: 0.95 },
  // =====================================================
  // INDIA → NORTH AMERICA
  // =====================================================
  { from: cities.pune, to: cities.sf, intensity: 1.3 },
  { from: cities.bangalore, to: cities.sf, intensity: 1.25 },
  { from: cities.hyderabad, to: cities.sf, intensity: 1.1 },
  { from: cities.pune, to: cities.ny, intensity: 1.15 },
  { from: cities.delhi, to: cities.ny, intensity: 1.1 },
  { from: cities.mumbai, to: cities.toronto, intensity: 1.0 },
  // =====================================================
  // INDIA → AUSTRALIA
  // =====================================================
  { from: cities.pune, to: cities.sydney, intensity: 1.0 },
  { from: cities.bangalore, to: cities.melbourne, intensity: 1.0 },
  { from: cities.chennai, to: cities.sydney, intensity: 0.95 },
  // =====================================================
  // INDIA → SOUTH AMERICA / AFRICA
  // =====================================================
  { from: cities.mumbai, to: cities.johannesburg, intensity: 0.9 },
  { from: cities.delhi, to: cities.saoPaulo, intensity: 0.85 },
  // =====================================================
  // WORLD-TO-WORLD BACKBONE ROUTES
  // (makes globe look richer and more global)
  // =====================================================
  { from: cities.london, to: cities.ny, intensity: 1.1 },
  { from: cities.london, to: cities.berlin, intensity: 0.9 },
  { from: cities.paris, to: cities.amsterdam, intensity: 0.85 },
  { from: cities.sf, to: cities.tokyo, intensity: 1.0 },
  { from: cities.sf, to: cities.sydney, intensity: 0.95 },
  { from: cities.ny, to: cities.london, intensity: 1.0 },
  { from: cities.singapore, to: cities.tokyo, intensity: 0.95 },
  { from: cities.singapore, to: cities.sydney, intensity: 1.0 },
  { from: cities.dubai, to: cities.london, intensity: 0.95 },
  { from: cities.tokyo, to: cities.seoul, intensity: 0.85 },
]