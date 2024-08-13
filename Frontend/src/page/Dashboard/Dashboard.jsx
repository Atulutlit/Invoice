import React from "react";
import Sidebar from "../../component/Sidebar";
import Profile from "./../Profile/Profile";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-6 overflow-y-auto">
        <Profile/>
      </div>
    </div>
  );
};

export default Dashboard;
