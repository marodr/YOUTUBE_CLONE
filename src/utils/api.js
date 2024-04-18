import axios from "axios";
//require('dotenv').config()
console.log(process.env.REACT_APP_RAPID_API_KEY)

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "0a53778f24msh26c9fee4ef01f73p117c16jsn0b85f61d5d29",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = (endpoint, searchQuery) => {
  const apiOptions = {
    ...options,
    url: `${BASE_URL}${endpoint}`,
    params: {
      ...options.params,
      q: searchQuery,
    },
  };

  return axios.request(apiOptions);
};