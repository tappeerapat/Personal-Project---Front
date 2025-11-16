import React, { useState } from 'react';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import CouponBanner from './components/ConponBanner';
import CourseGrid from './components/CourseGrid';
import Footer from './components/footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    window.scrollTo(0, 0);
  };
  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  // if (selectedCourse) {
  //   return (
  //     <CourseDetailPage
  //       course={selectedCourse}
  //       onBack={handleBackToCourses}
  //     />
  //   );
  // }

  return (
    <>
      <Header />
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <FilterSection
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <CourseGrid
        searchQuery={searchQuery}
        selectedRegion={selectedRegion}
        priceRange={priceRange}
        onCourseClick={handleCourseClick}
      />
      <CouponBanner />
      <Footer />
    </>
  );
}

export default App;
