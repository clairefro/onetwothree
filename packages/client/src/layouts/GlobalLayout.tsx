import React, { FC } from 'react';
import { Navbar } from '../components/Navbar';

export const GloablLayout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
