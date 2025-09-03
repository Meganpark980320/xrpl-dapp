"use client";
import { useState } from "react";

export default function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);
  return (
    <div className="card p-5 flex items-center justify-between gap-3">
      <div>
        <div className="text-sm text-gray-600">Wallet</div>
        <div className="font-medium">{address ?? "Not connected"}</div>
      </div>
      {address ? (
        <button className="btn-outline" onClick={() => setAddress(null)}>Disconnect</button>
      ) : (
        <button className="btn-primary" onClick={() => setAddress("rMockAddress123456789")}>
          Connect (mock)
        </button>
      )}
    </div>
  );
}
