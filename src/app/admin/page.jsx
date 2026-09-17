"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminApodTable from "@/components/admin/AdminApodTable";
import AdminSyncPanel from "@/components/admin/AdminSyncPanel";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "import", label: "Import" },
  { id: "archive", label: "Archive" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tableKey, setTableKey] = useState(0);

  const loadStats = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/stats");
      setStats(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to load stats.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const handleLogout = async () => {
    await axios.post("/api/admin/logout");
    router.push("/admin/login");
    router.refresh();
  };

  const refreshAll = () => {
    loadStats();
    setTableKey((k) => k + 1);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-toolbar">
        <nav className="admin-toolbar__tabs" aria-label="Dashboard sections">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className="admin-toolbar__tab"
              aria-selected={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <div className="admin-toolbar__actions">
          <Link href="/" className="admin-toolbar__action">
            View site
          </Link>
          <button type="button" onClick={handleLogout} className="admin-toolbar__action">
            Log out
          </button>
        </div>
      </header>

      <div className="admin-section-body">
        {activeSection === "overview" && (
          <section className="admin-section-panel" aria-label="Overview">
            {loading ? (
              <p className="admin-status">Loading…</p>
            ) : error && !stats ? (
              <div className="admin-status admin-status--error">
                <p>{error}</p>
                <p className="admin-status__hint">
                  {error.includes("not configured")
                    ? "Set DB_URL in .env and restart the server."
                    : "Verify DB_URL in .env and restart the dev server."}
                </p>
              </div>
            ) : stats ? (
              <>
                <dl className="admin-metrics" aria-label="Database statistics">
                  <div className="admin-metric">
                    <dt>Total records</dt>
                    <dd>{stats.total}</dd>
                  </div>
                  <div className="admin-metric">
                    <dt>Images</dt>
                    <dd>{stats.imageCount}</dd>
                  </div>
                  <div className="admin-metric">
                    <dt>Videos</dt>
                    <dd>{stats.videoCount}</dd>
                  </div>
                  <div className="admin-metric">
                    <dt>Date span</dt>
                    <dd className="admin-metric__span">
                      {stats.oldest && stats.newest
                        ? `${stats.oldest.date} – ${stats.newest.date}`
                        : "—"}
                    </dd>
                  </div>
                </dl>
                {stats.total === 0 ? (
                  <p className="admin-overview-note">
                    Database is empty.{" "}
                    <button type="button" onClick={() => setActiveSection("import")}>
                      Import from NASA
                    </button>{" "}
                    to add records.
                  </p>
                ) : (
                  <p className="admin-overview-note">
                    {stats.total} records stored. Use{" "}
                    <button type="button" onClick={() => setActiveSection("archive")}>
                      Archive
                    </button>{" "}
                    to search or delete, or{" "}
                    <button type="button" onClick={() => setActiveSection("import")}>
                      Import
                    </button>{" "}
                    to add more.
                  </p>
                )}
              </>
            ) : null}
          </section>
        )}

        {activeSection === "import" && (
          <section className="admin-section-panel" aria-label="Import from NASA">
            <AdminSyncPanel onSynced={refreshAll} />
          </section>
        )}

        {activeSection === "archive" && (
          <section className="admin-section-panel" aria-label="Archive records">
            <AdminApodTable key={tableKey} onRecordsChange={loadStats} />
          </section>
        )}
      </div>
    </div>
  );
}
