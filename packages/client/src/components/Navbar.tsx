import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './blocks/Button';

export const Navbar: FC = () => {
  return (
    <nav className="bg-gray-900 py-2 px-6 w-full flex justify-between">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-2xl">1ne2wo3ree</span>
        </Link>
      </div>
      <div className="">
        <Link to="/login" className="mr-2">
          <Button buttonStyle="secondary">Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </div>
    </nav>
  );
};
