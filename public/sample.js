import { faRocket, faSatellite, faGlobe, faMoon, faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

const spaceMilestones = [
  // 🚀 ISRO Milestones
  { agency: "ISRO", year: "1975", title: "First Indian Satellite (Aryabhata) Launched", icon: faSatellite },
  { agency: "ISRO", year: "1980", title: "Rohini Satellite Launched by SLV", icon: faRocket },
  { agency: "ISRO", year: "2008", title: "Chandrayaan-1 Discovers Water on Moon", icon: faMoon },
  { agency: "ISRO", year: "2013", title: "Mangalyaan (Mars Orbiter Mission) Success", icon: faSpaceShuttle },
  { agency: "ISRO", year: "2019", title: "Chandrayaan-2 Lunar Mission", icon: faMoon },
  { agency: "ISRO", year: "2023", title: "Chandrayaan-3 Lands on Moon's South Pole", icon: faMoon },
  { agency: "ISRO", year: "2023", title: "Aditya-L1 Launched to Study the Sun", icon: faGlobe },

  // 🚀 NASA Milestones
  { agency: "NASA", year: "1969", title: "Apollo 11 - First Humans on the Moon", icon: faMoon },
  { agency: "NASA", year: "1977", title: "Voyager 1 & 2 Launched", icon: faSatellite },
  { agency: "NASA", year: "1990", title: "Hubble Space Telescope Launched", icon: faGlobe },
  { agency: "NASA", year: "1997", title: "Pathfinder Lands on Mars", icon: faRocket },
  { agency: "NASA", year: "2004", title: "Spirit & Opportunity Rovers on Mars", icon: faRocket },
  { agency: "NASA", year: "2011", title: "Curiosity Rover Lands on Mars", icon: faRocket },
  { agency: "NASA", year: "2021", title: "Perseverance Rover Lands on Mars", icon: faRocket },
  { agency: "NASA", year: "2021", title: "James Webb Space Telescope Launched", icon: faSpaceShuttle },
];

export default spaceMilestones;