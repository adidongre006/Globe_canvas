export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#58a6ff]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-[#8b949e] md:text-lg">{description}</p>
    </div>
  );
}