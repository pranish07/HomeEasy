// components/Header.tsx
import React from "react";
import { Globe, Menu, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-[90%] m-auto">
      <div className="flex justify-between items-center py-4">
        <div>
          <p className="text-xl font-bold">Airbnb</p>
        </div>
        <div className="flex gap-6 text-center">
          <button className="hover:underline">Places to Stay</button>
          <button className="hover:underline">Experiences</button>
          <button className="hover:underline">Online Experiences</button>
        </div>
        <div className="flex items-center gap-3">
          <a className="hover:underline">Become a host</a>
          <Globe size={16} />
          <div className="flex border w-[86px] h-12 p-4 rounded-full border-slate-400 items-center justify-around">
            <Menu size={16} />
            <div className="bg-slate-400 rounded-full p-1">
              <UserRound className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
