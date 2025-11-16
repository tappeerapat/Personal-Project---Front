import React, { useState } from 'react';
import {
  Flag,
  Flame,
  Box,
  Info,
  Globe,
  Phone,
  User,
  LandPlot,
  UserPlus, // ยังคง import ไว้ แต่ไม่ได้ใช้แล้วในส่วน Header
} from 'lucide-react';
import LoginDialog from './LoginDialog';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState('login'); // "login" or "register"

  return (
    <>
      <header className="w-full shadow-sm bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* LEFT SECTION — LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-700 text-xl">⛳</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-green-600">TeeGolf</h1>
              <p className="text-sm text-gray-500 -mt-1">
                Book Your Perfect Round
              </p>
            </div>
          </div>

          {/* CENTER — NAVIGATION MENU */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <MenuItem
              icon={<Flag size={18} color="green" />}
              label="Golf Courses"
            />
            <MenuItem
              icon={<Flame size={18} color="red" />}
              label="Hot Deals"
            />
            <MenuItem icon={<Box size={18} color="blue" />} label="Packages" />
            <MenuItem icon={<Info size={18} />} label="About Us" />
          </nav>

          {/* RIGHT SECTION (Language / Contact / Sign In) */}
          <div className="flex items-center gap-6 text-gray-700">
            <MenuItem icon={<Globe size={18} />} label="EN" />
            <MenuItem icon={<Phone size={18} />} label="Contact" />

            {/* SIGN IN BUTTON */}
            <button
              onClick={() => {
                // หากต้องการให้ปุ่ม Sign In เปิดไปที่ Tab Login เสมอ
                setDefaultTab('login');
                setIsLoginOpen(true);
              }}
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
            >
              <User size={18} />
              Sign In
            </button>

            {/* ปุ่ม REGISTER BUTTON ถูกนำออกไปแล้วตามคำขอ
             */}
          </div>
        </div>
      </header>

      {/* Login/Register Popup */}
      <LoginDialog
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        defaultTab={defaultTab}
      />
    </>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
      {icon}
      <span>{label}</span>
    </div>
  );
}
