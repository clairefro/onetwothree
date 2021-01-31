import * as React from 'react';

interface AppContextI {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const defaultContext = {
  user: null,
  login: (_user: User) => console.warn('No context provider found.'),
  logout: () => console.warn('No context provider found.'),
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useContext = () => React.useContext<AppContextI>(AppContext);
