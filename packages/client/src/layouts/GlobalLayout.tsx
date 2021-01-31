import React, { FC } from 'react';
import { Navbar } from '../components/Navbar';

import './global-style.css';

export const GloablLayout: FC = ({ children }) => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto max-w-screen-lg py-12 px-6">
        {children}
      </div>
    </div>
  );
};
