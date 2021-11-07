import axios from "axios";

const ProductHttp = axios.create({
  baseURL: "https://reqres.in/api",
});

export default ProductHttp;
