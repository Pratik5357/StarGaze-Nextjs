"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const SpaceNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=24"
        );
        setNews(response.data.results);
        console.log(news)
      } catch (err) {
        setError("Failed to load space news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center contBox">
        <p className="text-gray-300 text-lg">Loading space news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center contBox">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto contBox selection:text-[#A294F9] selection:bg-white">
      <h2 className="text-4xl font-bold text-[#A294F9] text-center mb-16">
        Latest Space News
      </h2>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-md border border-white/20 text-white flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>

            {/* Summary */}
            <p className="text-sm text-gray-300 mt-2 line-clamp-3">
              {article.summary}
            </p>

            {/* Read More Button */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-[#A294F9] hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceNews;