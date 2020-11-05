import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import { selectLoggedInUser } from "../../store/Auth/authSelectors";
import { logout } from "../../store/Auth/authActions";

function Toolbar() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectLoggedInUser);
  console.log("WHO IS LOGGED IN?", loggedInUser);

  if (loggedInUser === null) {
    return <h1>NO LOGGED IN USER</h1>;
  }

  return (
    <div className="Toolbar">
      {!loggedInUser.accessToken ? (
        <Link to="/login">
          <button>Go to login!</button>
        </Link>
      ) : (
        <h2>Hello! {loggedInUser.me.name}</h2>
      )}
      {loggedInUser.accessToken ? <button onClick={() => dispatch(logout())}>Logout</button> : null}
    </div>
  );
}

export default Toolbar;
