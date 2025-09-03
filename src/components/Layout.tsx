import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold">XRPL DApp Demo</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto">{children}</main>
      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 XRPL DApp Starter
      </footer>
    </div>
  );
}
