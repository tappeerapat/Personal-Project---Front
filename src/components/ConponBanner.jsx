import React from 'react';
import { Ticket } from 'lucide-react';

export default function CouponBanner() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="relative bg-linear-to-r from-orange-400 via-orange-300 to-yellow-200 rounded-xl overflow-hidden shadow-lg">
        <div className="relative px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Ticket className="w-6 h-6 text-orange-700" />
              <span className="text-orange-800 uppercase tracking-wider text-xs">
                Special Promotion
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl mb-1 text-orange-900 leading-tight">
              <span className="block text-xl md:text-2xl">
                ENJOY GOLF ROUND
              </span>
              <span className="block">ON NOVEMBER</span>
            </h2>

            <p className="text-orange-800 text-xs">1–30 NOV 2025</p>
          </div>

          {/* Center discount */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-md">
              <p className="text-orange-700 text-xs mb-1">GET</p>
              <p className="text-4xl md:text-5xl text-blue-600">300</p>
              <p className="text-orange-700 text-xs">฿ OFF</p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-blue-500 rounded-lg px-4 py-2 mb-3">
              <p className="text-white text-xs mb-0.5">APPLY CODE</p>
              <p className="text-white text-lg font-semibold">WINTERGOLF</p>
            </div>

            <p className="text-orange-800 text-xs mb-3">
              Limited to 1 time / user
            </p>

            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold">
              GET DISCOUNT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
