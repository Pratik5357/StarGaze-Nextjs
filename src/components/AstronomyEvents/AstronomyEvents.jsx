"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faSun, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AstronomyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/DONKI/CME?api_key=${process.env.NEXT_PUBLIC_NASA_API}`
        );

        const formattedEvents = response.data.slice(0, 5).map((event) => ({
          title: event.note || "Solar Event",
          date: event.startTime.split("T")[0],
          description:
            event.cmeAnalyses?.[0]?.note || "A coronal mass ejection detected.",
          icon: faSun,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-3">
        <FontAwesomeIcon icon={faStar} className="text-[#A294F9]" />
        Astronomy Events Calendar
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="p-3 rounded-lg w-100 h-120 shadow-lg backdrop-blur-md bg-white/10 border border-white/20 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={event.icon}
                  className="text-2xl text-[#A294F9]"
                />
                <h3 className="text-sm font-semibold">{event.title}</h3>
              </div>
              <p className="text-gray-300 text-xs">{event.date}</p>
              <p className="text-xs text-gray-400">{event.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Loading events...</p>
        )}
      </div>
    </section>
  );
};

export default AstronomyEvents;