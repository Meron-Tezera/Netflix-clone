import axios from "axios"; // this is the package or the module that i install
// base url to make request to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
