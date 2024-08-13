import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/attendance" className="hover:underline">
            Attendance
          </Link>
          <Link to="/salary" className="hover:underline">
            Salary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
