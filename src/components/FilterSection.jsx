import React from 'react';
import { Filter, MapPin, DollarSign } from 'lucide-react';

export default function FilterSection({
  selectedRegion,
  setSelectedRegion,
  priceRange,
  setPriceRange,
}) {
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'bangkok', label: 'Bangkok' },
    { value: 'pattaya', label: 'Pattaya' },
    { value: 'phuket', label: 'Phuket' },
    { value: 'chiangmai', label: 'Chiang Mai' },
    { value: 'huahin', label: 'Hua Hin' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under ฿1,500' },
    { value: 'mid', label: '฿1,500 - ฿3,000' },
    { value: 'premium', label: 'Over ฿3,000' },
  ];

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Filter Icon Label */}
          <div className="flex items-center gap-2 text-gray-700">
            <Filter className="w-5 h-5 text-green-600" />
            <span className="font-medium">Filter by:</span>
          </div>

          {/* Region Filter */}
          <div className="relative bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-gray-700 cursor-pointer"
            >
              {regions.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="relative bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-gray-700 cursor-pointer"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setSelectedRegion('all');
              setPriceRange('all');
            }}
            className="ml-2 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition"
          >
            Clear Filters
          </button>

          {/* Results Count */}
          <div className="ml-auto text-gray-600">
            <span>Showing 12 golf courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
