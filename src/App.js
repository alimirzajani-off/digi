import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./container/Users/Users";
import User from "./container/Users/User";
import Products from "./container/Products/Products";
import Coins from "./container/Coins/Coins";
import "./App.css";
import styled from "styled-components";

const App = () => {
  const NAV = styled.ul`
    display: flex;
    a {
      text-decoration: none;
      color: black;
    }
    li {
      list-style: none;
      padding-right: 1rem;
    }
  `;

  const APP = styled.div`
    text-align: center;
    a {
      text-decoration: none;
      color: black;
    }
  `;

  return (
    <Router>
      <div>
        <NAV className="nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/users">USERS</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/coins">COINS</Link>
          </li>
        </NAV>
        <hr />
        <Switch>
          <Route path="/" exact>
            <APP className="App">
              <h4>welocme!</h4>
            </APP>
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/products" component={Products} />
          <Route path="/coins" component={Coins} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
