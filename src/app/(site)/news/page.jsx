"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function SpaceNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=24")
      .then((res) => setNews(res.data.results))
      .catch(() =>
        setError("Failed to load headlines. Check your connection and try again.")
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="label-caps text-white/40">LOADING HEADLINES…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 px-6">
        <p className="text-[#e85d04] text-center max-w-md">{error}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="label-caps px-6 py-3 bg-[#e85d04] text-black font-bold"
        >
          TRY AGAIN
        </button>
      </div>
    );
  }

  const [featured, ...rest] = news;

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="rail-line mb-6" aria-hidden />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Headlines
            </h1>
            <p className="mt-2 text-white/60">Hung trims from across the industry.</p>
          </div>
          <Link href="/" className="label-caps text-[#e85d04] hover:text-white">
            ← BACK TO SELECT
          </Link>
        </div>

        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hung-trim group grid grid-cols-1 md:grid-cols-2 mb-10"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image_url}
                alt={featured.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l-2 border-white">
              <time className="label-caps text-[#e85d04] text-[11px]">
                {new Date(featured.published_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-3 text-xl md:text-2xl font-bold uppercase text-white group-hover:text-[#e85d04] transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-white/70 line-clamp-4 leading-relaxed">
                {featured.summary}
              </p>
              <span className="mt-6 label-caps text-[#e85d04]">READ ARTICLE →</span>
            </div>
          </a>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hung-trim group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <time className="label-caps text-[10px] text-[#e85d04]">
                  {new Date(article.published_at).toLocaleDateString()}
                </time>
                <h3 className="mt-2 font-semibold uppercase text-sm leading-snug text-white group-hover:text-[#e85d04] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs text-white/50 line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
