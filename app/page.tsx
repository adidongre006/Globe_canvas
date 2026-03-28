import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import GlobeNew from "@/components/globenew/GridGlobe"

export default function Home() {
  return (
    <main className="min-h-screen grid relative   text-white">
      {/* <Navbar /> */}
      <Hero />

      <GlobeNew/>
      {/* <Stats /> */}
      {/* <Features /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}