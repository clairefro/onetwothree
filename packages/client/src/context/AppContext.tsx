import * as React from 'react';
import { UserDao, UserDaoImpl } from '../daos/userDao';

interface AppContextI {
  user: User | null;
  userDao: UserDao;
  setUser: (user: User | null) => void;
}

export const defaultContext = {
  user: null,
  userDao: new UserDaoImpl(),
  setUser: () => {},
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useContext = () => React.useContext<AppContextI>(AppContext);
