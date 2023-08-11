import axios from 'axios'

export const publicAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
