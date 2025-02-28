"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useApod } from "@/context/ApodContext";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [apods, setApods] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const { data } = useApod();
  const router = useRouter();

  useEffect(() => {
    if (Array.isArray(data)) {
      setApods(data);
    }
  }, [data]);

  // Filter APODs based on search query
  const filteredApods = apods.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 md:px-16 py-10 text-white min-h-screen">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-[#A294F9] text-center mb-8">
        Stargaze Gallery
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A294F9]"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* APOD Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredApods.length > 0 ? (
          filteredApods.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/5 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              {/* Image or Video */}
              <div className="p-4">
                {item.media_type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                ) : (
                  isClient && ( // Only render the iframe on the client
                    <div className="relative w-full h-56">
                      <iframe
                        src={item.url}
                        title={item.title}
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  )
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-300 text-sm mt-2 flex-grow line-clamp-3">
                  {item.explanation}
                </p>
              </div>

              {/* Button */}
              <div className="p-4">
                <button
                  onClick={() => router.push(`/gallery/${item._id}`)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#A294F9] hover:bg-[#CDC1FF] text-black font-semibold rounded-lg shadow-lg transition-all duration-300 group"
                >
                  View Details
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg col-span-full">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
