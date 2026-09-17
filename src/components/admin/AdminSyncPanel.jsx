"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function getThumb(item) {
  if (item.media_type === "image") return item.hdurl || item.url;
  return null;
}

export default function AdminSyncPanel({ onSynced }) {
  const [syncMode, setSyncMode] = useState("count");
  const [count, setCount] = useState(30);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [singleDate, setSingleDate] = useState("");
  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState([]);
  const [selected, setSelected] = useState(() => new Set());
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const selectAllRef = useRef(null);

  const previewDates = preview.map((item) => item.date);
  const selectedOnPage = previewDates.filter((date) => selected.has(date));
  const allSelected =
    preview.length > 0 && selectedOnPage.length === preview.length;
  const someSelected =
    selectedOnPage.length > 0 && selectedOnPage.length < preview.length;

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someSelected;
    }
  }, [someSelected, preview]);

  const buildFetchPayload = () => {
    const payload = { mode: syncMode };
    if (syncMode === "count") payload.count = count;
    if (syncMode === "range") {
      payload.startDate = startDate;
      payload.endDate = endDate;
    }
    if (syncMode === "date") payload.date = singleDate;
    return payload;
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    setFetching(true);
    setMessage("");
    setError("");
    setPreview([]);
    setSelected(new Set());

    try {
      const res = await axios.post("/api/admin/sync/fetch", buildFetchPayload());
      const items = res.data.items || [];
      setPreview(items);
      setSelected(new Set(items.map((item) => item.date)));
      setMessage(
        items.length
          ? `Fetched ${items.length} record${items.length === 1 ? "" : "s"} from NASA. Select entries to save.`
          : "No records returned for this query."
      );
    } catch (err) {
      setError(err.response?.data?.error || "Fetch failed.");
    } finally {
      setFetching(false);
    }
  };

  const toggleSelect = (date) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(date)) next.delete(date);
      else next.add(date);
      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        previewDates.forEach((date) => next.delete(date));
      } else {
        previewDates.forEach((date) => next.add(date));
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const handleSave = async () => {
    const items = preview.filter((item) => selected.has(item.date));
    if (!items.length) return;

    const confirmed = window.confirm(
      `Save ${items.length} selected record${items.length === 1 ? "" : "s"} to the database?`
    );
    if (!confirmed) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const res = await axios.post("/api/admin/sync/save", { items });
      setMessage(
        `Saved ${res.data.saved} — ${res.data.inserted} new, ${res.data.updated} updated (${res.data.total} total).`
      );

      setPreview((current) =>
        current.map((item) =>
          selected.has(item.date) ? { ...item, inDatabase: true } : item
        )
      );
      setSelected(new Set());
      onSynced?.();
    } catch (err) {
      setError(err.response?.data?.error || "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const busy = fetching || saving;

  return (
    <section className="admin-panel admin-import" aria-label="Import from NASA">
      <form onSubmit={handleFetch} className="admin-sync-form">
        <fieldset className="admin-sync-modes" disabled={busy}>
          <legend>Import mode</legend>
          <label className="admin-sync-mode">
            <input
              type="radio"
              name="mode"
              checked={syncMode === "count"}
              onChange={() => setSyncMode("count")}
            />
            Last N days
          </label>
          <label className="admin-sync-mode">
            <input
              type="radio"
              name="mode"
              checked={syncMode === "range"}
              onChange={() => setSyncMode("range")}
            />
            Date range
          </label>
          <label className="admin-sync-mode">
            <input
              type="radio"
              name="mode"
              checked={syncMode === "date"}
              onChange={() => setSyncMode("date")}
            />
            Single date
          </label>
        </fieldset>

        <div className="admin-sync-fields">
          {syncMode === "count" && (
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              aria-label="Number of days"
              className="admin-field"
              disabled={busy}
            />
          )}

          {syncMode === "range" && (
            <>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                aria-label="Start date"
                className="admin-field admin-field--wide"
                required
                disabled={busy}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                aria-label="End date"
                className="admin-field admin-field--wide"
                required
                disabled={busy}
              />
            </>
          )}

          {syncMode === "date" && (
            <input
              type="date"
              value={singleDate}
              onChange={(e) => setSingleDate(e.target.value)}
              aria-label="Date"
              className="admin-field"
              required
              disabled={busy}
            />
          )}
        </div>

        <button type="submit" disabled={busy} className="admin-sync-btn admin-sync-btn--fetch">
          {fetching ? "Fetching…" : "Fetch"}
        </button>
      </form>

      {preview.length > 0 && (
        <div className="admin-import-preview">
          <div className="admin-import-preview__bar">
            <span className="admin-table-count">
              {preview.length} fetched
              {selected.size > 0 && (
                <span className="admin-table-selected"> · {selected.size} selected</span>
              )}
            </span>

            {selected.size > 0 && (
              <div className="admin-table-bulk">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || fetching}
                  className="admin-table-bulk__delete"
                >
                  {saving ? "Saving…" : `Save ${selected.size}`}
                </button>
                <button
                  type="button"
                  onClick={clearSelection}
                  disabled={saving}
                  className="admin-table-bulk__clear"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          <div className="admin-import-preview__scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th className="w-10">
                    <input
                      ref={selectAllRef}
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                      aria-label="Select all fetched records"
                      className="admin-table-checkbox"
                      disabled={busy}
                    />
                  </th>
                  <th className="w-16">Frame</th>
                  <th className="w-28">Date</th>
                  <th>Title</th>
                  <th className="w-20">Type</th>
                  <th className="w-24">Status</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((item) => {
                  const thumb = getThumb(item);
                  const isSelected = selected.has(item.date);

                  return (
                    <tr
                      key={item.date}
                      className={isSelected ? "admin-table-row--selected" : ""}
                    >
                      <td>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelect(item.date)}
                          aria-label={`Select ${item.title}`}
                          className="admin-table-checkbox"
                          disabled={busy}
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
                      <td>
                        <span
                          className={
                            item.inDatabase
                              ? "admin-import-status admin-import-status--saved"
                              : "admin-import-status"
                          }
                        >
                          {item.inDatabase ? "In DB" : "New"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {message && (
        <p className="admin-sync-feedback admin-sync-feedback--ok">{message}</p>
      )}
      {error && (
        <p className="admin-sync-feedback admin-sync-feedback--err">{error}</p>
      )}
    </section>
  );
}
