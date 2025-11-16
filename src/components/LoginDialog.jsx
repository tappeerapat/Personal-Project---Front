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

export default function LoginDialog({ isOpen, onClose, defaultTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // If defaultTab changes (e.g., from header), update activeTab
  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Login states
  const [loginEmailOrPhone, setLoginEmailOrPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register states
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { loginEmailOrPhone, loginPassword });
    onClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Register:', {
      registerFirstName,
      registerLastName,
      registerEmail,
      registerPassword,
    });
    onClose();
  };

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
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Email or Phone"
                  value={loginEmailOrPhone}
                  onChange={(e) => setLoginEmailOrPhone(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showLoginPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Sign In
              </button>
            </form>
          )}

          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={registerFirstName}
                    onChange={(e) => setRegisterFirstName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="relative flex-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={registerLastName}
                    onChange={(e) => setRegisterLastName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={registerPhone}
                  onChange={(e) => setRegisterPhone(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showRegisterPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showRegisterPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
