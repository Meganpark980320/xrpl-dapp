"use client";
import { useState } from "react";

export default function SwapCard() {
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");

  return (
    <div className="card p-5 max-w-xl">
      <div className="label">From</div>
      <div className="flex gap-3 mt-1">
        <input className="input" placeholder="0.0" value={fromAmt} onChange={(e)=>setFromAmt(e.target.value)} />
        <select className="input max-w-[8rem]">
          <option>XRP</option>
          <option>PTX</option>
        </select>
      </div>

      <div className="mt-4 label">To</div>
      <div className="flex gap-3 mt-1">
        <input className="input" placeholder="0.0" value={toAmt} onChange={(e)=>setToAmt(e.target.value)} />
        <select className="input max-w-[8rem]">
          <option>PTX</option>
          <option>XRP</option>
        </select>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
        <div>Price</div>
        <div>1.0000 (mock)</div>
      </div>

      <button className="btn-primary w-full mt-4">Swap (mock)</button>
    </div>
  );
}
