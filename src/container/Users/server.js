import axios from "axios";

const UserHttp = axios.create({
  baseURL: "https://reqres.in/api",
});

export default UserHttp;
