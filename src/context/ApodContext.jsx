"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const ApodContext = createContext({
  data: [],
  todayApod: null,
  error: null,
  loading: true,
  refresh: async () => {},
});

export const ApodProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [todayApod, setTodayApod] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadApodData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [archiveRes, todayRes] = await Promise.all([
        axios.get("/api/data/apod"),
        axios.get("/api/data/todayApod"),
      ]);

      if (Array.isArray(archiveRes.data)) {
        setData(archiveRes.data);
      }

      if (todayRes.data && !todayRes.data.error) {
        setTodayApod(todayRes.data);
      }
    } catch (err) {
      console.error("Error fetching APOD:", err);
      setError("Failed to load space imagery. Please refresh.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApodData();
  }, [loadApodData]);

  return (
    <ApodContext.Provider
      value={{ data, todayApod, error, loading, refresh: loadApodData }}
    >
      {children}
    </ApodContext.Provider>
  );
};

export const useApod = () => useContext(ApodContext);
