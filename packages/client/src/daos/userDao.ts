import { apiCall } from '../utils/apiCall';

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserDao {
  login: (input: LoginInput) => Promise<User>;
  logout: () => Promise<boolean>;
  signup: (input: LoginInput) => Promise<User>;
}

// errors handled in components
export class UserDaoImpl implements UserDao {
  async login(input: LoginInput): Promise<User> {
    const user = await apiCall.post<User>('/login', input);
    return user;
  }

  async logout() {
    const success = await apiCall.post<boolean>('/logout');
    return success;
  }

  async signup(input: LoginInput): Promise<User> {
    const user = await apiCall.post<User>('/users', input);
    return user;
  }
}
