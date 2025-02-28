"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const ShortNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=6"
        );
        setNews(response.data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  if (!news.length) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-300 text-lg">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-10 max-md:px-6">
      <h1 className="text-4xl font-bold text-[#A294F9] text-center mb-16">
        Latest Space News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <div key={article.id} className="bg-white/10 p-4 rounded-lg shadow-lg border border-white/20">
            {/* News Image */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* News Content */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-white">{article.title}</h2>
              <p className="text-sm text-gray-400 mt-1">{new Date(article.published_at).toDateString()}</p>
              <p className="text-gray-300 mt-2 text-sm">{article.summary.slice(0, 100)}...</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A294F9] hover:underline mt-3 block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortNews;