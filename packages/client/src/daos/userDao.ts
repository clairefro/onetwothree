import { apiCall } from '../utils/apiCall';

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserDao {
  login: (input: LoginInput) => Promise<User>;
  logout: () => Promise<boolean>;
  signup: (input: LoginInput) => Promise<User>;
  me: () => Promise<User | null>;
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

  async me(): Promise<User | null> {
    try {
      const user = await apiCall.get<User>('/me');
      if (!user) {
        return null;
      }
      return user;
    } catch (e) {
      console.log(e);
      return null; // fail sliently
    }
  }
}
