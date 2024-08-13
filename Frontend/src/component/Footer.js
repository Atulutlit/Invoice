import React from 'react';

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p> {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
