"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApod } from "@/context/ApodContext";

function getItemId(item) {
  return item.date || item._id || item.id;
}

function getImageSrc(item) {
  if (item.media_type === "image") return item.hdurl || item.url;
  return null;
}

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [apods, setApods] = useState([]);
  const { data, loading } = useApod();
  const router = useRouter();

  useEffect(() => {
    if (Array.isArray(data)) setApods(data);
  }, [data]);

  const filteredApods = apods.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="rail-line mb-6" aria-hidden />
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
          Archive Strip
        </h1>
        <p className="text-white/60 mb-8 max-w-xl">
          Scrub frame by frame. Each date is a select on the rail.
        </p>

        <input
          type="text"
          placeholder="SEARCH BY TITLE"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search archive"
          className="w-full max-w-md mb-10 px-4 py-3 bg-black border-2 border-white text-white placeholder-white/35 focus:outline-none focus:border-[#e85d04] label-caps text-sm"
        />

        {loading && filteredApods.length === 0 ? (
          <p className="label-caps text-white/40 py-16">LOADING STRIP…</p>
        ) : filteredApods.length > 0 ? (
          <div className="film-strip flex-wrap gap-y-6 pb-6">
            {filteredApods.map((item) => {
              const imageSrc = getImageSrc(item);
              const itemId = getItemId(item);

              return (
                <button
                  key={itemId}
                  type="button"
                  onClick={() => router.push(`/gallery/${itemId}`)}
                  className="film-frame w-[180px] sm:w-[200px]"
                  aria-label={item.title}
                >
                  <div className="film-frame-inner">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt=""
                        width={200}
                        height={150}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center label-caps text-[10px] text-white/50">
                        VIDEO
                      </div>
                    )}
                  </div>
                  <p className="label-caps text-[10px] mt-2 text-[#e85d04]">
                    {item.date}
                  </p>
                  <p className="text-xs uppercase mt-1 text-white/70 line-clamp-2 leading-snug">
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="label-caps text-white/40 py-16 text-center">
            {search ? `NO MATCH FOR "${search}"` : "NO FRAMES FOUND"}
          </p>
        )}
      </div>
    </div>
  );
}
