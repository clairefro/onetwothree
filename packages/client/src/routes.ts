import type { FC } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Signup } from './pages/Signup';

interface Route {
  path: string;
  component: FC<any>;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
