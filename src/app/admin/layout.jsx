import Link from "next/link";
import "./admin.css";

export const metadata = {
  title: "Stargaze Admin",
  description: "Manage APOD database",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell min-h-dvh flex flex-col bg-black text-white">
      <header className="shrink-0 border-b-2 border-[#e85d04] bg-black h-12 flex items-center justify-between">
        <Link
          href="/admin"
          className="text-sm font-bold tracking-[0.08em] uppercase text-white pl-3"
        >
          Stargaze Admin
        </Link>
        <span className="label-caps text-white/50 hidden sm:inline pr-3">
          APOD Database
        </span>
      </header>
      <main className="flex-1 min-h-0">{children}</main>
      <footer className="shrink-0 border-t border-white/20 bg-black h-10 flex items-center">
        <p className="label-caps text-white/40 text-[10px] pl-3">
          Internal use only
        </p>
      </footer>
    </div>
  );
}
