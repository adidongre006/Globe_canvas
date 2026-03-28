import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

export default function Features() {
  const features = [
    {
      title: "GitHub-style Glow Routes",
      desc: "Curved route arcs with layered glow and premium visual depth.",
    },
    {
      title: "Moving Data Packets",
      desc: "Smooth animated packets flowing between cities in both directions.",
    },
    {
      title: "India-Centered Network",
      desc: "Pune and Nagpur as strong hub nodes with domestic and global reach.",
    },
    {
      title: "SaaS Landing Ready",
      desc: "Modern hero, stats, CTA and deployable app structure.",
    },
    {
      title: "Performance Friendly",
      desc: "Mobile-aware rendering and optimized route generation.",
    },
    {
      title: "Fully Reusable",
      desc: "Modular architecture so you can plug the globe into any Next.js app.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Built like a premium dev product"
          description="Not just a spinning earth. This is a reusable, scalable, visually polished SaaS-grade globe system."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title}>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#8b949e]">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}