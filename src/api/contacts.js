import axios from "axios";

export default axios.create({
  baseURL: "https://studyndev-simple-crud.herokuapp.com/"
  //baseURL: "http://localhost:3006/"
});
