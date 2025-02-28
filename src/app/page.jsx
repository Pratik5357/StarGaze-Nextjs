import Apod from "@/components/apod/Apod";
import AstronomyEvents from "@/components/AstronomyEvents/AstronomyEvents";
import Community from "@/components/community/Community";
import Hero from "@/components/Hero";
import FeaturedMissions from "@/components/missions/FeaturedMissions";
import ShortNews from "@/components/News/ShortNews";
import SpaceTimeline from "@/components/timeline/SpaceTimeline";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="relative px-20 py-6 max-md:px-6 selection:text-[#A294F9] selection:bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[650px] flex justify-center items-center">
        <Hero />

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-1 animate-bounce">
          <p className="text-gray-300 text-sm">Scroll Down</p>
          <ChevronDown size={24} className="text-[#A294F9]" />
        </div>
      </div>

      {/* APOD Section */}
      <div className="w-full flex flex-col gap-3 mt-16">
        <h1 className="text-4xl font-bold text-[#A294F9] text-center selection:text-white selection:bg-[#A294F9]">Astronomy Picture of the Day</h1>
        <Apod />
      </div>

      <div className="w-full my-12">
        <ShortNews/>
      </div>

      <div>
        <FeaturedMissions/>
      </div>

      <div>
        <AstronomyEvents/>
      </div>

      <div>
        <SpaceTimeline/>
      </div>

      <div>
        <Community/>
      </div>
    </div>
  );
}