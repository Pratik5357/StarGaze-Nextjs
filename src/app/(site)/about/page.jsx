const facts = [
  {
    title: "Daily select",
    description: "NASA's Astronomy Picture of the Day, flagged on the rail each morning.",
  },
  {
    title: "Archive strip",
    description: "Scrub past frames by date. Search by title.",
  },
  {
    title: "Hung headlines",
    description: "Space industry news pinned below the bench.",
  },
];

export default function About() {
  return (
    <div className="px-4 md:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="rail-line mb-6" aria-hidden />
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
          About
        </h1>
        <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-prose">
          Stargaze is a daily cutting bench for space imagery. We pull NASA&apos;s
          Astronomy Picture of the Day and headlines from the Spaceflight News API
          into one place — one flagged frame, one strip, one pin board.
        </p>

        <div className="mt-14 grid gap-0 border-2 border-white">
          {facts.map((fact, i) => (
            <div
              key={fact.title}
              className={`p-6 md:p-8 ${i > 0 ? "border-t-2 border-white" : ""}`}
            >
              <h2 className="label-caps text-[#e85d04] mb-3">{fact.title}</h2>
              <p className="text-white/70 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
