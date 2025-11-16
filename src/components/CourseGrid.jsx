import React from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard';
import { useLoaderData } from 'react-router';

export default function CourseGrid({
  searchQuery,
  selectedRegion,
  priceRange,
  onCourseClick,
}) {
  const courses = useLoaderData();
  console.log(courses);

  //   const courses = [

  //     {
  //       id: 1,
  //       name: 'Thai Country Club',
  //       location: 'Bangkok',
  //       price: '3,200',
  //       image:
  //         'https://images.unsplash.com/photo-1592937238247-cd0090e02f65?auto=format&fit=crop&w=1200&q=80',
  //       rating: 4.8,
  //     },
  //     {
  //       id: 2,
  //       name: 'Green Valley Country Club Bangkok',
  //       location: 'Bangkok',
  //       price: '2,900',
  //       image:
  //         'https://image.makewebcdn.com/makeweb/m_1920x0/zo8GyB4Nl/AfirstPage%2F01.png?v=202405291424',
  //       rating: 4.7,
  //     },
  //     {
  //       id: 3,
  //       name: 'Flora Ville Golf & Country Club',
  //       location: 'Bangkok',
  //       price: '4,200',
  //       image:
  //         'https://wallpapers.com/images/high/ultra-hd-golf-blue-red-sky-982gsggnct5pkwyh.webp',
  //       rating: 4.9,
  //     },
  //   ];

  // 🔍 FILTER LOGIC
  const filteredCourses = courses;
  //   .filter((course) => {
  //     // search by name or location
  //     const searchMatch =
  //       course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       course.location.toLowerCase().includes(searchQuery.toLowerCase());

  //     // filter region
  //     const regionMatch =
  //       selectedRegion === 'all' ||
  //       course.location.toLowerCase() === selectedRegion.toLowerCase();

  //     // filter price range
  //     const price = parseInt(course.price.replace(',', ''));
  //     let priceMatch = true;

  //     if (priceRange === 'budget') priceMatch = price < 1500;
  //     else if (priceRange === 'mid') priceMatch = price >= 1500 && price <= 3000;
  //     else if (priceRange === 'premium') priceMatch = price > 3000;

  //     return searchMatch && regionMatch && priceMatch;
  //   });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Featured Golf Courses
            </h2>
          </div>
          <p className="text-gray-600 mt-1">
            Discover top golf courses across Thailand
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onCourseClick={onCourseClick}
          />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No courses match your filters.</p>
        </div>
      )}
    </div>
  );
}
