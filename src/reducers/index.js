import { combineReducers } from "redux";
import coins from "./coin/coins";
import product from "./product/product";
import products from "./product/products";
import user from "./user/user";
import users from "./user/users";

export default combineReducers({
  Users: users,
  Products: products,
  User: user,
  Product: product,
  Coins: coins,
});
