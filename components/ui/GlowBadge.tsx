export default function GlowBadge({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-[#58a6ff]/20 bg-[#58a6ff]/10 px-4 py-2 text-xs font-medium text-[#c9d1d9] shadow-[0_0_30px_rgba(88,166,255,0.15)]">
      {text}
    </div>
  );
}