import PageShell from "@/components/PageShell";
import WalletConnect from "@/components/WalletConnect";
import StatCard from "@/components/StatCard";
import Link from "next/link";

export default function Home() {
  return (
    <PageShell title="Dashboard" subtitle="Welcome to your XRPL DApp starter">
      {/* Hero */}
      <div className="card p-8 mb-6 bg-gradient-to-r from-[--color-brand-50] to-white">
        <h2 className="text-2xl md:text-3xl font-semibold">Build on XRPL, fast.</h2>
        <p className="text-gray-600 mt-2">
          Connect your wallet, swap tokens, and prototype strategies — all in one minimal scaffold.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/swap" className="btn-primary">Try Swap</Link>
          <Link href="/strategy" className="btn-outline">See Strategy</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Portfolio" value="$12,340" hint="mock" />
        <StatCard label="LP Shares" value="0.00" hint="mock" />
        <StatCard label="Pending Rewards" value="0.0000" hint="mock" />
      </div>

      {/* Wallet */}
      <div className="mt-6">
        <WalletConnect />
      </div>
    </PageShell>
  );
}
