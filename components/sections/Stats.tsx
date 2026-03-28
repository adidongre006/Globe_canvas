import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";

export default function Stats() {
  const stats = [
    { label: "Cities Connected", value: "18+" },
    { label: "Premium Route Arcs", value: "28+" },
    { label: "Render Smoothness", value: "60 FPS" },
    { label: "Deploy Ready", value: "100%" },
  ];

  return (
    <section id="stats" className="py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <GlassCard key={item.label} className="text-center">
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-[#8b949e]">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}