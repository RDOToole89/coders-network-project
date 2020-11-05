import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/Auth/authActions";
import "./LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("TODO login with:", email, password);
    dispatch(login(email, password));
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="LoginPage-form">
        <label htmlFor="email">Email</label>
        <input
          className="LoginPage-form-input"
          id="email"
          type={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="LoginPage-form-input"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="LoginPage-form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
