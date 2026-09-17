"use client";

export default function DomeAmbient({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#0a0e1a]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(232, 168, 73, 0.12) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(196, 30, 58, 0.08) 0%, transparent 70%)",
        }}
      />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full text-[#e8a849]/20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "min(18vh, 140px)" }}
      >
        <path
          d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
      {[...Array(48)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#f5f0e8]"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            left: `${(i * 17 + 3) % 100}%`,
            top: `${(i * 23 + 7) % 55}%`,
            opacity: 0.15 + (i % 5) * 0.08,
          }}
        />
      ))}
    </div>
  );
}
