import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { fetchProductsList } from "../../actions";
import Product from "./Product";

const Products = (props) => {
  const mounted = useRef();
  const [Data, setData] = useState(null);

  useEffect(() => {
    if (!mounted.current) {
      props.fetchProductsList();
    }
    mounted.current = true;
  });

  const displayProducts = () => {
    if (!Data) {
      return props.products.map((item) => {
        return (
          <li key={item.id} className="products-list">
            <Link to={`/products/${item.id}`}>
              <div>{item.name}</div>
            </Link>
          </li>
        );
      });
    } else {
      return Data.map((item) => {
        return (
          <li key={item.id} className="products-list">
            <Link to={`/products/${item.id}`}>
              <div>{item.name}</div>
            </Link>
          </li>
        );
      });
    }
  };

  const handleYear = (e) => {
    let realProduct = null;
    if (!e.target.value) {
      return setData(props.products);
    } else {
      realProduct = props.products.filter((item) => {
        if (e.target.value == 2004) {
          return item.year >= 2004;
        } else if (e.target.value == 2003) {
          return item.year < 2004;
        }
      });
      setData(realProduct);
    }
  };

  const PRODUCTS = styled.ul`
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
      color: black;
    }
    li {
      padding: 1rem;
      list-style: none;
      padding-right: 1rem;
    }
    li:hover {
      background-color: rgba(48, 46, 46, 0.562);
    }
  `;

  return (
    <div className="products">
      <Route path="/products" exact>
        <>
          <select id="select-year" onChange={(e) => handleYear(e)}>
            <option value="">none</option>
            <option value="2004">After 2004</option>
            <option value="2003">Before 2004</option>
          </select>

          <PRODUCTS>{displayProducts()}</PRODUCTS>
        </>
      </Route>
      <Route path="/products/:id" exact component={Product} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.Products,
  };
};

export default connect(mapStateToProps, { fetchProductsList })(Products);
