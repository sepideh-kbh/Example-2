import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const getComments = () => {
  return axios.get(`${baseURL}/comments`);
}

export const getPosts = () => {
  return axios.get(`${baseURL}/posts`);
}