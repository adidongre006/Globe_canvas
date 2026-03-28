import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-sm text-[#8b949e]">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>© 2026 GitHub Globe Pro V7 Elite</p>
        <p>Built with Next.js, Three.js and premium dev energy.</p>
      </Container>
    </footer>
  );
}