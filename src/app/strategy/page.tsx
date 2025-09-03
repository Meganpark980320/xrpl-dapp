import PageShell from "@/components/PageShell";

export default function StrategyPage() {
  return (
    <PageShell title="Strategy" subtitle="Delta-neutral / funding fee strategy placeholder">
      <div className="card p-5 space-y-4 max-w-xl">
        <div className="label">Notional (USDC)</div>
        <input className="input" placeholder="1000" suppressHydrationWarning />   {/* ← 추가 */}

        <div className="label">Base Asset</div>
        <select className="input" suppressHydrationWarning>                       {/* ← 추가 */}
          <option>BTC</option>
          <option>ETH</option>
          <option>XRP</option>
        </select>

        <div className="flex gap-3 pt-2">
          <button className="btn-primary">Start (mock)</button>
          <button className="btn-outline">Stop (mock)</button>
        </div>
      </div>
    </PageShell>
  );
}
