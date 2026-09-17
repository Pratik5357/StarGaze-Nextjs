"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

function getThumb(item) {
  if (item.media_type === "image") return item.hdurl || item.url;
  return null;
}

export default function AdminApodTable({ onRecordsChange }) {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, filteredTotal: 0, pages: 1 });
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const [selected, setSelected] = useState(() => new Set());
  const [error, setError] = useState("");
  const selectAllRef = useRef(null);

  const loadRecords = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/apods", {
        params: { q: query, page, limit: 20 },
      });
      setRecords(res.data.items || []);
      setMeta({
        total: res.data.total,
        filteredTotal: res.data.filteredTotal,
        pages: res.data.pages,
      });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to load records.");
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(search);
      setPage(1);
      setSelected(new Set());
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const pageDates = records.map((item) => item.date);
  const selectedOnPage = pageDates.filter((date) => selected.has(date));
  const allPageSelected =
    records.length > 0 && selectedOnPage.length === records.length;
  const somePageSelected =
    selectedOnPage.length > 0 && selectedOnPage.length < records.length;

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = somePageSelected;
    }
  }, [somePageSelected, records]);

  const toggleSelect = (date) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(date)) next.delete(date);
      else next.add(date);
      return next;
    });
  };

  const toggleSelectAllPage = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allPageSelected) {
        pageDates.forEach((date) => next.delete(date));
      } else {
        pageDates.forEach((date) => next.add(date));
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const handleDelete = async (date, title) => {
    const confirmed = window.confirm(
      `Delete APOD for ${date}?\n\n"${title}"\n\nThis cannot be undone.`
    );
    if (!confirmed) return;

    setDeleting(date);
    setError("");
    try {
      await axios.delete(`/api/admin/apods/${date}`);
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(date);
        return next;
      });
      await loadRecords();
      onRecordsChange?.();
    } catch (err) {
      setError(err.response?.data?.error || "Delete failed.");
    } finally {
      setDeleting(null);
    }
  };

  const handleBulkDelete = async () => {
    const dates = [...selected];
    if (!dates.length) return;

    const confirmed = window.confirm(
      `Delete ${dates.length} selected record${dates.length === 1 ? "" : "s"}?\n\nThis cannot be undone.`
    );
    if (!confirmed) return;

    setBulkDeleting(true);
    setError("");
    try {
      const res = await axios.delete("/api/admin/apods", { data: { dates } });
      setSelected(new Set());
      await loadRecords();
      onRecordsChange?.();
      if (res.data.deleted < dates.length) {
        setError(
          `Deleted ${res.data.deleted} of ${dates.length} selected — some records were already removed.`
        );
      }
    } catch (err) {
      setError(err.response?.data?.error || "Bulk delete failed.");
    } finally {
      setBulkDeleting(false);
    }
  };

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    setSelected(new Set());
  };

  return (
    <section className="admin-table-section" aria-label="Archive records">
      <div className="admin-table-toolbar">
        <span className="admin-table-count">
          {meta.filteredTotal} of {meta.total}
          {selected.size > 0 && (
            <span className="admin-table-selected"> · {selected.size} selected</span>
          )}
        </span>

        {selected.size > 0 && (
          <div className="admin-table-bulk">
            <button
              type="button"
              onClick={handleBulkDelete}
              disabled={bulkDeleting || loading}
              className="admin-table-bulk__delete"
            >
              {bulkDeleting ? "Deleting…" : `Delete ${selected.size}`}
            </button>
            <button
              type="button"
              onClick={clearSelection}
              disabled={bulkDeleting}
              className="admin-table-bulk__clear"
            >
              Clear
            </button>
          </div>
        )}

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search title, date, text…"
          aria-label="Search APOD records"
          className="admin-table-toolbar__search"
        />
      </div>

      {error && <p className="admin-table-error">{error}</p>}

      {loading ? (
        <div className="admin-table-empty">Loading records…</div>
      ) : records.length === 0 ? (
        <div className="admin-table-empty">
          {query ? `No records match "${query}".` : "No records in the database yet."}
        </div>
      ) : (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th className="w-10">
                  <input
                    ref={selectAllRef}
                    type="checkbox"
                    checked={allPageSelected}
                    onChange={toggleSelectAllPage}
                    aria-label="Select all on this page"
                    className="admin-table-checkbox"
                  />
                </th>
                <th className="w-16">Frame</th>
                <th className="w-28">Date</th>
                <th>Title</th>
                <th className="w-20">Type</th>
                <th className="w-24 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item) => {
                const thumb = getThumb(item);
                const isSelected = selected.has(item.date);
                const isDeleting = deleting === item.date || bulkDeleting;

                return (
                  <tr key={item.date} className={isSelected ? "admin-table-row--selected" : ""}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(item.date)}
                        aria-label={`Select ${item.title}`}
                        className="admin-table-checkbox"
                        disabled={isDeleting}
                      />
                    </td>
                    <td>
                      <div className="admin-table-thumb">
                        {thumb ? (
                          <Image
                            src={thumb}
                            alt=""
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="48px"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-[9px] text-white/35">
                            VID
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="admin-table-date">{item.date}</td>
                    <td>
                      <p className="admin-table-title">{item.title}</p>
                      <p className="admin-table-excerpt">{item.explanation}</p>
                    </td>
                    <td className="admin-table-type">{item.media_type}</td>
                    <td className="text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(item.date, item.title)}
                        disabled={isDeleting}
                        className="admin-table-delete"
                      >
                        {deleting === item.date ? "…" : "Delete"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {meta.pages > 1 && (
        <div className="admin-pagination">
          <button
            type="button"
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page <= 1 || loading}
          >
            Previous
          </button>
          <span>{page} / {meta.pages}</span>
          <button
            type="button"
            onClick={() => handlePageChange(Math.min(meta.pages, page + 1))}
            disabled={page >= meta.pages || loading}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
