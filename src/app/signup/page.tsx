'use client';
import { FaGraduationCap, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function Signup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center mb-8">
            <FaGraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-black">EduSpace</span>
          </Link>
          <h2 className="text-3xl font-bold text-black mb-2">Create Account</h2>
          <p className="text-black mb-8">Get started with your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                required
                className="w-full pl-10 p-3 border rounded-lg text-black focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                required
                className="w-full pl-10 p-3 border rounded-lg text-black focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                required
                className="w-full pl-10 p-3 border rounded-lg text-black focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Create a password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-black">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-800">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}