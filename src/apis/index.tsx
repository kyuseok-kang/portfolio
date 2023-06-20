import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { 'Content-type': 'application/json' }
});

export const getInfo = async () => {
  // const { data } = await apiClient.get('info.json');
  // return data;
};
