import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7KOZcUtLkREMkNpSaIj1t2OUQ6VHtOvc2bPNEw1OKdM',
  },
});
