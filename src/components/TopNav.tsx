"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl text-sm font-medium ${
        active ? "bg-gray-100" : "hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
}

export default function TopNav() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl" style={{ background: "var(--color-brand-600)" }} />
          <div className="font-semibold">XRPL DApp</div>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink href="/" label="Dashboard" />
          <NavLink href="/swap" label="Swap" />
          <NavLink href="/strategy" label="Strategy" />
        </nav>
      </div>
    </header>
  );
}
