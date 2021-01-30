import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Navbar: FC = () => {
  return (
    <nav>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </nav>
  );
};
