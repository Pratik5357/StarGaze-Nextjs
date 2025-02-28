"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
const ApodContext = createContext();

// Create Provider Component
export const ApodProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [todayApod, setTodayApod ] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/data/apod");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      setError("Failed to load APOD data.");
    } 
  };

  const gettodayApod = async () => {
    
    try {
      const res = await axios.get(`http://localhost:3000/api/data/todayApod`);
      setTodayApod(res.data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      setError("Failed to load APOD data.");
    }
  }
  

  useEffect(() => {
    getData();
    gettodayApod();
  }, []);

  return (
    <ApodContext.Provider value={{ data, todayApod, error }}>
      {children}
    </ApodContext.Provider>
  );
};

// Custom Hook for using Apod Context
export const useApod = () => useContext(ApodContext);