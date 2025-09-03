import TopNav from "./TopNav";

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <TopNav />
      <main className="max-w-6xl mx-auto flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {children}
      </main>
      <footer className="border-t py-4 text-center text-sm text-gray-500 bg-white">
        © 2025 XRPL DApp Starter
      </footer>
    </div>
  );
}
