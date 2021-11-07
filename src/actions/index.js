import ProductHttp from "../container/Products/server";
import UserHttp from "../container/Users/server";

export const fetchUsersList = () => async (dispatch) => {
  const response = await UserHttp.get("/users");
  const data = await response.data;
  dispatch({ type: "FETCH_USERS_LIST", payload: data.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await UserHttp.get(`/users/${id}`);
  const data = await response.data;
  dispatch({ type: "FETCH_USER", payload: data.data });
};

export const fetchProductsList = () => async (dispatch) => {
  const response = await ProductHttp.get("/products");
  const data = await response.data;
  dispatch({ type: "FETCH_PRODUCTS_LIST", payload: data.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await ProductHttp.get(`/products/${id}`);
  const data = await response.data;
  dispatch({ type: "FETCH_PRODUCT", payload: data.data });
};

let bit = [];
export const fetchCoinWebSocket = () => async (dispatch) => {
  let assets = "bitcoin,tron,ethereum,usdt";
  let url = `wss://ws.coincap.io/prices?assets=${assets}`;
  const websocket = new WebSocket(url);
  websocket.onmessage = (result) => {
    let price = JSON.parse(result.data);
    Object.entries(price).map((item) => {
      let index = bit.findIndex((a) => a.symbol === item[0]);
      if (index < 0) {
        const obj = {};
        obj.symbol = item[0];
        obj.price = item[1];
        bit.push(obj);
      } else {
        bit[index].price = item[1];
        bit = JSON.parse(JSON.stringify(bit));
      }
    });
    dispatch({ type: "FETCH_COINS", payload: bit });
  };
};
