"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApod } from "@/context/ApodContext";

function getImageSrc(item) {
  if (item.media_type === "image") return item.hdurl || item.url;
  return null;
}

function getItemId(item) {
  return item.date || item._id || item.id;
}

export default function FilmStrip({ limit = 20, activeId }) {
  const { data, loading, todayApod } = useApod();
  const router = useRouter();
  const items = Array.isArray(data) ? data.slice(0, limit) : [];
  const flaggedDate = activeId || todayApod?.date;

  if (loading && items.length === 0) {
    return <p className="label-caps text-white/40">LOADING STRIP…</p>;
  }

  return (
    <div className="film-strip pb-4 -mx-4 px-4 md:-mx-0 md:px-0">
      {items.map((item) => {
        const imageSrc = getImageSrc(item);
        const itemId = getItemId(item);
        const isActive = item.date === flaggedDate;

        return (
          <button
            key={itemId}
            type="button"
            onClick={() => router.push(`/gallery/${itemId}`)}
            className={`film-frame ${isActive ? "film-frame--active" : ""}`}
            aria-label={item.title}
          >
            <div className="film-frame-inner">
              {isActive && <div className="tape-flag tape-flag-active" aria-hidden />}
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
            <p className="label-caps text-[10px] mt-2 text-white/60 truncate">
              {item.date}
            </p>
          </button>
        );
      })}
    </div>
  );
}
