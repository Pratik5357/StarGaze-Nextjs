import Hero from "@/components/Hero";
import Apod from "@/components/apod/Apod";
import ShortNews from "@/components/News/ShortNews";
import FilmStrip from "@/components/FilmStrip";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="px-4 md:px-10 py-10 border-t-2 border-[#e85d04]">
        <div className="max-w-6xl mx-auto">
          <h2 className="label-caps text-[#e85d04] mb-6">CAPTION WINDOW</h2>
          <Apod />
        </div>
      </section>

      <section className="px-4 md:px-10 py-10 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="label-caps text-white mb-6">RECENT SELECTS</h2>
          <FilmStrip limit={12} />
        </div>
      </section>

      <section className="border-t border-white/20">
        <ShortNews />
      </section>
    </div>
  );
}
