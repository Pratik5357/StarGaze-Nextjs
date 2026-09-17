import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <SpaceBackground />
      <div className="relative min-h-dvh flex flex-col">
        <div className="perf-edge shrink-0" aria-hidden />
        <nav className="navbar shrink-0 border-b-2 border-[#e85d04] bg-black">
          <Navbar />
        </nav>
        <main className="site-main flex-1 min-h-0">{children}</main>
        <div className="perf-edge perf-edge-bottom shrink-0" aria-hidden />
        <footer className="shrink-0 border-t border-white/20 bg-black">
          <Footer />
        </footer>
      </div>
    </>
  );
}
