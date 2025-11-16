import React, { useState } from 'react';
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  X,
  Phone,
} from 'lucide-react';
import LoginForm from './forms/LoginFrom';
import RegisterForm from './forms/RegisterForm';

export default function LoginDialog({ isOpen, onClose, defaultTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // If defaultTab changes (e.g., from header), update activeTab
  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-lg overflow-hidden shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-green-600 p-6 text-center text-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            ⛳
          </div>
          <h2 className="text-xl font-semibold">Welcome to TeeGolf</h2>
          <p className="text-green-100 text-sm">
            Your gateway to premium golf experiences
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === 'login'
                ? 'border-b-2 border-green-600 text-green-600 font-semibold'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('login')}
          >
            <LogIn className="inline w-4 h-4 mr-1" />
            Login
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === 'register'
                ? 'border-b-2 border-green-600 text-green-600 font-semibold'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('register')}
          >
            <UserPlus className="inline w-4 h-4 mr-1" />
            Register
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'login' && <LoginForm onClose={onClose} />}

          {activeTab === 'register' && (
            <RegisterForm setActiveTab={setActiveTab} />
          )}
        </div>
      </div>
    </div>
  );
}
