"use client"; 

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useApod } from "@/context/ApodContext";

export default function SingleApod() {
  const params = useParams();
  const router = useRouter();
  const { data } = useApod();
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0 && params?.id) {
      const foundApod = data.find((item) => String(item._id) === String(params.id));
      setApod(foundApod || null);
      setLoading(false);
    }
  }, [params, data]); // Re-run when params or data change

  // Show loading state while waiting for data
  if (loading) {
    return <div className="text-center text-white mt-20">Loading...</div>;
  }

  // If data is not found, show "APOD not found"
  if (!apod) {
    return (
      <div className="text-white text-center mt-20">
        <h2 className="text-2xl font-bold">APOD not found</h2>
        <button 
          onClick={() => router.push("/gallery")} 
          className="mt-4 px-6 py-2 bg-[#A294F9] text-black rounded-lg shadow-lg"
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  // Display the APOD details if data is found
  return (
    <div className="px-6 md:px-16 py-10 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#A294F9] text-center mb-6">
        {apod.title}
      </h1>

      <div className="flex justify-center mb-6">
        {apod.media_type === "image" ? (
          <img src={apod.url} alt={apod.title} className="rounded-lg shadow-lg w-full max-w-4xl" />
        ) : (
          <iframe
            src={apod.hdurl}
            title={apod.title}
            className="rounded-lg w-full max-w-3xl aspect-video"
            allowFullScreen
          />
        )}
      </div>

      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">{apod.explanation}</p>

      <div className="flex justify-center mt-6">
        <button 
          onClick={() => router.push("/gallery")} 
          className="px-6 py-2 bg-[#A294F9] hover:bg-[#CDC1FF] text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Back to Gallery
        </button>
      </div>
    </div>
  );
}