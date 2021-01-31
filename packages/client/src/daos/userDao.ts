import { apiCall } from '../utils/apiCall';

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserDao {
  login: (input: LoginInput) => Promise<User | void>;
  logout: () => Promise<boolean>;
}

// error hangling in components instead?
export class UserDaoImpl implements UserDao {
  async login(input: LoginInput) {
    try {
      const user = await apiCall.post<User>('/login', input);
      return user;
    } catch (e) {
      alert(e);
    }
  }

  async logout() {
    // TODO
    return true;
  }
}
