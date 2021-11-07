import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchUser } from "../../actions";

const User = (props) => {
  let { id } = useParams();
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      props.fetchUser(id);
    }
    mounted.current = true;
  });

  const { avatar, email, first_name, last_name, id: ID } = props.user;
  return (
    <USER key={ID} className="user">
      <div className="user-avatar">
        <img
          src={avatar}
          width="100px"
          height="100px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>first name:{first_name}</div>
      <div>last name:{last_name}</div>
      <div>email:{email}</div>
    </USER>
  );
};

const USER = styled.div`
  text-align: center;
  div {
    padding: 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.User,
  };
};

export default connect(mapStateToProps, { fetchUser })(User);
