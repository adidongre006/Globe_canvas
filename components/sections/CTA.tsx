import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";
import PrimaryButton from "../ui/PrimaryButton";

export default function CTA() {
  return (
    <section id="deploy" className="py-24">
      <Container>
        <GlassCard className="glow-blue text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
           
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8b949e] md:text-lg">
            Push it to GitHub, import into Vercel, and launch your preminpmimated developer network.
          </p>

          <div className="mt-8 flex justify-center">
            <PrimaryButton>Deploy Now</PrimaryButton>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}