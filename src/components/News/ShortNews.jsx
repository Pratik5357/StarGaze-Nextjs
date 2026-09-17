"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function ShortNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/?limit=6")
      .then((res) => setNews(res.data.results))
      .catch((err) => console.error("News fetch failed:", err));
  }, []);

  return (
    <div className="px-4 md:px-10 py-10 max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="label-caps text-[#e85d04]">HUNG TRIMS</h2>
        <Link href="/news" className="label-caps text-white/60 hover:text-[#e85d04]">
          ALL HEADLINES →
        </Link>
      </div>

      {!news.length ? (
        <p className="label-caps text-white/40">LOADING HEADLINES…</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hung-trim group block"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold uppercase text-sm leading-snug text-white group-hover:text-[#e85d04] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 label-caps text-[10px] text-white/50">
                  {new Date(article.published_at).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
