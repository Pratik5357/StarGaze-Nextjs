"use client"; // Next.js Client Component

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faRocket, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  const [contributions, setContributions] = useState([
    {
      id: 1,
      name: "John Doe",
      message: "Discovered a cool star cluster last night!",
      icon: faRocket,
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Captured a stunning view of the Milky Way!",
      icon: faUserAstronaut,
    },
  ]);

  const [newContribution, setNewContribution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContribution.trim()) return;

    const newEntry = {
      id: contributions.length + 1,
      name: "Anonymous",
      message: newContribution,
      icon: faCommentDots,
    };

    setContributions([newEntry, ...contributions]);
    setNewContribution("");
  };

  return (
    <section className="py-10 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Community Contributions
        </h2>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-lg flex gap-2 items-center"
        >
          <input
            type="text"
            placeholder="Share your discovery..."
            className="flex-1 p-2 bg-transparent border border-white/50 rounded-lg outline-none text-white placeholder-gray-300"
            value={newContribution}
            onChange={(e) => setNewContribution(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg">
            Submit
          </button>
        </form>

        {/* Contributions List */}
        <div className="mt-6 space-y-4">
          {contributions.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 flex items-center gap-4"
            >
              <FontAwesomeIcon icon={item.icon} className="text-2xl text-blue-400" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-300">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;