"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "SELECT" },
  { href: "/gallery", label: "ARCHIVE" },
  { href: "/news", label: "HEADLINES" },
  { href: "/about", label: "ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 md:px-10">
      <Link
        href="/"
        className="text-xl md:text-2xl font-bold tracking-[0.08em] uppercase text-white"
      >
        Stargaze
      </Link>

      <ul className="flex items-center gap-4 md:gap-6 list-none">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`label-caps transition-colors ${
                  active ? "text-[#e85d04]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
