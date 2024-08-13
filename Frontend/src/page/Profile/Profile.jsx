import React from 'react';

const Profile = ({ user }) => {
  // Example user data, typically this would come from an API or state
  // const user = {
  //   username: 'john_doe',
  //   email: 'john.doe@example.com',
  //   fullName: 'John Doe',
  //   address: '1234 Elm Street, Springfield, USA',
  //   phone: '+1 (555) 123-4567',
  //   bio: 'A passionate web developer with a love for coding and design.'
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Username:</h3>
            <p className="text-gray-600">{user.username}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Full Name:</h3>
            <p className="text-gray-600">{user.fullName}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Email:</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Phone:</h3>
            <p className="text-gray-600">{user.phone}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Address:</h3>
            <p className="text-gray-600">{user.address}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">Bio:</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
