import axios from "axios";

const baseurl = axios.create({
  // baseURL: `${process.env.REACT_APP_ENDPOINT}`,
  baseURL: `https://asos-birthday-tracker-001.onrender.com/`,

});

export { baseurl };
