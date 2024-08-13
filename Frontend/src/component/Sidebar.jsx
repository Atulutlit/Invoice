import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <div className="p-4 text-lg font-bold text-center bg-gray-900">
        Admin Dashboard
      </div>
      <nav className="flex-grow mt-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/profile"
              className="block py-2.5 px-4 rounded hover:bg-gray-700"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/salary"
              className="block py-2.5 px-4 rounded hover:bg-gray-700"
            >
              Salary
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className="block py-2.5 px-4 rounded hover:bg-gray-700"
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="block py-2.5 px-4 rounded hover:bg-gray-700"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
