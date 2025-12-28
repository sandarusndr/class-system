import React from "react";
import { BookOpen, CalendarCheck, DollarSign, BarChart2, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl p-10 mb-8">
        <h1 className="text-4xl font-bold mb-2">🎓 Class Management System</h1>
        <p className="text-lg opacity-90">
          Manage your classes, attendance, payments, and performance — all in one place.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <CalendarCheck className="text-indigo-500 w-10 h-10 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Track Attendance</h2>
          <p className="text-gray-600">
            Mark and review attendance for each of the 4 weekly classes. Stay consistent and
            monitor attendance history at a glance.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <BookOpen className="text-green-500 w-10 h-10 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Classes & Homework</h2>
          <p className="text-gray-600">
            Access Zoom links instantly and check assigned homeworks. Learning has never been so
            organized!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <DollarSign className="text-yellow-500 w-10 h-10 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <p className="text-gray-600">
            View monthly payments, track due amounts, and check payment history with ease.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <BarChart2 className="text-pink-500 w-10 h-10 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Performance</h2>
          <p className="text-gray-600">
            Visualize test results with interactive charts and track your overall progress.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Users className="text-blue-500 w-10 h-10 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Contacts</h2>
          <p className="text-gray-600">
            Quickly connect with teachers, admins, and support staff when you need guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
