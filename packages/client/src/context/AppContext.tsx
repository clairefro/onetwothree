import * as React from 'react';
import { toast } from 'react-toastify';
import { UserDao, UserDaoImpl } from '../daos/userDao';

interface AppContextI {
  user: User | null;
  userDao: UserDao;
  notify: typeof toast;
  setUser: (user: User | null) => void;
}

export const defaultContext = {
  user: null,
  userDao: new UserDaoImpl(),
  setUser: () => {},
  notify: toast,
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useContext = () => React.useContext<AppContextI>(AppContext);
