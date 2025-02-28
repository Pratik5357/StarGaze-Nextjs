"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCalendarAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const FeaturedMissions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API}`
        );
        console.log(response.data);
        setMissions(response.data || []);
      } catch (error) {
        console.error("Error fetching NASA missions:", error);
      }
    };

    fetchMissions();
  }, []);

  return (
    <section className="py-10 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        <FontAwesomeIcon icon={faRocket} className="mr-3 text-[#A294F9]" />
        Upcoming Space Missions
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {missions.length > 0 ? (
          missions.map((mission, index) => (
            <div key={index} className="bg-[#1B1A55] p-4 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-semibold">{mission.title}</h3>
              <p className="text-gray-300 mt-2">{mission.description}</p>
              <div className="mt-4 flex items-center justify-center text-gray-400">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {mission.date}
              </div>
              <div className="mt-2 flex items-center justify-center text-gray-400">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                {mission.location}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No upcoming missions found.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedMissions;