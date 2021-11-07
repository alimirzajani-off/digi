import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchProduct } from "../../actions";

const Product = (props) => {
  let { id } = useParams();
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      props.fetchProduct(id);
    }
    mounted.current = true;
  });

  const PRODUCT = styled.div`
    text-align: center;
    div {
      padding: 5px;
    }
  `;

  const { name, year, color, pantone_value, id: ID } = props.product;
  return (
    <PRODUCT key={ID} className="product">
      <div>product name:{name}</div>
      <div>product color:{color}</div>
      <div>year:{year}</div>
    </PRODUCT>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.Product,
  };
};

export default connect(mapStateToProps, { fetchProduct })(Product);
