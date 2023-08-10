import axios from 'axios'

export const publicAxios = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
