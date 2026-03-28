import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0d1117]/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          GitHub Globe <span className="text-[#58a6ff]">Pro</span>
        </div>

        <nav className="hidden gap-6 text-sm text-[#8b949e] md:flex">
          <a href="#stats" className="hover:text-white transition">Stats</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#deploy" className="hover:text-white transition">Deploy</a>
        </nav>

        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">
          Launch
        </button>
      </Container>
    </header>
  );
}