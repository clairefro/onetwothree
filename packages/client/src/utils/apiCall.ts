import axios from 'axios';

axios.defaults.withCredentials = true;

/* for hitting backend specifically */
const buildUrl = (endpoint: string) => {
  const baseUrl = 'http://localhost:4444';
  return baseUrl + endpoint;
};

export const apiCall = {
  get: (endpoint: string): Promise<any> => {
    return axios.get(buildUrl(endpoint)).then((res) => res.data);
  },
  post: (endpoint: string, body: any): Promise<any> => {
    return axios.post(buildUrl(endpoint), body).then((res) => res.data);
  },
};
