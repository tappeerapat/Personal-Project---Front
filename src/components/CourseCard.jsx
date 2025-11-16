import React, { useState } from 'react';
import { MapPin, Star, Heart, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function CourseCard({ course, onCourseClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBookNow = (e) => {
    e.stopPropagation();
    if (onCourseClick) onCourseClick(course);
  };

  return (
    <Link
      to={`/courses/${course.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
    >
      {/* Image */}
      <div className="h-40 overflow-hidden relative group">
        <img
          src={course.images[0]?.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 bg-white rounded-full p-1.5 hover:bg-gray-100 shadow"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Hot Deal badge */}
        {course.price && parseInt(course.price.replace(',', '')) < 2000 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
            Hot Deal
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-gray-900 font-medium text-[15px] mb-1 line-clamp-1">
          {course.name}
        </h3>

        {/* Location + Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-gray-600 text-xs">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            {course.location}
          </div>

          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span>{course.rating}</span>
            <span className="text-gray-500">({course.reviews})</span>
          </div>
        </div>

        {/* Facilities */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <div className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-50 px-2 py-0.5 rounded">
            <Users className="w-3 h-3" />
            {course.holes} Holes
          </div>

          {(course.facilities || []).slice(0, 2).map((facility, index) => (
            <span
              key={index}
              className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded"
            >
              {facility}
            </span>
          ))}
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-500">Starting from</p>
            <p className="text-green-600 leading-none">
              <span className="text-xl font-semibold">฿{course.price}</span>
              <span className="text-xs text-gray-500">/person</span>
            </p>
          </div>

          <button
            onClick={handleBookNow}
            className="bg-green-600 text-white text-xs px-3 py-1.5 rounded hover:bg-green-700 transition"
          >
            Book
          </button>
        </div>
      </div>
    </Link>
  );
}
