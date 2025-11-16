import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div className="relative h-[700px] bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1592937238247-cd0090e02f65?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
          alt="Golf Course Sunset View"
          className="w-full h-full object-cover object-top opacity-60"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-white text-5xl md:text-6xl mb-4">
            Discover Thailand's Finest Golf Courses
          </h1>
          <p className="text-white text-xl md:text-2xl opacity-90">
            Book your perfect tee time at premium courses across Thailand
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2">
                Location
              </label>
              <MapPin className="absolute left-3 top-1/2 translate-y-0 text-green-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Where to play?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2">Date</label>
              <Calendar className="absolute left-3 top-1/2 translate-y-0 text-green-600 w-5 h-5" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full h-10 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Players */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2">
                Players
              </label>
              <Users className="absolute left-3 top-1/2 translate-y-0 text-green-600 w-5 h-5" />
              <select className="w-full h-10 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <option>1 Player</option>
                <option>2 Players</option>
                <option>3 Players</option>
                <option>4 Players</option>
                <option>5 Players</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
