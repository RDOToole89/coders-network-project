import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="NavBar-list">
        <NavLink to="/">
          <li className="NavBar-list-item">home</li>
        </NavLink>
        <NavLink to="/posts/newpost">
          <li className="NavBar-list-item">create new post</li>
        </NavLink>
        <NavLink to="/login">
          <li className="NavBar-list-item">login</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
