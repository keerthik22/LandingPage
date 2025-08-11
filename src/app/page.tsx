'use client';
import Image from "next/image";
import Link from 'next/link';
import { 
  FaGraduationCap, 
  FaLaptop, 
  FaCertificate, 
  FaUsers, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaBook,
  FaChalkboardTeacher
} from 'react-icons/fa';


export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaGraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">EduSpace</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-indigo-600">Features</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-indigo-600">Benefits</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600">Contact</button>
            </div>
            <div className="flex gap-4">
              <Link href="./login">
                  <button className="px-4 py-2 text-black hover:text-gray-900">Login</button>
              </Link>
              <Link href="./signup">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Get Started
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Access over 1000+ courses from industry experts. Learn at your own pace
              and build your future today.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Start Learning
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <FaLaptop className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl text-gray-600 font-semibold mb-2">Online Learning</h3>
            <p className="text-gray-600">Learn from anywhere, at any time with our flexible online platform</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <FaCertificate className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl  text-gray-600 font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">Earn recognized certificates upon course completion</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <FaUsers className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl text-gray-600 font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals and experts</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <FaGraduationCap className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl  text-gray-600 font-semibold mb-2">Diverse Courses</h3>
            <p className="text-gray-600">Choose from a wide range of subjects and skills</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-indigo-50 rounded-xl transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with lifetime access to courses</p>
            </div>
            <div className="text-center p-6 hover:bg-indigo-50 rounded-xl transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChalkboardTeacher className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">Interactive Sessions</h3>
              <p className="text-gray-600">Engage in live sessions with expert instructors</p>
            </div>
            <div className="text-center p-6 hover:bg-indigo-50 rounded-xl transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">Access carefully curated and updated course materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  text-gray-600 text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaPhone className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-gray-600">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaEnvelope className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-gray-600">support@eduspace.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-gray-600">123 Education St, Learning City</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}