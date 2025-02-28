"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faSatellite, faGlobe, faMoon, faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import spaceMilestones from "../../../public/sample";

const SpaceTimeline = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    // Sort milestones by year (latest first)
    const sortedMilestones = [...spaceMilestones].sort((a, b) => b.year - a.year);
    setMilestones(sortedMilestones);
  }, []);

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-3">
        <FontAwesomeIcon icon={faRocket} className="text-[#A294F9]" />
        Space Exploration Timeline
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {milestones.length > 0 ? (
          milestones.map((event, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg w-80 h-32 shadow-lg backdrop-blur-md bg-white/10 border border-white/20 flex flex-col justify-between items-center ${
                event.agency === "ISRO" ? "border-[#34D1BF]" : "border-[#A294F9]"
              }`}
            >
              <FontAwesomeIcon icon={event.icon} className="text-2xl text-[#A294F9]" />
              <h3 className="text-sm font-semibold">{event.title}</h3>
              <p className="text-gray-300 text-xs">{event.year} - {event.agency}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Loading space milestones...</p>
        )}
      </div>
    </section>
  );
};

export default SpaceTimeline;