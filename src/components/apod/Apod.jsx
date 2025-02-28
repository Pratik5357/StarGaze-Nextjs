"use client";

import Image from "next/image";
import { useApod } from "@/context/ApodContext";

const Apod = () => {
  const { todayApod } = useApod();

  if (!todayApod) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-300 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 px-4 py-10 max-md:py-20">
      {/* Media Container */}
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-60 md:h-80 lg:h-96">
        {/* Conditionally Render Image or Video */}
        {todayApod.media_type === "image" ? (
          <Image
            src={todayApod.hdurl}
            alt={todayApod.title}
            fill
            className="rounded-lg min-h-[600px] max-md:min-h-[250px] shadow-lg border border-white/20"
            priority
            unoptimized
          />
        ) : todayApod.media_type === "video" ? (
          <iframe
            src={todayApod.url}
            title={todayApod.title}
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg border border-white/20"
          />
        ) : (
          <p className="text-gray-300 text-lg">Unsupported Media Type</p>
        )}
      </div>

      {/* APOD Details */}
      <div className="w-full max-w-md md:max-w-lg bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-xl border border-white/20 text-white">
        <h2 className="text-3xl font-bold text-[#A294F9] selection:text-white selection:bg-[#A294F9]">
          {todayApod.title}
        </h2>
        <p className="text-sm text-gray-400 mt-2">{todayApod.date}</p>
        <p className="text-gray-300 mt-4">{todayApod.explanation}</p>

        {/* NASA Credit */}
        <p className="text-gray-400 text-sm mt-4">
          <span className="font-semibold">Credit:</span> {todayApod.copyright || "NASA / Public Domain"}
        </p>
      </div>
    </div>
  );
};

export default Apod;