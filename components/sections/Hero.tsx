"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";
import GlowBadge from "../ui/GlowBadge";
import PrimaryButton from "../ui/PrimaryButton";
import GlobeCanvas from "../globe/GlobeCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="noise" />
      <div className="grid-overlay absolute inset-0 opacity-20" />

      <Container className="relative z-10 py-10 md:py-16">
        {/* <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <GlowBadge text="GitHub-style developer network visualization" />
        </motion.div> */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] ">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {/* <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Ship code from <span className="text-gradient">India to everywhere</span>
              </h1> */}

              {/* <p className="max-w-2xl text-base leading-7 text-[#8b949e] md:text-lg">
                A premium GitHub-inspired SaaS landing page with a realistic animated globe,
                moving data packets, and India-first developer connectivity.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-4">
              {/* <PrimaryButton>Launch Network</PrimaryButton> */}

              {/* <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10">
                View Routes
              </button> */}
            </div>

            {/* <div className="grid gap-4 sm:grid-cols-3">
              <GlassCard className="glow-blue">
                <p className="text-2xl font-semibold">28+</p>
                <p className="mt-1 text-sm text-[#8b949e]">Connected Routes</p>
              </GlassCard>

              <GlassCard className="glow-green">
                <p className="text-2xl font-semibold">Smooth</p>
                <p className="mt-1 text-sm text-[#8b949e]">Optimized Render</p>
              </GlassCard>

              <GlassCard>
                <p className="text-2xl font-semibold">V7</p>
                <p className="mt-1 text-sm text-[#8b949e]">Elite Build</p>
              </GlassCard>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <GlassCard className="p-2 md:p-4">
              <GlobeCanvas />
            </GlassCard>

            <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#1f6feb]/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-[#3fb950]/20 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
