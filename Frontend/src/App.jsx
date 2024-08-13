import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./page/Login/Login'));
const Register = React.lazy(() => import('./page/Register/Register'));
const Dashboard = React.lazy(() => import('./page/Dashboard/Dashboard'));
const Attendance = React.lazy(() => import('./page/Attendance/Attendance'));
const Salary = React.lazy(() => import('./page/Salary/Salary'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/salary' element={<Salary />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
