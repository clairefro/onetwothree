import * as React from 'react';
import { toast } from 'react-toastify';
import { ScoreDao, ScoreDaoImpl } from '../daos/scoreDao';
import { UserDao, UserDaoImpl } from '../daos/userDao';

interface AppContextI {
  user: User | null;
  userDao: UserDao;
  scoreDao: ScoreDao;
  notify: typeof toast;
  setUser: (user: User | null) => void;
}

export const defaultContext = {
  user: null,
  userDao: new UserDaoImpl(),
  scoreDao: new ScoreDaoImpl(),
  setUser: () => {}, // set in App.tsx
  notify: toast,
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useContext = () => React.useContext<AppContextI>(AppContext);
