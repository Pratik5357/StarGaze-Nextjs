"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useApod } from "@/context/ApodContext";
import FilmStrip from "@/components/FilmStrip";

function findApod(items, id) {
  return items.find(
    (item) =>
      String(item._id) === String(id) ||
      String(item.id) === String(id) ||
      item.date === id
  );
}

export default function SingleApod() {
  const params = useParams();
  const router = useRouter();
  const { data, loading: contextLoading } = useApod();
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    const fromContext = findApod(data, params.id);
    if (fromContext) {
      setApod(fromContext);
      setLoading(false);
      return;
    }

    if (!contextLoading) {
      axios
        .get(`/api/data/apod/${params.id}`)
        .then((res) => {
          if (res.data && !res.data.error) setApod(res.data);
        })
        .catch((err) => console.error("Failed to load APOD:", err))
        .finally(() => setLoading(false));
    }
  }, [params, data, contextLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="label-caps text-white/40">LOADING FRAME…</p>
      </div>
    );
  }

  if (!apod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 px-6">
        <h2 className="text-2xl font-bold uppercase text-white">Frame not found</h2>
        <button
          type="button"
          onClick={() => router.push("/gallery")}
          className="label-caps px-6 py-3 bg-[#e85d04] text-black font-bold"
        >
          BACK TO STRIP
        </button>
      </div>
    );
  }

  const imageSrc =
    apod.media_type === "image" ? apod.hdurl || apod.url : null;

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => router.push("/gallery")}
          className="label-caps text-[#e85d04] hover:text-white mb-8 transition-colors"
        >
          ← BACK TO STRIP
        </button>

        <article className="grid lg:grid-cols-2 gap-0 border-2 border-white mb-12">
          <div className="film-window">
            <div className="tape-flag tape-flag-active" aria-hidden />
            <div className="perf-edge" aria-hidden />
            <div className="relative aspect-[4/3] bg-black">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={apod.title}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <iframe
                  src={apod.url}
                  title={apod.title}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
            <div className="perf-edge perf-edge-bottom" aria-hidden />
          </div>

          <div className="p-6 md:p-8 bg-black text-white lg:border-l-2 border-white">
            <h1 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
              {apod.title}
            </h1>
            <p className="mt-3 label-caps text-[#e85d04]">{apod.date}</p>
            <p className="mt-6 text-white/80 leading-relaxed max-w-prose">
              {apod.explanation}
            </p>
            <p className="mt-8 pt-4 border-t border-white/20 label-caps text-white/50 text-[11px]">
              CREDIT: {apod.copyright || "NASA / PUBLIC DOMAIN"}
            </p>
          </div>
        </article>

        <h2 className="label-caps text-white mb-4">ADJACENT FRAMES</h2>
        <FilmStrip limit={16} activeId={apod.date} />
      </div>
    </div>
  );
}
