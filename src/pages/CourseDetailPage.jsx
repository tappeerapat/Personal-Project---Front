import React, { useState } from 'react';
import {
  MapPin,
  Star,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Car,
  Check,
  Info,
} from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

export default function CourseDetailPage({ onBack }) {
  const { course } = useLoaderData();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numPlayers, setNumPlayers] = useState(1);
  const [needCart, setNeedCart] = useState(true);
  const [needCaddy, setNeedCaddy] = useState(true);

  const teeTimes = [
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
  ];

  const basePrice = parseInt(course.price);
  const cartPrice = needCart ? 500 : 0;
  const caddyPrice = needCaddy ? 400 : 0;
  const subtotal = (basePrice + cartPrice + caddyPrice) * numPlayers;
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to={'/'}
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </div>

      {/* Course Header Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={course.images[0]?.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                Featured
              </span>

              {basePrice < 2000 && (
                <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">
                  Hot Deal
                </span>
              )}
            </div>

            <h1 className="text-white text-3xl font-semibold mb-2">
              {course.name}
            </h1>

            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{course.location}</span>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
                <span className="text-gray-300">
                  ({course.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Info */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-gray-900 mb-4">Course Information</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Info className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Holes</p>
                    <p className="text-gray-900">{course.holes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-green-600" />
                <h3 className="text-gray-900">Select Date</h3>
              </div>

              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Tee Time Selection */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-green-600" />
                <h3 className="text-gray-900">Select Tee Time</h3>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {teeTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border-2 transition ${
                      selectedTime === time
                        ? 'border-green-600 bg-green-50 text-green-600'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Players */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-green-600" />
                <h3 className="text-gray-900">Number of Players</h3>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setNumPlayers(Math.max(1, numPlayers - 1))}
                  className="w-12 h-12 border rounded-lg flex items-center justify-center hover:border-green-600 transition"
                >
                  -
                </button>

                <span className="text-2xl w-12 text-center">{numPlayers}</span>

                <button
                  onClick={() => setNumPlayers(Math.min(4, numPlayers + 1))}
                  className="w-12 h-12 border rounded-lg flex items-center justify-center hover:border-green-600 transition"
                >
                  +
                </button>

                <span className="text-gray-500">(Max 4)</span>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-gray-900 mb-4">Additional Services</h3>

              <div className="space-y-4">
                {/* Cart */}
                <label className="flex items-center justify-between p-4 border rounded-lg hover:border-green-300 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Golf Cart</p>
                      <p className="text-sm text-gray-500">฿500 per person</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={needCart}
                    onChange={() => setNeedCart(!needCart)}
                    className="w-5 h-5"
                  />
                </label>

                {/* Caddy */}
                <label className="flex items-center justify-between p-4 border rounded-lg hover:border-green-300 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Caddy Service</p>
                      <p className="text-sm text-gray-500">฿400 per person</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={needCaddy}
                    onChange={() => setNeedCaddy(!needCaddy)}
                    className="w-5 h-5"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-gray-900 mb-4">Booking Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Course</span>
                  <span className="font-medium">{course.name}</span>
                </div>

                {selectedDate && (
                  <div className="flex justify-between text-sm">
                    <span>Date</span>
                    <span>{selectedDate}</span>
                  </div>
                )}

                {selectedTime && (
                  <div className="flex justify-between text-sm">
                    <span>Tee Time</span>
                    <span>{selectedTime}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span>Players</span>
                  <span>{numPlayers}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Green Fee</span>
                  <span>฿{(basePrice * numPlayers).toLocaleString()}</span>
                </div>

                {needCart && (
                  <div className="flex justify-between text-sm">
                    <span>Cart</span>
                    <span>฿{(cartPrice * numPlayers).toLocaleString()}</span>
                  </div>
                )}

                {needCaddy && (
                  <div className="flex justify-between text-sm">
                    <span>Caddy</span>
                    <span>฿{(caddyPrice * numPlayers).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span>Tax (7%)</span>
                  <span>฿{tax.toLocaleString()}</span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-green-600 text-2xl font-bold">
                    ฿{total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-4 rounded-lg text-white font-medium transition ${
                  !selectedDate || !selectedTime
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {!selectedDate || !selectedTime
                  ? 'Select Date & Time'
                  : 'Proceed to Payment'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Free cancellation up to 24 hours before tee time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
