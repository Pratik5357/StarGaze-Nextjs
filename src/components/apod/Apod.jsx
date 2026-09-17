"use client";

import Image from "next/image";
import { useApod } from "@/context/ApodContext";

export default function Apod() {
  const { todayApod, loading } = useApod();

  if (loading && !todayApod) {
    return <p className="label-caps text-white/40 py-8">LOADING CAPTION…</p>;
  }

  if (!todayApod) {
    return (
      <p className="label-caps text-white/40 py-8">
        TODAY&apos;S FRAME COULD NOT BE LOADED
      </p>
    );
  }

  const imageSrc =
    todayApod.media_type === "image"
      ? todayApod.hdurl || todayApod.url
      : null;

  return (
    <article className="grid lg:grid-cols-2 gap-0 border-2 border-white">
      <div className="film-window">
        <div className="perf-edge" aria-hidden />
        <div className="relative aspect-[4/3] bg-black">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={todayApod.title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
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

      <div className="p-6 md:p-8 bg-black text-white border-l-0 lg:border-l-2 border-white">
        <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight">
          {todayApod.title}
        </h3>
        <p className="mt-3 label-caps text-[#e85d04]">{todayApod.date}</p>
        <p className="mt-6 text-white/80 leading-relaxed max-w-prose">
          {todayApod.explanation}
        </p>
        <p className="mt-8 pt-4 border-t border-white/20 label-caps text-white/50 text-[11px]">
          CREDIT: {todayApod.copyright || "NASA / PUBLIC DOMAIN"}
        </p>
      </div>
    </article>
  );
}
