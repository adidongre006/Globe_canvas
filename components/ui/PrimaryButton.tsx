export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-2xl bg-[#238636] px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(63,185,80,0.22)] transition hover:scale-[1.02] hover:bg-[#2ea043]">
      {children}
    </button>
  );
}