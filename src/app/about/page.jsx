"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faImage, 
  faNewspaper, 
  faRocket, 
  faGlobe, 
  faSatellite, 
  faUser, 
  faEnvelope, 
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

const features = [
  { 
    title: "Astronomy Picture of the Day", 
    description: "Get breathtaking images from NASA's APOD collection daily.", 
    icon: faImage 
  },
  { 
    title: "Latest Space News", 
    description: "Stay updated with the latest discoveries and space missions.", 
    icon: faNewspaper 
  },
  { 
    title: "Exploring the Cosmos", 
    description: "Learn about celestial bodies, black holes, and distant galaxies.", 
    icon: faRocket 
  },
  { 
    title: "Space Missions", 
    description: "Track upcoming and past space missions from around the world.", 
    icon: faSatellite 
  },
  { 
    title: "Global Space Community", 
    description: "Join a community of space enthusiasts and share your passion.", 
    icon: faGlobe 
  },
];

export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset confirmation after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="px-6 md:px-20 py-16 text-white flex flex-col items-center selection:text-[#A294F9] selection:bg-white">
      
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-[#A294F9]">About Stargaze</h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover the wonders of the universe with real-time data, images, and news.
          Our goal is to bring space exploration closer to you.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white/20 w-80"
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-[#A294F9]" />
            <h2 className="text-xl font-semibold mt-4 text-center">{feature.title}</h2>
            <p className="text-gray-300 mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="mt-16 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-[#A294F9]">Contact Us</h2>
        <p className="text-gray-300 mt-2">Have questions? Reach out to us using the form below.</p>

        <div className="w-full max-w-lg p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 mt-6">
          {success && <p className="text-green-400 text-center mb-4">Message sent successfully!</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-white/20">
              <FontAwesomeIcon icon={faUser} className="text-white mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-white/20">
              <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* Message Field */}
            <div className="border border-gray-400 rounded-md px-3 py-2 bg-white/20">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#A294F9] hover:bg-[#CDC1FF] text-black font-semibold py-2 px-4 rounded-md shadow-lg transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}