"use client";

import Image from "next/image";
import Link from "next/link";
import { useApod } from "@/context/ApodContext";

function getImageSrc(apod) {
  if (!apod) return null;
  if (apod.media_type === "image") return apod.hdurl || apod.url;
  return null;
}

export default function Hero() {
  const { todayApod, loading, error } = useApod();
  const imageSrc = getImageSrc(todayApod);

  return (
    <section className="px-4 md:px-10 pt-8 md:pt-12 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="rail-line mb-6" aria-hidden />

        <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
          <div className="film-window">
            <div className="tape-flag tape-flag-active" aria-hidden />
            <div className="perf-edge" aria-hidden />
            <div className="relative aspect-[16/10] bg-black">
              {loading && !imageSrc && (
                <div className="absolute inset-0 flex items-center justify-center label-caps text-white/50 bg-black">
                  LOADING FRAME…
                </div>
              )}
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={todayApod?.title || "Today's astronomy picture"}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              )}
              {!loading && todayApod?.media_type === "video" && todayApod?.url && (
                <iframe
                  src={todayApod.url}
                  title={todayApod.title}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
            <div className="perf-edge perf-edge-bottom" aria-hidden />
          </div>

          <div className="flex flex-col gap-6 text-white">
            <div>
              <p className="label-caps text-[#e85d04] mb-2">FLAGGED FRAME</p>
              <h1 className="text-2xl md:text-3xl font-bold uppercase leading-tight tracking-tight">
                {todayApod?.title || "Awaiting today's select"}
              </h1>
              {todayApod?.date && (
                <p className="mt-3 label-caps text-white/60">{todayApod.date}</p>
              )}
            </div>

            {todayApod?.explanation && (
              <p className="text-base leading-relaxed text-white/80 line-clamp-6 max-w-prose">
                {todayApod.explanation}
              </p>
            )}

            {error && <p className="text-sm text-[#e85d04]">{error}</p>}

            <div className="flex flex-col gap-3 mt-2">
              <Link
                href="/gallery"
                className="label-caps text-center py-3 bg-[#e85d04] text-black font-bold hover:bg-[#ff7a1a] transition-colors"
              >
                SCRUB ARCHIVE
              </Link>
              <Link
                href="/news"
                className="label-caps text-center py-3 border-2 border-white text-white hover:border-[#e85d04] hover:text-[#e85d04] transition-colors"
              >
                HEADLINES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
