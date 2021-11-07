import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { fetchUsersList } from "../../actions";
import User from "./User";

const Users = (props) => {
  const mounted = useRef();
  let { id } = useParams();

  useEffect(() => {
    if (!mounted.current) {
      props.fetchUsersList();
    }
    mounted.current = true;
  });

  const displayUsers = () => {
    return props.users.map((item) => {
      return (
        <li key={item.id} className="users-list">
          <Link to={`/users/${item.id}`}>
            <div>{`${item.first_name} ${item.last_name}`}</div>
          </Link>
        </li>
      );
    });
  };

  const displayAdmin = () => {
    let Admin = null;
    Admin = props.users.filter((item) => {
      return item.email == "emma.wong@reqres.in";
    });
    if (Admin) {
      return Admin.map((item) => {
        return (
          <div key={item.id} className="admin">
            <div>
              <h3>Admin:</h3>
            </div>
            <div>
              <span>
                first name:
                {item.first_name}
              </span>
              <span>
                last name:
                {item.last_name}
              </span>
              <span>
                email:
                {item.email}
              </span>
            </div>
          </div>
        );
      });
    }
  };

  const USERS = styled.div`
    a {
      text-decoration: none;
      color: black;
    }
    ul {
      padding: 0;
      margin: 0;
    }
    li {
      padding: 1rem;
      list-style: none;
      padding-right: 1rem;
    }
    li:hover {
      background-color: rgba(48, 46, 46, 0.562);
    }
    .admin {
      padding: 0.5rem 0.5rem;
      border-bottom: 0.25px solid rgb(68, 65, 65);
      span {
        padding: 0.5rem;
      }
    }
  `;

  return (
    <USERS className="users">
      <Route path="/users" exact>
        {displayAdmin()}
        <ul>{displayUsers()}</ul>
      </Route>
      <Route path="/users/:id" component={User} />
    </USERS>
  );
};

const mapStateToProps = (state) => {
  return { users: state.Users };
};

export default connect(mapStateToProps, { fetchUsersList })(Users);
