import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCoinWebSocket } from "../../actions";

const Coins = (props) => {
  useEffect(() => {
    props.fetchCoinWebSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Coin = styled.div`
    padding: 1rem;
  `;

  const displayCoin = () => {
    return props.coins.map((item) => {
      return (
        <Coin key={item.symbol}>
          {item.symbol}:{item.price}
        </Coin>
      );
    });
  };

  return <div>{displayCoin()}</div>;
};

const mapStateToProps = (state) => {
  return { coins: state.Coins };
};

export default connect(mapStateToProps, { fetchCoinWebSocket })(Coins);
