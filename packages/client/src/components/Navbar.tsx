import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from '../context/AppContext';
import { Button } from './blocks/Button';

export const Navbar: FC = () => {
  const { setUser, user, userDao, notify } = useContext();
  const isLoggedIn = !!user;
  useEffect(() => {
    const getMe = async () => {
      const me = await userDao.me();
      if (me) setUser(me);
    };
    getMe();
  }, []);

  const logout = async () => {
    try {
      await userDao.logout();
      setUser(null);
    } catch (e) {
      notify.error(e.message);
    }
  };

  const nonAuthView = (
    <>
      <Link to="/login" className="mr-2">
        <Button buttonStyle="secondary">Login</Button>
      </Link>
      <Link to="/signup">
        <Button>Signup</Button>
      </Link>
    </>
  );
  const authView = (
    <div className="flex">
      <div className="flex items-center mx-4">
        Yo,&nbsp;
        <span className="text-green-400 font-semibold">{user?.username}</span>!
      </div>
      <Button buttonStyle="secondary" onClick={logout}>
        Logout
      </Button>
    </div>
  );

  return (
    <nav className="bg-gray-900 py-2 px-6 w-full flex justify-between">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-xl sm:text-2xl text-white">1ne2wo3ee</span>
        </Link>
      </div>
      <div>{isLoggedIn ? authView : nonAuthView}</div>
    </nav>
  );
};
