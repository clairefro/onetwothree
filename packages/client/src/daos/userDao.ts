import { apiCall } from '../utils/apiCall';

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserDao {
  login: (input: LoginInput) => Promise<User>;
  logout: () => Promise<boolean>;
}

// error handling in components
export class UserDaoImpl implements UserDao {
  async login(input: LoginInput): Promise<User> {
    const user = await apiCall.post<User>('/login', input);
    return user;
  }

  async logout() {
    // TODO
    return true;
  }
}
