export default function Footer() {
  return (
    <div className="h-full flex items-center justify-between px-4 md:px-10 label-caps text-white/40">
      <span>© {new Date().getFullYear()} STARGAZE</span>
      <span className="hidden sm:inline">NASA APOD · SPACE NEWS</span>
    </div>
  );
}
